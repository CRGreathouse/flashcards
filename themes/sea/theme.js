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
    // Visitors only come in their months (1 = January). They live in the first room.
    seasonal: {
      s_pumpkin: { e: "🎃", name: "Pumpkin", r: 0, floor: 1, months: [10] }, s_bat: { e: "🦇", name: "Bat", r: 0, months: [10] },
      s_ghost: { e: "👻", name: "Friendly ghost", r: 1, months: [10] },
      s_snowflake: { e: "❄️", name: "Snowflake", r: 0, months: [12, 1] }, s_snowman: { e: "⛄", name: "Snowman", r: 1, floor: 1, months: [12, 1] },
      s_letter: { e: "💌", name: "Love letter", r: 0, months: [2] }, s_heart: { e: "💖", name: "Sparkly heart", r: 1, months: [2] },
      s_chick: { e: "🐣", name: "Spring chick", r: 0, floor: 1, months: [4] },
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
