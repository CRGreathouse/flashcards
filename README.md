# Flash Facts

Flash-card practice for arithmetic facts. Answer quickly to earn stars and treasure, and fill a collection as you go.

The game is built in two versions from the same code:

- **grade3**: addition, subtraction, multiplication and division, with a sea theme (an aquarium, pearls and sea friends).
- **grade1**: addition first, then subtraction and early multiplication, with a princess theme (a castle, gems, dresses and tiaras).

Which facts each version has, and what unlocks what, is set in its `variants/<name>/config.js`. A family or stage that is still locked has no header button, and its cells on the practice map are grey. When it opens, a "New cards" moment plays and the family is switched on.

## Building

```sh
./build.sh          # builds ./grade1/ and ./grade3/
./build.sh grade1   # builds just one
```

Each output folder is a complete static site (`index.html`, `favicon.svg`, `.nojekyll`) ready to upload to GitHub Pages. The build only needs bash and awk.

The root `index.html` is a hand-written landing page that links to both builds as Grade 1 (grade1) and Grade 3 (grade3). With the whole repo served by GitHub Pages, it's the page at the site's root.

## How to Play

Open a built `grade1/index.html` or `grade3/index.html` directly in a browser, or visit the GitHub Pages site.

Use the operation buttons in the header to choose which facts to practice, then type each answer on the keypad (or a keyboard). The practice map at the bottom shows which facts are fast, slow or still missed.

Once the collection holds 12 items (the `flashAt` option), the player earns **flash mode**. A small lightning bolt appears in the header. While it's on, the ✓ key is hidden and each answer is checked as soon as it has as many digits as the right answer. That's faster, but a typo counts as a miss. Tap the bolt again to turn it off and bring back ✓.

### Collecting

- **Gifts** come when the currency meter fills. Each one is a random friend, rarer ones less often. After 7 gifts in a row without a super rare, the 8th is at least super rare. Every 7 days of goal streak brings a gift that is always legendary.
- **Shiny friends**: the third copy of a friend makes it shiny (recolored and glowing). Copies after that pay back 5 currency.
- **Rooms**: finding everything in a room opens the next one (sea: aquarium, coral reef, deep sea; princess: castle, garden, stables, dragon tower, royal wardrobe). Buttons above the tank switch rooms.
- **Holidays**: holiday items only come while their holiday's window is open (Halloween covers most of October, Día de los Muertos the week before it, then winter, Valentine's Day and spring). They live in the holiday room, which is always open and shows the current set, with silhouettes for what's still missing. While one is missing, at least a quarter of gifts bring one, rising as the window runs out so the set fills before it closes. A holiday with a look recolors the page and the holiday room and renames the currency (Halloween's candy pieces, Día de los Muertos's marigold petals), changes the gift and adds cheers. To try a date, add a hash to the link: `#halloween` jumps to that holiday's day, `#date=2026-12-20` to any day. It moves only the holiday calendar, not the daily goal or streak.
- **Feeding and names**: tap a friend in the tank to feed it or name it. A friend's first meal costs 1, the next 2, and so on. Each meal makes it a little bigger, up to ten meals.
- **The shop** opens at 6 items. It offers three things a day, decorations and missing friends, paid for out of the meter. Prices stay under a full meter.
- **Decorate**: put bought decorations anywhere on a room's floor.
- **Dress up** (princess): put owned gowns, headwear, wings or cape, held items and slippers on a paper doll.
- **Badges** for streaks, perfect days, full rooms, finishing a fact family and more. Each new one is worth 5 currency.
- **Pictures**: every family's practice map hides a picture. Each card that has been known at least once uncovers its square.
- **Earthquakes** (grade1, the `earthquakes` option): a wrong answer can set off an earthquake. The page shakes with a rumble, and every prize tumbles off the shelves into a jumble on the floor. Each fast answer puts one back, starting with the room on show. It's only for show: fallen prizes are still owned and still count. The chance starts at 10%, rises 1% with every answer up to 80%, and drops to 0% after an earthquake.

### Ways to play

- **Rainbow cards** (about 1 in 60 known cards): a fast answer opens a gift right away.
- **Flash mode** opens at 12 items (see above). **The run** (Treasure dive or Royal ball run) opens at 18. It ends after 10 fast answers, and the first one each day ends with a gift (later ones give 5 currency). **Beat the clock** opens at 24: as many right answers as possible in one minute, and a new best is worth 5 currency. Big moments that come up during a run or the clock wait until it's over.

For testing, hold the 🔊 button for 2 seconds. An **∫** button appears and the card switches to simple polynomial definite integrals (answers 2–99, no time limit). A right answer earns 1 of the currency. Once you've answered more integrals right than wrong in the current page session, each right answer earns 50 instead, which is always enough to open the next gift and get halfway to the one after. That tally lives only in memory and resets on reload, so guessing doesn't pay. Integrals never touch card history or today's stats. Tap ∫ or any other operation button to go back to normal cards.

Progress is saved in the browser's `localStorage`, so it stays on the device it was played on.

## Architecture

```
src/index.html          the shared game: markup, styles and script
themes/<theme>/         theme.css (palette and decoration), theme.js (names, words, collectible items), favicon.svg
variants/<name>/        variant.sh (TITLE, DESCRIPTION, THEME), config.js (the facts, save slot and options)
build.sh                puts them together into ./<name>/index.html
```

`src/index.html` has `/*@include VARIANT/config.js*/`, `/*@include THEME/theme.js*/` and `/*@include THEME/theme.css*/` lines, which the build replaces with the files. It also replaces `{{TITLE}}` and `{{DESCRIPTION}}`. Each built page is a single file with no build-time dependencies. Its only external request is for Google Fonts, and it falls back to system fonts without it.

To add a version, copy a folder in `variants/` and edit it. To add a theme, copy a folder in `themes/`. A theme sets `rooms` (each with its own `creatures`, `decor` and `colors`), `holidays` (each id from the calendar in `src/index.html` with its `items`, and optionally a `look` and a `decor` for the holiday room), `shop` decorations, `run` (the run's name and pictures), `pictures` (which hidden picture goes with each fact family) and, optionally, `dressUp` and `display`. With `display: "shelves"` (the princess theme) a room is a display room instead of an aquarium: items sit on shelves, or with `floor`, `walk` or `fly` they stand on the floor, stroll about on it or hover in the air. Each item has a fixed spot, so the gaps show what's still missing. An item can be any HTML, not just an emoji. The princess tiara, dress-up clothes, carriage, throne and pegasus, and the sea's holiday fish (one `fish()` template with colors, patterns, eyes and add-ons), starfish, seahorse, manta ray, anglerfish, narwhal, kraken and treasure chest, are inline SVGs. Creature keys must be unique across rooms, and the first room keeps the original keys so saved collections carry over.

### Options

A variant's `config.js` sets `OPTIONS`, which overrides any of the settings in `DEFAULT_OPTIONS` in `src/index.html`: `earthquakes` (off by default), `dailyGoal`, `learningSize` (how many cards are learned at once), and `flashAt`, `shopAt`, `runAt` and `clockAt` (the collection sizes that open flash mode, the shop, the run and beat the clock). An unknown key logs a warning in the console.

### Saved progress across versions

Each variant's `config.js` sets `STORE`, the `localStorage` key its progress lives under. Pages on the same GitHub Pages site share `localStorage`, so every variant needs its own key. grade3 keeps the original key, `flash-facts-v1`, so progress saved by the old single-page version carries over when it is hosted on the same site.

## Changing the Facts

Every fact family is one entry in the `FACTS` table in `variants/<name>/config.js`:

```js
mul: { name: "Multiplication", sym: "×", limit: 5000, rows: range(1, 10), cols: range(1, 10), how: "row × column",
  include: (a, b) => MUL_SET.includes(a) || MUL_SET.includes(b),
  make: (a, b) => ({ text: `${a} × ${b}`, ans: a * b }), score: mulScore },
```

- `rows`, `cols` and the optional `include(a, b)` decide which cards exist. Each kept pair becomes one card and one cell on the practice map.
- `make(a, b)` gives the question text and the answer.
- `limit` is how many milliseconds count as a fast answer.
- `score(a, b)` sets the teaching order. Lower scores are introduced first.
- `on: false` makes a new family start switched off.
- `known: (a, b) => …` picks cards that start out known (in play, as if answered fast twice). It only touches cards with no saved history, so it sets where a new player starts without changing anyone's progress.
- `proficient: (a, b) => …` picks cards that are already well practiced: four fast answers in a row and the lowest weight, so they rarely come up. It applies once per save, to new and existing players alike, and raises a card's practice to that level without lowering it. It skips cards marked tricky. After that, a slow or wrong answer brings a card back as usual.
- `after: ["add"]` hides the family until every `add` card has been known at least once (two fast answers in a row). `"add.0"` names just the first stage of `add`.
- `stages: [{ include, after }, …]` splits a family into stages. A card belongs to the first stage whose `include` it passes (a stage with no `include` takes everything left). Later stages open by their own `after`. Cards come in stage order.
- `make` can return `parts: ["3 +", "= 7"]` to put the answer box in the middle, as in missing-number cards.

The header buttons, practice maps and keypad digit limit all come from this table. Then run `./build.sh` again.

### Keeping saved progress

Progress is saved per card under the id `family:a:b`, for example `mul:3:4`. That id depends only on the family key and the pair, not on which other cards are in the set. So:

- **Unlocks go by cards known at least once**, saved per card as `got`. A slow answer later doesn't lock anything again. A stage that already has cards in play counts as open, so older saves keep everything they had.
- **Growing or shrinking a set is safe.** Cards that stay keep their history. Cards that are removed are hidden, not erased, and get their history back if you add them again.
- **A new family starts fresh** and is switched on by default.
- **Never change what `make` produces for an existing key.** Old progress would then be attached to a different question. To redefine a family, give it a new key.
