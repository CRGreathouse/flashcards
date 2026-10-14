#!/usr/bin/env bash
# Builds each game variant into its own folder (./grade1, ./grade3), ready to upload to GitHub Pages.
#
#   ./build.sh            build every variant in variants/
#   ./build.sh grade1     build just the ones named
#
# A variant is variants/<name>/variant.sh (TITLE, DESCRIPTION, THEME) plus variants/<name>/config.js
# (the facts and save slot). src/index.html is shared. Its /*@include VARIANT/...*/ and
# /*@include THEME/...*/ lines are replaced by those files, and {{TITLE}} and {{DESCRIPTION}} by the variant's values.
set -euo pipefail
cd "$(dirname "$0")"

if [ $# -eq 0 ]; then
  set -- $(ls variants)
fi

for name in "$@"; do
  vdir="variants/$name"
  [ -f "$vdir/variant.sh" ] || { echo "No such variant: $name (expected $vdir/variant.sh)" >&2; exit 1; }
  (
    TITLE="" DESCRIPTION="" THEME=""
    source "$vdir/variant.sh"
    tdir="themes/$THEME"
    [ -n "$THEME" ] && [ -d "$tdir" ] || { echo "$name: unknown theme '$THEME'" >&2; exit 1; }

    out="$name"
    rm -rf "$out"
    mkdir -p "$out"

    TITLE="$TITLE" DESCRIPTION="$DESCRIPTION" awk -v vdir="$vdir" -v tdir="$tdir" '
      # Replace every occurrence of a literal string (no regex or "&" surprises).
      function subst(s, from, to,   i, r) {
        r = ""
        while ((i = index(s, from)) > 0) { r = r substr(s, 1, i - 1) to; s = substr(s, i + length(from)) }
        return r s
      }
      match($0, /^[ \t]*\/\*@include [^*]+\*\/[ \t]*$/) {
        path = $0
        sub(/^[ \t]*\/\*@include /, "", path); sub(/\*\/[ \t]*$/, "", path)
        sub(/^VARIANT\//, vdir "/", path); sub(/^THEME\//, tdir "/", path)
        if ((getline line < path) <= 0) { print "missing include: " path > "/dev/stderr"; exit 1 }
        do print line; while ((getline line < path) > 0)
        close(path)
        next
      }
      { $0 = subst($0, "{{TITLE}}", ENVIRON["TITLE"]); print subst($0, "{{DESCRIPTION}}", ENVIRON["DESCRIPTION"]) }
    ' src/index.html > "$out/index.html"

    cp "$tdir/favicon.svg" "$out/favicon.svg"
    touch "$out/.nojekyll"
    echo "Built $out/ ($TITLE, $THEME theme)"
  )
done
