  // Creatures with no emoji are drawn inline. They size with the surrounding font like an emoji. Flat fills only:
  // a gradient's id would repeat in every copy on the page.
  const svg = body => `<svg class="drawn" viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
  const STARFISH = svg(`<path d="M32 5L39.5 23 59 24.5 44 37 49.5 57 32 46 14.5 57 20 37 5 24.5 24.5 23Z" fill="#ff8a5c" stroke="#d9573a" stroke-width="2.5" stroke-linejoin="round"/><g fill="#ffd2b8"><circle cx="32" cy="17" r="2"/><circle cx="45" cy="27" r="2"/><circle cx="19" cy="27" r="2"/><circle cx="25" cy="43" r="2"/><circle cx="39" cy="43" r="2"/><circle cx="32" cy="31" r="2.6"/></g>`);
  const SEAHORSE = svg(`<path d="M34 16C45 22 45 35 37 41 29 47 30 57 38 57 43 57 44 51 40 50" fill="none" stroke="#ffb347" stroke-width="9" stroke-linecap="round"/><path d="M42 25 51 21 51 35 42 32Z" fill="#ff8a3d"/><circle cx="32" cy="14" r="8.5" fill="#ffb347"/><path d="M26 11 11 15 12 21 27 19Z" fill="#ffb347"/><path d="M31 6 33 1 36 6 39 3 39 9Z" fill="#ff8a3d"/><circle cx="31" cy="12" r="2" fill="#2a2a2a"/><path d="M35 24h6M35 31h7M33 38h6" stroke="#ff8a3d" stroke-width="1.5" stroke-linecap="round"/>`);
  const MANTA = svg(`<path d="M32 46 33 62" stroke="#2c4a75" stroke-width="2" stroke-linecap="round"/><path d="M26 19 23 11M38 19 41 11" stroke="#2c4a75" stroke-width="3.5" stroke-linecap="round"/><path d="M32 18C40 18 50 22 62 31 52 34 42 36 36 44L32 47 28 44C22 36 12 34 2 31 14 22 24 18 32 18Z" fill="#4a6fa5" stroke="#2c4a75" stroke-width="1.5" stroke-linejoin="round"/><path d="M21 32Q32 39 43 32" fill="none" stroke="#a8c4ea" stroke-width="2" stroke-linecap="round"/><circle cx="27" cy="24" r="2" fill="#fff"/><circle cx="37" cy="24" r="2" fill="#fff"/>`);
  const ANGLER = svg(`<path d="M34 19Q31 6 20 8" fill="none" stroke="#5b4a6b" stroke-width="2"/><circle cx="19" cy="8" r="7" fill="#fff59d" opacity=".35"/><circle cx="19" cy="8" r="4" fill="#fff59d"/><path d="M57 36 64 26 64 46Z" fill="#5b4a6b"/><ellipse cx="36" cy="36" rx="22" ry="18" fill="#6c5a7d"/><path d="M14 35Q26 30 31 44 20 51 14 35Z" fill="#2a1f33"/><path d="M17 36l2 4 2-4 2 4 2-4 2 4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/><circle cx="29" cy="26" r="4.5" fill="#fff"/><circle cx="28" cy="26" r="2.2" fill="#2a1f33"/><path d="M42 24q4 4 0 8M48 26q4 4 0 8" fill="none" stroke="#8c7a9d" stroke-width="1.5"/>`);
  const NARWHAL = svg(`<path d="M19 27 2 17" stroke="#f3ead2" stroke-width="3.5" stroke-linecap="round"/><path d="M6 20l2-3M10 22l2-3M14 25l2-3" stroke="#c9bc96" stroke-width="1"/><path d="M18 31Q20 18 36 19 50 20 54 30L62 22 60 34 62 46 52 38Q46 46 32 45 18 44 18 31Z" fill="#8fb3d9" stroke="#4f7aa8" stroke-width="1.5" stroke-linejoin="round"/><path d="M22 37Q34 44 48 38" fill="none" stroke="#d6e6f5" stroke-width="3" stroke-linecap="round"/><circle cx="26" cy="28" r="2" fill="#1d2433"/><g fill="#6f97c2"><circle cx="38" cy="25" r="1.5"/><circle cx="44" cy="28" r="1.2"/><circle cx="34" cy="30" r="1.2"/></g>`);
  const KRAKEN = svg(`<g fill="none" stroke="#7b3fa0" stroke-width="6" stroke-linecap="round"><path d="M19 34C8 40 6 52 14 56 18 58 21 54 17 52"/><path d="M27 38C23 48 25 57 31 60"/><path d="M37 38C41 48 39 57 33 60"/><path d="M45 34C56 40 58 52 50 56 46 58 43 54 47 52"/></g><ellipse cx="32" cy="25" rx="18" ry="16" fill="#9b4fc4" stroke="#7b3fa0" stroke-width="2"/><path d="M23 11 25 3 29 8 32 1 35 8 39 3 41 11Z" fill="#ffc93c" stroke="#e3a400" stroke-width="1.5" stroke-linejoin="round"/><circle cx="25" cy="24" r="5" fill="#fff"/><circle cx="39" cy="24" r="5" fill="#fff"/><circle cx="26" cy="25" r="2.5" fill="#2a1f33"/><circle cx="40" cy="25" r="2.5" fill="#2a1f33"/><path d="M27 33Q32 37 37 33" fill="none" stroke="#2a1f33" stroke-width="2" stroke-linecap="round"/><g fill="#c78be6"><circle cx="20" cy="16" r="2"/><circle cx="45" cy="17" r="1.6"/></g>`);
  const CHEST = svg(`<path d="M8 28Q8 13 32 13 56 13 56 28Z" fill="#b5651d" stroke="#7a3f10" stroke-width="2" stroke-linejoin="round"/><rect x="8" y="28" width="48" height="26" rx="3" fill="#c97a2b" stroke="#7a3f10" stroke-width="2"/><path d="M18 16v38M46 16v38" stroke="#ffc93c" stroke-width="5"/><rect x="27" y="29" width="10" height="11" rx="2" fill="#ffc93c" stroke="#e3a400" stroke-width="1.5"/><circle cx="32" cy="33.5" r="1.6" fill="#7a3f10"/><g fill="#ffe27a"><circle cx="13" cy="25" r="1.6"/><circle cx="51" cy="23" r="1.3"/></g>`);
  // One drawn fish, facing left like 🐟, with settings, so most holiday fish are this template rather than new drawings:
  //   body, fin and line colors, and an optional belly color
  //   pattern: "stripes", "spots", "hearts", "splats", "flowers", "zigzag", "stars" or "clovers", in the `marks` colors (cycled)
  //   eyes: "normal", "x" or "odd" (mismatched); tail: "fork" or "point"
  //   add: any of "fangs", "horns", "cape", "stitches", "halo", "bolts", "facets", "patch", "eyering", and `mark` (a symbol on its side)
  //   hat: "witch", "santa", "party", "pilgrim", "leprechaun" or "bunny". Hats are template add-ons only: emoji differ from
  //   device to device, so nothing can be lined up on them.
  function fish(o) {
    const { body, fin, line, belly, marks = ["#fff"], pattern, eyes = "normal", tail = "fork", add = [], hat, mark } = o;
    const cx = 30, cy = 33, rx = 19, ry = 12.5, ink = "#1d2433", has = a => add.includes(a);
    const half = x => ry * Math.sqrt(Math.max(0, 1 - ((x - cx) / rx) ** 2));
    const at = (pts, f) => pts.map(([x, y], i) => f(x, y, marks[i % marks.length], i)).join("");
    const SPOTS = [[27, 25.5], [35, 28], [42, 32], [31, 36.5], [38, 40], [24, 39], [44, 38], [30, 30]];
    const patterns = {
      stripes: () => [25, 32, 39, 45].map((x, i) => { const h = Math.min(half(x - 1.5), half(x + 1.5)) - .3;
        return `<path d="M${x - 1.5} ${cy - h}h3v${2 * h}h-3Z" fill="${marks[i % marks.length]}"/>`; }).join(""),
      spots: () => at(SPOTS, (x, y, c, i) => `<circle cx="${x}" cy="${y}" r="${i % 3 ? 1.7 : 2.3}" fill="${c}"/>`),
      hearts: () => at(SPOTS.slice(0, 6), (x, y, c) => `<path transform="translate(${x} ${y}) scale(1.25)" d="M0 1.6C-3 -.8-1.4-3.2 0-1.5 1.4-3.2 3-.8 0 1.6Z" fill="${c}"/>`),
      splats: () => at(SPOTS.slice(0, 6), (x, y, c, i) => `<g fill="${c}"><circle cx="${x}" cy="${y}" r="2.4"/><circle cx="${x + 2.6}" cy="${y - 1.8}" r=".9"/>` +
        `<circle cx="${x - 2.4}" cy="${y + 1.9}" r=".8"/><circle cx="${x + (i % 2 ? -2.6 : 2.2)}" cy="${y + 2.2}" r=".6"/></g>`),
      flowers: () => at(SPOTS.slice(0, 6), (x, y, c) => `<g fill="${c}">${[0, 72, 144, 216, 288].map(a => `<circle cx="${(x + 1.5 * Math.cos(a * Math.PI / 180)).toFixed(2)}" cy="${(y + 1.5 * Math.sin(a * Math.PI / 180)).toFixed(2)}" r="1.1"/>`).join("")}</g><circle cx="${x}" cy="${y}" r=".8" fill="#ffd23f"/>`),
      zigzag: () => [27, 34, 40].map((y, i) => { const w = rx * Math.sqrt(1 - ((y - cy) / ry) ** 2) - 2, pts = [];
        for (let x = cx - w + 3, k = 0; x <= cx + w; x += 3, k++) pts.push(`${x.toFixed(1)} ${y + (k % 2 ? -1.5 : 1.5)}`);
        return `<polyline points="${pts.join(" ")}" fill="none" stroke="${marks[i % marks.length]}" stroke-width="1.6" stroke-linejoin="round"/>`; }).join(""),
      stars: () => at(SPOTS.slice(0, 6), (x, y, c) => `<path transform="translate(${x} ${y}) scale(.17)" d="M0-12 3.5-4 12-3.7 5.5 2 7.6 10.5 0 6 -7.6 10.5-5.5 2-12-3.7-3.5-4Z" fill="${c}"/>`),
      clovers: () => at(SPOTS.slice(0, 5), (x, y, c) => `<g fill="${c}"><circle cx="${x}" cy="${y - 1.3}" r="1.3"/><circle cx="${x - 1.3}" cy="${y + .4}" r="1.3"/>` +
        `<circle cx="${x + 1.3}" cy="${y + .4}" r="1.3"/></g><path d="M${x} ${y + .6}q.4 1.6 1.4 2.4" stroke="${c}" stroke-width=".7" fill="none"/>`),
    };
    const hats = {
      witch: `<path d="M9 22.5Q20 18 31 22Q20 25.5 9 22.5Z" fill="#2e1d40"/><path d="M14 21.5Q17 11 21 6Q23 2 28 3Q24 5 24 11L26 21Z" fill="#4a2d6b"/>` +
        `<path d="M14.4 19.2Q20 17.4 25.6 19.2L25.9 21Q20 19.4 14.1 21Z" fill="#ff9a3c"/>`,
      santa: `<path d="M13 21Q16 8 27 7Q33 8 33 15Q28 12 27 21Z" fill="#d6262f"/><rect x="11" y="18.6" width="18.5" height="4.6" rx="2.3" fill="#fff"/><circle cx="33" cy="15.5" r="2.6" fill="#fff"/>`,
      party: `<path d="M14 21.5 20 5 26 21.5Z" fill="#4d7cfe"/><path d="M15.4 17.5h9.2M16.9 13.3h6.2M18.4 9.2h3.2" stroke="#ffc93c" stroke-width="1.8"/><circle cx="20" cy="5" r="2.2" fill="#ff5d8f"/>`,
      pilgrim: `<path d="M9 22.6h22v-2.4H9Z" fill="#222"/><path d="M13 20.4 14.6 7.5h10.8L27 20.4Z" fill="#2b2b2b"/><rect x="13.5" y="16" width="13" height="2.6" fill="#8a6a3a"/><rect x="18" y="15.4" width="4" height="3.8" fill="none" stroke="#ffc93c" stroke-width="1"/>`,
      leprechaun: `<path d="M9 22.6h22v-2.4H9Z" fill="#1e7a35"/><path d="M13 20.4 14.6 7.5h10.8L27 20.4Z" fill="#2ea04a"/><rect x="13.5" y="16" width="13" height="2.6" fill="#1d2433"/><rect x="18" y="15.4" width="4" height="3.8" fill="none" stroke="#ffc93c" stroke-width="1.2"/><path d="M27 12q3-2 4 1-3 1-4-1Z" fill="#7fd18a"/>`,
      bunny: `<g stroke="#e0d6e6" stroke-width="1"><ellipse cx="15.5" cy="12" rx="3" ry="8.5" transform="rotate(-14 15.5 12)" fill="#fff"/><ellipse cx="23" cy="11" rx="3" ry="8.5" transform="rotate(10 23 11)" fill="#fff"/></g>` +
        `<ellipse cx="15.5" cy="12.5" rx="1.4" ry="6" transform="rotate(-14 15.5 12.5)" fill="#ffb3d4"/><ellipse cx="23" cy="11.5" rx="1.4" ry="6" transform="rotate(10 23 11.5)" fill="#ffb3d4"/>`,
    };
    const eye = {
      normal: `<circle cx="19" cy="30" r="3.6" fill="#fff"/><circle cx="18.2" cy="30" r="1.9" fill="${ink}"/>`,
      x: `<path d="M16.6 27.6l4.8 4.8m0-4.8-4.8 4.8" stroke="${ink}" stroke-width="1.8" stroke-linecap="round"/>`,
      odd: `<circle cx="18.5" cy="30.5" r="4.4" fill="#fff"/><circle cx="19.6" cy="29" r="1.1" fill="${ink}"/><circle cx="25.5" cy="27" r="2.1" fill="#fff"/><circle cx="25" cy="27.4" r="1.2" fill="${ink}"/>`,
    }[eyes];
    let s = "";
    s += tail === "point"
      ? `<path d="M46 31.2 55.5 32V29L62.5 33 55.5 37V34L46 34.8Z" fill="${fin}" stroke="${line}" stroke-width="1.2" stroke-linejoin="round"/>`
      : `<path d="M46 33 61 21Q57 33 61 45Z" fill="${fin}" stroke="${line}" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += has("cape")
      ? `<path d="M14 24 17 8 23 15.5 29.5 5.5 34.5 15.5 41.5 8.5 44 24Z" fill="#1d1424" stroke="#000" stroke-width="1" stroke-linejoin="round"/><path d="M19 23 21.4 13.6 26.4 18.4 29.6 11 33.4 18.4 38.8 14 39.6 23Z" fill="#c4122f"/>`
      : `<path d="M20 22.5Q29 9 41 23.5Z" fill="${fin}" stroke="${line}" stroke-width="1.4" stroke-linejoin="round"/>`;
    s += `<path d="M25 44.5Q30 51 36 44Z" fill="${fin}" stroke="${line}" stroke-width="1.2" stroke-linejoin="round"/>`;
    s += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${body}" stroke="${line}" stroke-width="1.6"/>`;
    if (belly) s += `<path d="M13 37.5Q30 50 47 36.5Q30 42.5 13 37.5Z" fill="${belly}"/>`;
    if (pattern) s += patterns[pattern]();
    if (has("facets")) s += `<path d="M11 33 21 21.5 31 33 21 44.5M21 21.5H39L31 33 39 44.5H21M39 21.5 49 33 39 44.5" fill="none" stroke="#fff" stroke-width="1" stroke-opacity=".7" stroke-linejoin="round"/>`;
    if (mark) s += `<text x="35" y="38" font-size="13" font-weight="700" font-family="Georgia, serif" text-anchor="middle" fill="${marks[0]}">${mark}</text>`;
    s += `<path d="M25 25.5Q22 33 25 40.5" fill="none" stroke="${line}" stroke-width="1.2" stroke-linecap="round" opacity=".6"/>`;
    s += has("cape")
      ? `<path d="M28 37.5 31.5 49 34 45.5 37 48.5 38.5 44.5 42.5 46 39 37Z" fill="#1d1424" stroke="#000" stroke-width="1" stroke-linejoin="round"/><path d="M30 38.5 33 45 35 42.5" fill="none" stroke="#c4122f" stroke-width="1"/>`
      : `<path d="M29 37.5Q33 44 38 37Z" fill="${fin}" stroke="${line}" stroke-width="1" stroke-linejoin="round"/>`;
    if (has("stitches")) s += `<path d="M31 22.5 36 43.5" stroke="${ink}" stroke-width="1.1"/>` +
      [0.15, 0.35, 0.55, 0.75].map(t => { const x = 31 + 5 * t, y = 22.5 + 21 * t; return `<path d="M${x - 2.2} ${y + .5}h4.4" stroke="${ink}" stroke-width="1.1" stroke-linecap="round"/>`; }).join("");
    if (has("bolts")) s += at([[25, 24.5], [40, 26], [36, 41], [17, 38.5]], (x, y) => `<circle cx="${x}" cy="${y}" r="1.8" fill="#c9ced6" stroke="#6b7480" stroke-width=".8"/><path d="M${x - 1} ${y}h2" stroke="#6b7480" stroke-width=".8"/>`);
    if (has("eyering")) s += [0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => `<circle cx="${(19 + 5.3 * Math.cos(a * Math.PI / 180)).toFixed(2)}" cy="${(30 + 5.3 * Math.sin(a * Math.PI / 180)).toFixed(2)}" r="1.5" fill="${marks[i % marks.length]}"/>`).join("");
    s += eye;
    if (has("patch")) s += `<path d="M13.5 23.5 27 36.5" stroke="${ink}" stroke-width="1.3"/><ellipse cx="19" cy="30" rx="4.3" ry="3.9" fill="${ink}"/>`;
    s += `<path d="M11.5 35q2.5 1.6 4.3 0" fill="none" stroke="${ink}" stroke-width="1.2" stroke-linecap="round"/>`;
    if (has("fangs")) s += `<path d="M11.8 35.4l1.3 4.2 1.3-3.7ZM14.6 35.8l1.2 4 1.1-3.9Z" fill="#fff" stroke="${ink}" stroke-width=".6" stroke-linejoin="round"/>`;
    if (has("horns")) s += `<path d="M15 23.5Q11 15 15.5 10.5Q15.5 17 19.5 22.2ZM23 21.8Q22 13 27.5 10Q25 16 26.6 21.6Z" fill="#7a0d16" stroke="#4a050b" stroke-width=".8" stroke-linejoin="round"/>`;
    if (has("halo")) s += `<ellipse cx="22" cy="13.5" rx="7.5" ry="2.4" fill="none" stroke="#ffc93c" stroke-width="2.2"/>`;
    if (hat) s += `<g transform="rotate(-12 20 22)">${hats[hat]}</g>`;
    return svg(s);
  }
  // Candy corn and the Día de los Muertos and Diwali art are shared with the princess theme (ART in src/index.html).
  const THEME = {
    home: "Your aquarium",
    currency: "Pearls",
    collection: "Sea friends",
    gift: { icon: "🐚", title: "A treasure shell!", fresh: "A new sea friend for your tank!", again: "Another one joins the tank!" },
    fastWords: ["Splash!", "Fin-tastic!", "Whale done!"],
    starter: "fish",
    // Each room is its own collection; filling one opens the next. The first room's creatures keep their original keys.
    // r is the rarity tier (0 common to 3 legendary); floor items walk along the bottom. Keys must be unique across rooms.
    // `colors` paints the room (water top, water bottom, floor); the first room uses the page palette.
    rooms: [
      { name: "Aquarium", decor: `<span class="weed" style="left:6%">🌿</span><span class="weed" style="left:78%;animation-delay:-2s">🌿</span>`,
        creatures: {
          fish: { e: "🐟", name: "Fish", r: 0 }, tropical: { e: "🐠", name: "Tropical fish", r: 0 },
          puffer: { e: "🐡", name: "Pufferfish", r: 0 }, shrimp: { e: "🦐", name: "Shrimp", r: 0 },
          crab: { e: "🦀", name: "Crab", r: 0, floor: 1 }, lobster: { e: "🦞", name: "Lobster", r: 0, floor: 1 },
          snail: { e: "🐌", name: "Sea snail", r: 0, floor: 1 },
          octopus: { e: "🐙", name: "Octopus", r: 1 }, squid: { e: "🦑", name: "Squid", r: 1 },
          turtle: { e: "🐢", name: "Sea turtle", r: 1 }, seal: { e: "🦭", name: "Seal", r: 1 }, penguin: { e: "🐧", name: "Penguin", r: 1 },
          dolphin: { e: "🐬", name: "Dolphin", r: 2 }, whale: { e: "🐳", name: "Whale", r: 2 }, shark: { e: "🦈", name: "Shark", r: 2 },
          otter: { e: "🦦", name: "Sea otter", r: 2 }, bluewhale: { e: "🐋", name: "Blue whale", r: 2 },
          mermaid: { e: "🧜‍♀️", name: "Mermaid", r: 3 },
        } },
      { name: "Coral reef", colors: ["#7fe0d8", "#1f9fb0", "#f4c9a0"],
        decor: `<span class="weed" style="left:4%">🪸</span><span class="weed" style="left:84%;animation-delay:-1s">🪸</span>`,
        creatures: {
          coral: { e: "🪸", name: "Coral", r: 0, floor: 1 }, oyster: { e: "🦪", name: "Oyster", r: 0, floor: 1 },
          starfish: { e: STARFISH, name: "Starfish", r: 0, floor: 1 }, spiral: { e: "🐚", name: "Spiral shell", r: 0, floor: 1 },
          seahorse: { e: SEAHORSE, name: "Seahorse", r: 1 }, jelly: { e: "🪼", name: "Jellyfish", r: 1 },
          manta: { e: MANTA, name: "Manta ray", r: 2 },
          merman: { e: "🧜‍♂️", name: "Merman", r: 3 },
        } },
      { name: "Deep sea", colors: ["#24477a", "#060d24", "#3a3550"],
        decor: `<span class="weed" style="left:10%;opacity:.6">🌿</span>`,
        creatures: {
          anchor: { e: "⚓", name: "Anchor", r: 0, floor: 1 }, coin: { e: "🪙", name: "Gold coin", r: 0, floor: 1 },
          mask: { e: "🤿", name: "Diving mask", r: 0 }, compass: { e: "🧭", name: "Compass", r: 0, floor: 1 },
          jar: { e: "🏺", name: "Old jar", r: 0, floor: 1 },
          trident: { e: "🔱", name: "Trident", r: 1 }, angler: { e: ANGLER, name: "Anglerfish", r: 1 },
          narwhal: { e: NARWHAL, name: "Narwhal", r: 2 },
          kraken: { e: KRAKEN, name: "Kraken king", r: 3 },
        } },
    ],
    // Holiday items only come while their holiday's window is open (HOLIDAYS in src/index.html), and live in the holiday room.
    // `look` turns on a holiday look (LOOKS in src/index.html); `decor` hangs in the holiday room while the window is open.
    // Keep their keys: saved collections go by them.
    holidays: {
      halloween: { look: LOOKS.halloween, items: {
        s_pumpkin: { e: "🎃", name: "Pumpkin", r: 0, floor: 1 },
        s_bat: { e: "🦇", name: "Bat", r: 0 },
        s_ghost: { e: "👻", name: "Friendly ghost", r: 1 },
        s_deadfish: { e: fish({ body: "#b9c2c9", fin: "#8e99a3", line: "#5b6670", belly: "#dfe5ea", eyes: "x" }), name: "Dead fish", r: 0, belly: 1 },
        s_web: { e: "🕸️", name: "Spiderweb", r: 0, floor: 1 }, s_lollipop: { e: "🍭", name: "Lollipop", r: 0, floor: 1 },
        s_candy: { e: "🍬", name: "Wrapped candy", r: 0, floor: 1 }, s_candycorn: { e: ART.candyCorn, name: "Candy corn", r: 0, floor: 1 },
        s_zombie: { e: fish({ body: "#9db58a", fin: "#7a9068", line: "#4f6040", belly: "#c4d4b4", eyes: "odd", add: ["stitches"] }), name: "Zombie fish", r: 1 },
        s_witchfish: { e: fish({ body: "#8fd16a", fin: "#5ea53c", line: "#3a6e22", belly: "#c9eeb0", hat: "witch" }), name: "Witch fish", r: 1 },
        s_vampire: { e: fish({ body: "#d9d4e6", fin: "#8a7aa0", line: "#4a3a60", add: ["cape", "fangs"] }), name: "Vampire fish", r: 2 },
        s_devil: { e: fish({ body: "#e0312f", fin: "#a5161a", line: "#6e0b0e", belly: "#ff7a5c", tail: "point", add: ["horns"] }), name: "Devil fish", r: 2 },
      } },
      muertos: { look: LOOKS.muertos, decor: ART.papelPicado, items: {
        s_marigolds: { e: ART.marigolds, name: "Marigolds", r: 0, floor: 1 }, s_candle: { e: "🕯️", name: "Candle", r: 0, floor: 1 },
        s_sugarskull: { e: ART.sugarSkull, name: "Sugar skull", r: 1, floor: 1 },
        s_calavera: { e: fish({ body: "#fbf8f2", fin: "#ff5fa2", line: "#9a8f8a", pattern: "flowers", marks: ["#ff5fa2", "#2ad1e0", "#ff9a3c", "#a66cff"], add: ["eyering"] }), name: "Calavera fish", r: 2 },
      } },
      diwali: { look: LOOKS.diwali, decor: `<div class="rangoli">${ART.rangoli}</div>`, items: {
        s_diya: { e: ART.diya, name: "Diya", r: 0, floor: 1 }, s_sparkler: { e: ART.sparkler, name: "Sparkler", r: 0, floor: 1 },
        s_glowfish: { e: `<span class="glow">${fish({ body: "#ffc93c", fin: "#ffa51f", line: "#b87800", belly: "#fff0a8", pattern: "stars", marks: ["#fff8d6"] })}</span>`, name: "Golden glow fish", r: 2 },
      } },
      winter: { items: {
        s_snowflake: { e: "❄️", name: "Snowflake", r: 0 },
        s_snowman: { e: "⛄", name: "Snowman", r: 1, floor: 1 },
      } },
      valentine: { items: {
        s_letter: { e: "💌", name: "Love letter", r: 0 },
        s_heart: { e: "💖", name: "Sparkly heart", r: 1 },
      } },
      spring: { items: {
        s_chick: { e: "🐣", name: "Spring chick", r: 0, floor: 1 },
      } },
    },
    // Decorations from the shop, placed on the floor of any room.
    shop: {
      d_castle: { e: "🏰", name: "Sand castle" }, d_chest: { e: CHEST, name: "Treasure chest" }, d_rock: { e: "🪨", name: "Rock" },
      d_head: { e: "🗿", name: "Stone head" }, d_ring: { e: "🛟", name: "Life ring" }, d_sprout: { e: "🌱", name: "Sea sprout" },
      d_boat: { e: "⛵", name: "Toy boat" },
    },
    run: { name: "Treasure dive", icon: "🤿", mover: "🤿", goal: CHEST, badge: "Deep diver",
      intro: "Each fast answer takes you deeper. Ten fast answers reach the treasure!", done: "You found the treasure!" },
    pictures: ["fish", "sun", "rainbow", "star", "heart", "castle", "fish"],
  };
