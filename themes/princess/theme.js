  // No tiara emoji exists, so the tiara is drawn inline. It sizes with the surrounding font like an emoji.
  const TIARA = `<svg class="tiara" viewBox="0 0 64 48" aria-hidden="true"><path d="M4 42 Q32 30 60 42 L60 46 Q32 34 4 46Z" fill="#e3a400"/><path d="M6 41 L12 22 L20 34 L32 6 L44 34 L52 22 L58 41 Q32 29 6 41Z" fill="#ffc93c" stroke="#e3a400" stroke-width="2" stroke-linejoin="round"/><circle cx="32" cy="22" r="5" fill="#ff5d8f"/><circle cx="16" cy="32" r="3" fill="#8fd3f0"/><circle cx="48" cy="32" r="3" fill="#8fd3f0"/><circle cx="32" cy="6" r="3" fill="#fff"/><circle cx="12" cy="22" r="2.5" fill="#fff"/><circle cx="52" cy="22" r="2.5" fill="#fff"/></svg>`;
  // Dress-up clothes have no emoji either, so they are drawn the same way. Flat fills only: a gradient's id
  // would repeat in every copy on the page.
  const BALL_GOWN = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><path d="M24 30 C18 40 8 48 3 58 Q8 62 13 59 Q18 63 23 60 Q28 64 32 61 Q36 64 41 60 Q46 63 51 59 Q56 62 61 58 C56 48 46 40 40 30Z" fill="#ff7eb6" stroke="#c93d80" stroke-width="1.5" stroke-linejoin="round"/><path d="M29 31 C27 41 23 51 19 60 Q25 63 32 61 Q39 63 45 60 C41 51 37 41 35 31Z" fill="#ffd0e5"/><path d="M20 59 Q23 56 26 60 Q29 57 32 60 Q35 57 38 60 Q41 56 44 59" fill="none" stroke="#ffc93c" stroke-width="2" stroke-linecap="round"/><path d="M25 34 C20 44 14 50 10 56 M39 34 C44 44 50 50 54 56" fill="none" stroke="#c93d80" stroke-width="1.2" stroke-linecap="round" opacity=".6"/><ellipse cx="21.5" cy="23" rx="5" ry="3.6" fill="#ffb3d4" stroke="#c93d80" stroke-width="1.2"/><ellipse cx="42.5" cy="23" rx="5" ry="3.6" fill="#ffb3d4" stroke="#c93d80" stroke-width="1.2"/><path d="M24 18 Q28 15 32 19 Q36 15 40 18 L40 31 L24 31Z" fill="#e8458f" stroke="#b02a6c" stroke-width="1.2" stroke-linejoin="round"/><rect x="22.5" y="28" width="19" height="4" rx="2" fill="#ffc93c" stroke="#e3a400" stroke-width="1"/><circle cx="32" cy="30" r="2.6" fill="#8fd3f0" stroke="#fff" stroke-width="1"/><g fill="#fff"><circle cx="25" cy="46" r="1.3"/><circle cx="39" cy="44" r="1.3"/><circle cx="32" cy="52" r="1.3"/><circle cx="13" cy="55" r="1"/><circle cx="51" cy="55" r="1"/><circle cx="29" cy="38" r="1"/><circle cx="36" cy="37" r="1"/></g></svg>`;
  const TUTU = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><path d="M27 8 L28 16 M37 8 L36 16" stroke="#7a5ae0" stroke-width="2" stroke-linecap="round"/><path d="M22 34 L8 46 Q12 50 16 47 Q19 52 24 48 Q28 53 32 49 Q36 53 40 48 Q45 52 48 47 Q52 50 56 46 L42 34Z" fill="#e3d8ff" stroke="#9b7bff" stroke-width="1.3" stroke-linejoin="round"/><path d="M23 32 L11 42 Q15 46 19 43 Q22 47 26 44 Q29 48 32 45 Q35 48 38 44 Q42 47 45 43 Q49 46 53 42 L41 32Z" fill="#b9a2ff" stroke="#7a5ae0" stroke-width="1.3" stroke-linejoin="round"/><path d="M26 14 Q32 19 38 14 L41 33 L23 33Z" fill="#9b7bff" stroke="#6a48d4" stroke-width="1.2" stroke-linejoin="round"/><path d="M32 30 L25 26 L25 35Z M32 30 L39 26 L39 35Z" fill="#ff5d8f" stroke="#d6336c" stroke-width="1" stroke-linejoin="round"/><circle cx="32" cy="30" r="2.2" fill="#ff8fb1" stroke="#d6336c" stroke-width="1"/><g fill="#fff"><circle cx="18" cy="44" r="1.1"/><circle cx="27" cy="41" r="1.1"/><circle cx="37" cy="41" r="1.1"/><circle cx="46" cy="44" r="1.1"/><circle cx="32" cy="22" r="1.1"/><circle cx="29" cy="18" r=".8"/><circle cx="35" cy="18" r=".8"/></g></svg>`;
  const STARLIGHT_GOWN = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><path d="M25 28 C21 38 14 46 10 52 Q32 57 54 52 C50 46 43 38 39 28Z" fill="#9ad8ff" stroke="#3a8fd0" stroke-width="1.3" stroke-linejoin="round"/><path d="M12 50 C9 55 6 58 3 61 Q32 66 61 61 C58 58 55 55 52 50 Q32 56 12 50Z" fill="#6fc3ff" stroke="#3a8fd0" stroke-width="1.3" stroke-linejoin="round"/><path d="M19 42 Q32 47 45 42" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-linecap="round"/><path d="M8 56 Q32 62 56 56" fill="none" stroke="#e6f6ff" stroke-width="2" stroke-linecap="round"/><path d="M23 18 Q27 15 32 19 Q37 15 41 18 L40 30 L24 30Z" fill="#cdeeff" stroke="#3a8fd0" stroke-width="1.2" stroke-linejoin="round"/><ellipse cx="21.5" cy="21" rx="4.5" ry="3.4" fill="#e6f6ff" fill-opacity=".9" stroke="#3a8fd0" stroke-width="1"/><ellipse cx="42.5" cy="21" rx="4.5" ry="3.4" fill="#e6f6ff" fill-opacity=".9" stroke="#3a8fd0" stroke-width="1"/><rect x="23" y="27.5" width="18" height="3.5" rx="1.75" fill="#e9eef5" stroke="#9fb3c8" stroke-width="1"/><g fill="#fff" stroke="#ffd84d" stroke-width=".6" stroke-linejoin="round"><path d="M32 33 l1.4 3 3.2.4-2.4 2.2.7 3.2-2.9-1.6-2.9 1.6.7-3.2-2.4-2.2 3.2-.4Z"/><path d="M20 50 l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3Z"/><path d="M44 50 l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3Z"/></g><g fill="#fff"><circle cx="26" cy="38" r="1"/><circle cx="38" cy="39" r="1"/><circle cx="32" cy="48" r="1.2"/><circle cx="12" cy="59" r="1"/><circle cx="52" cy="59" r="1"/><circle cx="32" cy="23" r="1.6" fill="#ffd84d"/><circle cx="18" cy="45" r="1"/><circle cx="46" cy="45" r="1"/><circle cx="24" cy="58" r="1"/><circle cx="40" cy="58" r="1"/></g></svg>`;
  const CAPE = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 12 C22 13 17 24 12 58 Q22 62 32 59 Q42 62 52 58 C47 24 42 13 32 12Z" fill="#d12a4a" stroke="#8e1530" stroke-width="1.4" stroke-linejoin="round"/><path d="M32 16 C28 26 27 44 26 59 Q32 61 38 59 C37 44 36 26 32 16Z" fill="#ffc93c" stroke="#e3a400" stroke-width="1"/><path d="M13 56 Q22 61 32 58 Q42 61 51 56" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><ellipse cx="32" cy="15" rx="13" ry="5.5" fill="#fff" stroke="#c9c2cc" stroke-width="1"/><g fill="#3a2a35"><circle cx="23" cy="15" r="1"/><circle cx="32" cy="18" r="1"/><circle cx="41" cy="15" r="1"/><circle cx="19" cy="58" r="1"/><circle cx="32" cy="59.5" r="1"/><circle cx="45" cy="58" r="1"/></g><circle cx="32" cy="20" r="3" fill="#8fd3f0" stroke="#e3a400" stroke-width="1.5"/></svg>`;
  const HENNIN = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><path d="M30 5 C38 14 48 22 60 26 C56 34 52 44 54 58 C46 46 42 36 40 30" fill="#e6d4ff" fill-opacity=".85" stroke="#a98be8" stroke-width="1.2" stroke-linejoin="round"/><path d="M30 4 L16 52 Q30 58 44 52Z" fill="#ff7eb6" stroke="#c93d80" stroke-width="1.5" stroke-linejoin="round"/><path d="M26 18 L35 21 M23 29 L38 34 M20 40 L41 46" stroke="#ffc93c" stroke-width="1.6" stroke-linecap="round"/><path d="M15 50 Q30 58 45 50 L46 55 Q30 63 14 55Z" fill="#ffc93c" stroke="#e3a400" stroke-width="1.2" stroke-linejoin="round"/><circle cx="30" cy="57" r="2.4" fill="#8fd3f0" stroke="#fff" stroke-width="1"/><circle cx="21" cy="54.5" r="1.4" fill="#fff"/><circle cx="39" cy="54.5" r="1.4" fill="#fff"/><circle cx="30" cy="4" r="2.6" fill="#fff" stroke="#c93d80" stroke-width="1"/></svg>`;
  const WINGS = `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true"><g stroke-linejoin="round" stroke-width="1.4"><path d="M31 30 C24 12 10 4 5 12 C1 20 12 30 31 32Z" fill="#b8ecff" fill-opacity=".85" stroke="#4fb3dc"/><path d="M33 30 C40 12 54 4 59 12 C63 20 52 30 33 32Z" fill="#b8ecff" fill-opacity=".85" stroke="#4fb3dc"/><path d="M31 33 C20 34 10 42 13 52 C16 59 28 50 31 36Z" fill="#ffc6e5" fill-opacity=".9" stroke="#e070ad"/><path d="M33 33 C44 34 54 42 51 52 C48 59 36 50 33 36Z" fill="#ffc6e5" fill-opacity=".9" stroke="#e070ad"/></g><path d="M29 29 C22 20 14 14 9 13 M35 29 C42 20 50 14 55 13 M30 35 C24 40 19 45 17 50 M34 35 C40 40 45 45 47 50" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" opacity=".9"/><ellipse cx="32" cy="32" rx="2.4" ry="5" fill="#b98bff" stroke="#7a5ae0" stroke-width="1"/><g fill="#fff"><circle cx="14" cy="20" r="1.3"/><circle cx="50" cy="20" r="1.3"/><circle cx="20" cy="46" r="1.1"/><circle cx="44" cy="46" r="1.1"/></g></svg>`;
  const drawn = body => `<svg class="outfit" viewBox="0 0 64 64" aria-hidden="true">${body}</svg>`;
  const recolor = (s, map) => Object.entries(map).reduce((t, [from, to]) => t.split(from).join(to), s);
  // Seasonal gowns are the ball gown in other colors.
  const SNOW_GOWN = recolor(BALL_GOWN, { "#ff7eb6": "#cfeeff", "#c93d80": "#5aa9d6", "#ffd0e5": "#f4fbff", "#ffb3d4": "#e2f4ff", "#e8458f": "#8fd0f5", "#b02a6c": "#3a8fc0" });
  const PUMPKIN_GOWN = recolor(BALL_GOWN, { "#ff7eb6": "#ff9a3c", "#c93d80": "#b8560a", "#ffd0e5": "#6b3fa0", "#ffb3d4": "#ffc27a", "#e8458f": "#7a4ab5", "#b02a6c": "#4a2a75" });
  const VALENTINE_GOWN = recolor(BALL_GOWN, { "#ff7eb6": "#ff4f6d", "#c93d80": "#b3123a", "#ffd0e5": "#ffd6de", "#ffb3d4": "#ff9aac", "#e8458f": "#d61f45", "#b02a6c": "#8a0d2c" });
  const BLOSSOM_GOWN = recolor(BALL_GOWN, { "#ff7eb6": "#b8e986", "#c93d80": "#5c9e2e", "#ffd0e5": "#fff7c2", "#ffb3d4": "#ffd6ec", "#e8458f": "#ff9ac8", "#b02a6c": "#c2408a" });
  // The wardrobe: a few new shapes, and the castle's gowns in other colors.
  const GOLDEN_GOWN = recolor(BALL_GOWN, { "#ffc93c": "#ffffff", "#e3a400": "#c99400", "#ff7eb6": "#ffd23f", "#c93d80": "#c99400", "#ffd0e5": "#fff2b3", "#ffb3d4": "#ffe27a", "#e8458f": "#f5b800", "#b02a6c": "#a87a00" });
  const LILAC_GOWN = recolor(BALL_GOWN, { "#ff7eb6": "#c9a8ff", "#c93d80": "#7a5ae0", "#ffd0e5": "#efe6ff", "#ffb3d4": "#dccbff", "#e8458f": "#a07cf0", "#b02a6c": "#5a3ab8" });
  const PINK_TUTU = recolor(TUTU, { "#e3d8ff": "#ffe0ee", "#9b7bff": "#ff7eb6", "#b9a2ff": "#ffb3d4", "#7a5ae0": "#c93d80", "#6a48d4": "#b02a6c", "#ff5d8f": "#8fd3f0", "#d6336c": "#3a8fd0", "#ff8fb1": "#cdeeff" });
  const TWILIGHT_GOWN = recolor(STARLIGHT_GOWN, { "#9ad8ff": "#c9b3ff", "#3a8fd0": "#5a3ab8", "#6fc3ff": "#9b7bff", "#e6f6ff": "#f3edff", "#cdeeff": "#e3d8ff" });
  const PARTY_DRESS = drawn(`<path d="M24 31 L11 51 Q32 58 53 51 L40 31Z" fill="#e84a5f" stroke="#a8263a" stroke-width="1.4" stroke-linejoin="round"/><path d="M12 51 Q32 58 52 51" fill="none" stroke="#fff" stroke-width="2.4" stroke-dasharray=".1 3.2" stroke-linecap="round"/><ellipse cx="21.5" cy="22" rx="4.6" ry="3.4" fill="#ff8a9a" stroke="#a8263a" stroke-width="1.1"/><ellipse cx="42.5" cy="22" rx="4.6" ry="3.4" fill="#ff8a9a" stroke="#a8263a" stroke-width="1.1"/><path d="M24 17 Q28 14 32 18 Q36 14 40 17 L40 31 L24 31Z" fill="#e84a5f" stroke="#a8263a" stroke-width="1.2" stroke-linejoin="round"/><g fill="#fff"><circle cx="28" cy="22" r="1.2"/><circle cx="36" cy="24" r="1.2"/><circle cx="23" cy="40" r="1.6"/><circle cx="31" cy="37" r="1.6"/><circle cx="40" cy="41" r="1.6"/><circle cx="18" cy="48" r="1.6"/><circle cx="27" cy="46" r="1.6"/><circle cx="36" cy="49" r="1.6"/><circle cx="46" cy="47" r="1.6"/></g><rect x="23" y="28.5" width="18" height="3.5" rx="1.75" fill="#fff" stroke="#e0c8cc" stroke-width=".8"/><path d="M32 30 L26 26.5 L26 33.5Z M32 30 L38 26.5 L38 33.5Z" fill="#fff" stroke="#a8263a" stroke-width=".9" stroke-linejoin="round"/><circle cx="32" cy="30" r="1.8" fill="#ffd84d" stroke="#a8263a" stroke-width=".8"/>`);
  const DAISY_DRESS = recolor(PARTY_DRESS, { "#e84a5f": "#7fd18a", "#a8263a": "#3f8f4a", "#ff8a9a": "#c4efc8", "#ffd84d": "#ff9ac8", "#fff": "#ffe066", "#e0c8cc": "#e3c440" });
  const PETAL_DRESS = drawn(`<g stroke-width="1.2" stroke-linejoin="round"><path d="M30 30 C22 36 12 44 8 54 C18 54 26 46 30 30Z" fill="#ffd0e5" stroke="#d0508f"/><path d="M34 30 C42 36 52 44 56 54 C46 54 38 46 34 30Z" fill="#ffd0e5" stroke="#d0508f"/><path d="M30 30 C24 40 18 50 19 61 C27 56 31 46 31 30Z" fill="#ff9ccb" stroke="#d0508f"/><path d="M34 30 C40 40 46 50 45 61 C37 56 33 46 33 30Z" fill="#ff9ccb" stroke="#d0508f"/><path d="M32 30 C27 42 28 53 32 63 C36 53 37 42 32 30Z" fill="#ffd0e5" stroke="#d0508f"/></g><path d="M27 9 L27 17 M37 9 L37 17" stroke="#3f8f4a" stroke-width="1.8" stroke-linecap="round"/><path d="M25 16 Q32 21 39 16 L40 31 L24 31Z" fill="#7fcf7a" stroke="#3f8f4a" stroke-width="1.2" stroke-linejoin="round"/><path d="M28 21 Q32 25 36 21 M27 26 Q32 30 37 26" fill="none" stroke="#3f8f4a" stroke-width=".9" opacity=".6"/><circle cx="32" cy="31" r="2.4" fill="#ffe066" stroke="#e3a400" stroke-width=".8"/><g fill="#fff"><circle cx="16" cy="48" r="1"/><circle cx="48" cy="48" r="1"/><circle cx="24" cy="54" r="1.1"/><circle cx="40" cy="54" r="1.1"/><circle cx="32" cy="44" r="1.1"/></g>`);
  const MERMAID_GOWN = drawn(`<path d="M27 46 C20 52 12 56 5 62 Q19 59 32 63 Q45 59 59 62 C52 56 44 52 37 46Z" fill="#7fe0d4" stroke="#1d7f78" stroke-width="1.3" stroke-linejoin="round"/><path d="M32 50 L32 61 M29 50 L20 60 M35 50 L44 60 M27 49 L11 59 M37 49 L53 59" stroke="#1d7f78" stroke-width="1" stroke-linecap="round" opacity=".5"/><path d="M24 17 Q28 14 32 18 Q36 14 40 17 L40 30 C41 38 39 43 37 48 L27 48 C25 43 23 38 24 30Z" fill="#3cc0b4" stroke="#1d7f78" stroke-width="1.3" stroke-linejoin="round"/><path d="M26 25 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0 M26 34 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0 M27 39 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 1.5 0 M28 44 q1.5 2 3 0 q1.5 2 3 0 q1.5 2 3 0" fill="none" stroke="#a6f0e6" stroke-width="1"/><path d="M24 17 Q28 14 32 18 Q36 14 40 17 L40 21 Q36 18 32 22 Q28 18 24 21Z" fill="#b48ef0" stroke="#6a48d4" stroke-width="1" stroke-linejoin="round"/><g fill="#fff" stroke="#c9b3ff" stroke-width=".5"><circle cx="25" cy="30" r="1.4"/><circle cx="28.5" cy="30.6" r="1.4"/><circle cx="32" cy="31" r="1.6"/><circle cx="35.5" cy="30.6" r="1.4"/><circle cx="39" cy="30" r="1.4"/></g><g fill="#fff"><circle cx="18" cy="58" r="1"/><circle cx="46" cy="58" r="1"/><circle cx="32" cy="56" r="1.1"/></g>`);
  const RAINBOW_GOWN = drawn(`<path d="M24 30 L5 58 Q32 66 59 58 L40 30Z" fill="#b48ef0"/><path d="M24 30 L8.4 53 Q32 59 55.6 53 L40 30Z" fill="#6fb6ff"/><path d="M24 30 L12 48 Q32 53 52 48 L40 30Z" fill="#7fd88a"/><path d="M24 30 L16 42 Q32 47 48 42 L40 30Z" fill="#ffe066"/><path d="M24 30 L20 36 Q32 41 44 36 L40 30Z" fill="#ffab5c"/><path d="M24 30 L5 58 Q32 66 59 58 L40 30Z" fill="none" stroke="#7a5ae0" stroke-width="1.3" stroke-linejoin="round"/><g fill="#fff" stroke="#d8e6f5" stroke-width=".8"><circle cx="8" cy="58" r="3"/><circle cx="15" cy="60.5" r="3.4"/><circle cx="23" cy="62" r="3.4"/><circle cx="32" cy="62.5" r="3.6"/><circle cx="41" cy="62" r="3.4"/><circle cx="49" cy="60.5" r="3.4"/><circle cx="56" cy="58" r="3"/></g><ellipse cx="21.5" cy="22" rx="4.8" ry="3.5" fill="#fff" stroke="#7a5ae0" stroke-width="1.1"/><ellipse cx="42.5" cy="22" rx="4.8" ry="3.5" fill="#fff" stroke="#7a5ae0" stroke-width="1.1"/><path d="M24 17 Q28 14 32 18 Q36 14 40 17 L40 31 L24 31Z" fill="#ff6b6b" stroke="#c93d3d" stroke-width="1.2" stroke-linejoin="round"/><rect x="22.5" y="28" width="19" height="4" rx="2" fill="#fff" stroke="#7a5ae0" stroke-width="1"/><g fill="#fff" stroke="#ffd84d" stroke-width=".6" stroke-linejoin="round"><path d="M32 21 l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4Z"/><path d="M22 47 l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3Z"/><path d="M42 47 l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3Z"/></g>`);
  // Holiday clothes. Shared holiday art (the candy bucket, sugar skull, marigolds, diya, rangoli, sparkler, langar plate) is ART in src/index.html.
  const WITCH_DRESS = recolor(PARTY_DRESS, { "#e84a5f": "#4a2d6b", "#a8263a": "#24123a", "#ff8a9a": "#7a4ab5", "#fff": "#ff9a3c", "#ffd84d": "#7fe05a", "#e0c8cc": "#c45a00" });
  const WITCH_HAT = drawn(`<ellipse cx="32" cy="49" rx="28" ry="7" fill="#2e1d40" stroke="#1a0f26" stroke-width="1.2"/><path d="M16 48Q24 31 27 17Q30 5 41 3Q35 10 36 20L46 48Z" fill="#4a2d6b" stroke="#24123a" stroke-width="1.3" stroke-linejoin="round"/>` +
    `<path d="M18.2 42Q32 38.5 44 42L45.6 46.6Q32 42.5 16.6 46.6Z" fill="#ff9a3c"/><rect x="28" y="40.2" width="6.5" height="5.6" rx="1" fill="none" stroke="#ffd23f" stroke-width="1.4"/>` +
    `<path d="M33 26l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3Z" fill="#ffd23f"/>`);
  const BAT_CAPE = drawn(`<path d="M32 12C22 13 14 26 5 50Q11 45 16 52 20 45 25 54 29 47 32 56 35 47 39 54 44 45 48 52 53 45 59 50C50 26 42 13 32 12Z" fill="#2e1d40" stroke="#14091f" stroke-width="1.3" stroke-linejoin="round"/>` +
    `<path d="M32 17C27 26 25 40 24 51Q28 47 32 53 36 47 40 51C39 40 37 26 32 17Z" fill="#7a3fa0"/><path d="M8 47Q20 31 26 18M56 47Q44 31 38 18" fill="none" stroke="#5a3a78" stroke-width="1.1"/>` +
    `<path d="M32 14 20 16 13 5 25 10ZM32 14 44 16 51 5 39 10Z" fill="#c4122f" stroke="#7a0a1c" stroke-width="1" stroke-linejoin="round"/><circle cx="32" cy="16" r="3" fill="#ff9a3c" stroke="#c45a00" stroke-width="1"/>`);
  const MARIGOLD_CROWN = drawn(`<path d="M6 40Q32 24 58 40" fill="none" stroke="#3f8f3a" stroke-width="3" stroke-linecap="round"/><path d="M13 34q-1-7 5-9 0 7-5 9ZM51 34q1-7-5-9 0 7 5 9ZM25 28q1-6 6-7-1 6-6 7Z" fill="#5cb85c"/>` +
    marigold(9, 40, .62) + marigold(19, 33, .7) + marigold(32, 30, .8) + marigold(45, 33, .7) + marigold(55, 40, .62));
  const PAPEL_DRESS = recolor(RAINBOW_GOWN, { "#b48ef0": "#e83f8f", "#6fb6ff": "#ff9a1a", "#7fd88a": "#2ad1e0", "#ffe066": "#a66cff", "#ffab5c": "#7fd18a", "#ff6b6b": "#e83f8f", "#c93d3d": "#a0205e", "#7a5ae0": "#a0205e" });
  // Diwali: a lehenga (a long flared skirt with a short top and a draped dupatta) and a stack of bangles.
  const LEHENGA = drawn(`<path d="M24 30C18 41 9 51 4 60Q32 66 60 60C55 51 46 41 40 30Z" fill="#c2185b" stroke="#7a0d3a" stroke-width="1.4" stroke-linejoin="round"/>` +
    `<path d="M28 32 17 61M32 32V63M36 32 47 61" stroke="#7a0d3a" stroke-width="1" opacity=".45"/><path d="M5.5 57.6Q32 63.6 58.5 57.6" fill="none" stroke="#ffc93c" stroke-width="3.4"/>` +
    `<path d="M9 53.5Q32 59 55 53.5" fill="none" stroke="#ffc93c" stroke-width="1.2" stroke-dasharray="1.5 2.5"/>` +
    `<g fill="#ffd23f"><circle cx="24" cy="41" r="1.3"/><circle cx="34" cy="40" r="1.3"/><circle cx="41" cy="45" r="1.3"/><circle cx="18" cy="49" r="1.3"/><circle cx="29" cy="48" r="1.3"/><circle cx="47" cy="51" r="1.3"/><circle cx="38" cy="53" r="1.3"/><circle cx="23" cy="55" r="1.1"/></g>` +
    `<ellipse cx="21.5" cy="22" rx="4.6" ry="3.4" fill="#ffb52e" stroke="#b86a00" stroke-width="1.1"/><ellipse cx="42.5" cy="22" rx="4.6" ry="3.4" fill="#ffb52e" stroke="#b86a00" stroke-width="1.1"/>` +
    `<path d="M24 17Q28 14 32 18 36 14 40 17V28H24Z" fill="#ff9a1a" stroke="#b86a00" stroke-width="1.2" stroke-linejoin="round"/><rect x="22.5" y="27.5" width="19" height="4" rx="2" fill="#ffc93c" stroke="#e3a400" stroke-width="1"/>` +
    `<path d="M39 16C46 28 31 40 20 57L15.5 55C27 41 41 29 36 17Z" fill="#ffb52e" fill-opacity=".85" stroke="#e38a00" stroke-width=".9" stroke-linejoin="round"/>` +
    `<path d="M17.8 56.2C29 41 42.5 29 37.6 16.5" fill="none" stroke="#fff3a0" stroke-width="1" stroke-dasharray="1 2"/>`);
  const BANGLES = drawn([["#ffc93c", "#b88a00"], ["#e8262c", "#8e1018"], ["#2ea04a", "#1a6a2e"], ["#ffc93c", "#b88a00"], ["#1e6fd9", "#0f3f85"]].map(([c, edge], i) =>
    `<ellipse cx="32" cy="${18 + i * 7}" rx="20" ry="8" fill="none" stroke="${edge}" stroke-width="5.4"/><ellipse cx="32" cy="${18 + i * 7}" rx="20" ry="8" fill="none" stroke="${c}" stroke-width="3.8"/>` +
    (c === "#ffc93c" ? `<ellipse cx="32" cy="${18 + i * 7}" rx="20" ry="8" fill="none" stroke="#fff6c0" stroke-width="1.2" stroke-dasharray="1 3"/>` : "")).join(""));
  // Thanksgiving: a crown of autumn leaves, and the royal cape in harvest colors.
  const leaf = (x, y, a, c) => `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M0 0C-6-3-6-11 0-16 6-11 6-3 0 0Z" fill="${c}"/><path d="M0 0V-13" stroke="#7a3510" stroke-width=".9"/></g>`;
  const LEAF_CROWN = drawn(`<path d="M8 41Q32 26 56 41" fill="none" stroke="#7a4a22" stroke-width="3" stroke-linecap="round"/>` +
    [[11, 40, -58], [17, 36, -40], [24, 33, -20], [32, 32, 0], [40, 33, 20], [47, 36, 40], [53, 40, 58]].map(([x, y, a], i) => leaf(x, y, a, ["#d9541e", "#e8901a", "#b5361b", "#c9a227"][i % 4])).join(""));
  const HARVEST_CAPE = recolor(CAPE, { "#d12a4a": "#c2571a", "#8e1530": "#7a3510", "#ffc93c": "#e8b04a", "#e3a400": "#b87a1a", "#fff": "#f3e2b8", "#c9c2cc": "#c9a87a", "#3a2a35": "#7a3510", "#8fd3f0": "#d9541e" });
  const CARRIAGE = drawn(`<path d="M32 18Q30 10 35 7" fill="none" stroke="#3f8f3a" stroke-width="3" stroke-linecap="round"/><path d="M35 9q7-3 9 3-6 2-9-3Z" fill="#5cb85c"/><ellipse cx="32" cy="34" rx="23" ry="17" fill="#ff9a3c" stroke="#d96b10" stroke-width="2"/><path d="M32 17v34M20 20q-6 14 0 28M44 20q6 14 0 28" fill="none" stroke="#d96b10" stroke-width="1.5"/><rect x="25" y="25" width="14" height="13" rx="6" fill="#bfe8ff" stroke="#e3a400" stroke-width="2.5"/><g fill="none" stroke="#e3a400" stroke-width="3"><circle cx="17" cy="52" r="8"/><circle cx="47" cy="52" r="8"/></g><path d="M17 44v16M9 52h16M47 44v16M39 52h16" stroke="#e3a400" stroke-width="1.5"/>`);
  const THRONE = drawn(`<path d="M18 7 24 13 32 4 40 13 46 7V36H18Z" fill="#c93d80" stroke="#e3a400" stroke-width="2.5" stroke-linejoin="round"/><circle cx="32" cy="21" r="4" fill="#8fd3f0" stroke="#fff" stroke-width="1.5"/><path d="M16 45 14 60M48 45 50 60" stroke="#e3a400" stroke-width="4" stroke-linecap="round"/><rect x="11" y="34" width="42" height="11" rx="4" fill="#ff7eb6" stroke="#e3a400" stroke-width="2"/><rect x="9" y="26" width="7" height="21" rx="2.5" fill="#ffc93c" stroke="#e3a400" stroke-width="1.5"/><rect x="48" y="26" width="7" height="21" rx="2.5" fill="#ffc93c" stroke="#e3a400" stroke-width="1.5"/>`);
  const PEGASUS = drawn(`<path d="M15 34Q4 36 6 49" fill="none" stroke="#c9b3ff" stroke-width="5" stroke-linecap="round"/><path d="M20 40v16M26 42v15M38 42v15M44 40v16" stroke="#e8e2f5" stroke-width="4" stroke-linecap="round"/><path d="M18 57h4M24 58h4M36 58h4M42 57h4" stroke="#ffc93c" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="31" cy="37" rx="16" ry="9" fill="#fff" stroke="#b9a8de" stroke-width="1.5"/><path d="M40 33 47 14 56 13 60 19 50 22 47 37Z" fill="#fff" stroke="#b9a8de" stroke-width="1.5" stroke-linejoin="round"/><path d="M47 14Q42 21 41 31" fill="none" stroke="#c9b3ff" stroke-width="4" stroke-linecap="round"/><circle cx="53" cy="16" r="1.6" fill="#2a2a2a"/><path d="M31 33Q19 14 7 8 13 17 11 20 19 22 17 26 25 28 31 33Z" fill="#f4efff" stroke="#b9a8de" stroke-width="1.5" stroke-linejoin="round"/>`);
  // The dress-up doll's head. Clothes are layered around it.
  const DOLL = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 30Q12 6 32 6 52 6 50 30 52 46 46 52H18Q12 46 14 30Z" fill="#7a4a2a"/><rect x="28" y="40" width="8" height="16" fill="#f1c39c"/><ellipse cx="32" cy="30" rx="13" ry="15" fill="#f8d4b4"/><path d="M19 27Q21 12 32 12 43 12 45 27 40 18 32 18 24 18 19 27Z" fill="#7a4a2a"/><circle cx="27" cy="30" r="2" fill="#3a2a2a"/><circle cx="37" cy="30" r="2" fill="#3a2a2a"/><circle cx="23.5" cy="35" r="2.6" fill="#ff8fb1" opacity=".5"/><circle cx="40.5" cy="35" r="2.6" fill="#ff8fb1" opacity=".5"/><path d="M28 37Q32 40.5 36 37" fill="none" stroke="#c0505a" stroke-width="1.6" stroke-linecap="round"/></svg>`;
  const THEME = {
    home: "Your castle",
    display: "shelves",  // treasures sit on shelves rather than swimming about
    currency: "Gems",
    collection: "Royal treasures",
    gift: { icon: "🎁", title: "A royal gift!", fresh: "Something new for your castle!", again: "Another one for your castle!" },
    fastWords: ["Royally done!", "Sparkle power!", "Magical!", "Crown-worthy!", "Dazzling!", "Fit for a queen!"],
    starter: "gown",
    // Each room is its own collection; filling one opens the next. The first room's items keep their original keys.
    // r is the rarity tier (0 common to 3 legendary). Keys must be unique across rooms.
    // Where things go in the room: on a shelf by default, `floor` stands on the floor, `walk` strolls about on it, `fly` hovers.
    // `colors` paints the room (top, bottom, floor); the first room uses the page palette.
    rooms: [
      { name: "Castle", decor: `<span class="weed" style="left:5%">🌷</span><span class="weed" style="left:80%;animation-delay:-2s">🌸</span>`,
        creatures: {
          gown: { e: "👗", name: "Sundress", r: 0 }, kimono: { e: "👘", name: "Silk robe", r: 0 },
          ribbon: { e: "🎀", name: "Ribbon", r: 0 }, rose: { e: "🌹", name: "Rose", r: 0 },
          purse: { e: "👛", name: "Purse", r: 0 }, cupcake: { e: "🧁", name: "Royal cupcake", r: 0 },
          tutu: { e: TUTU, name: "Tutu dress", r: 0 },
          slipper: { e: "👠", name: "Glass slipper", r: 0, floor: 1 },
          tiara: { e: TIARA, name: "Tiara", r: 1 }, ring: { e: "💍", name: "Ring", r: 1 },
          swan: { e: "🦢", name: "Swan", r: 1, walk: 1 }, butterfly: { e: "🦋", name: "Butterfly", r: 1, fly: 1 },
          frog: { e: "🐸", name: "Frog prince", r: 1, walk: 1 },
          cape: { e: CAPE, name: "Royal cape", r: 1 }, hennin: { e: HENNIN, name: "Princess hat", r: 1 },
          wings: { e: WINGS, name: "Fairy wings", r: 1 },
          crown: { e: "👑", name: "Crown", r: 2 }, jewel: { e: "💎", name: "Royal jewel", r: 2 },
          fairy: { e: "🧚", name: "Fairy godmother", r: 2, fly: 1 }, dragon: { e: "🐉", name: "Friendly dragon", r: 2, fly: 1 },
          unicorn: { e: "🦄", name: "Unicorn", r: 2, walk: 1 },
          ballgown: { e: BALL_GOWN, name: "Ball gown", r: 2 },
          princess: { e: "👸", name: "Princess", r: 3, walk: 1 },
          starlight: { e: STARLIGHT_GOWN, name: "Starlight gown", r: 3 },
        } },
      { name: "Garden", colors: ["#d9f5c8", "#8fd18a", "#7cb85a"],
        decor: `<span class="weed" style="left:4%">🌷</span><span class="weed" style="left:86%;animation-delay:-1s">🌼</span>`,
        creatures: {
          bunny: { e: "🐇", name: "Bunny", r: 0, walk: 1 }, hedgehog: { e: "🦔", name: "Hedgehog", r: 0, walk: 1 },
          bee: { e: "🐝", name: "Bumblebee", r: 0, fly: 1 }, sunflower: { e: "🌻", name: "Sunflower", r: 0, floor: 1 },
          ladybug: { e: "🐞", name: "Ladybug", r: 0, fly: 1 }, strawberry: { e: "🍓", name: "Strawberry", r: 0 },
          peacock: { e: "🦚", name: "Peacock", r: 1, walk: 1 }, dove: { e: "🕊️", name: "Dove", r: 1, fly: 1 },
          teapot: { e: "🫖", name: "Garden tea set", r: 1, floor: 1 },
          flamingo: { e: "🦩", name: "Flamingo", r: 2, walk: 1 }, rainbow: { e: "🌈", name: "Rainbow", r: 2, fly: 1 },
          wand: { e: "🪄", name: "Magic wand", r: 3 },
        } },
      { name: "Stables", colors: ["#ffe9c2", "#e8b878", "#b8864a"],
        decor: `<span class="weed" style="left:6%">🌾</span><span class="weed" style="left:82%;animation-delay:-2s">🌾</span>`,
        creatures: {
          kitten: { e: "🐈", name: "Kitten", r: 0, walk: 1 }, puppy: { e: "🐕", name: "Puppy", r: 0, walk: 1 },
          lamb: { e: "🐑", name: "Lamb", r: 0, walk: 1 }, rooster: { e: "🐓", name: "Rooster", r: 0, walk: 1 },
          carrot: { e: "🥕", name: "Carrot", r: 0 },
          pony: { e: "🐴", name: "Pony", r: 1, walk: 1 }, deer: { e: "🦌", name: "Deer", r: 1, walk: 1 }, duck: { e: "🦆", name: "Duck", r: 1, walk: 1 },
          horse: { e: "🐎", name: "Royal horse", r: 2, walk: 1 }, carriage: { e: CARRIAGE, name: "Pumpkin carriage", r: 2, floor: 1 },
          pegasus: { e: PEGASUS, name: "Pegasus", r: 3, fly: 1 },
        } },
      { name: "Dragon tower", colors: ["#5a4a8a", "#241a40", "#4a3a5a"],
        decor: `<span class="weed" style="left:8%">🕯️</span><span class="weed" style="left:84%;animation-delay:-1s">🕯️</span>`,
        creatures: {
          egg: { e: "🥚", name: "Dragon egg", r: 0, floor: 1 }, scroll: { e: "📜", name: "Magic scroll", r: 0 },
          key: { e: "🗝️", name: "Golden key", r: 0 }, crystal: { e: "🔮", name: "Crystal ball", r: 1, floor: 1 },
          owl: { e: "🦉", name: "Owl", r: 1 }, mirror: { e: "🪞", name: "Magic mirror", r: 1, floor: 1 },
          throne: { e: THRONE, name: "Throne", r: 2, floor: 1 }, babydragon: { e: "🐲", name: "Baby dragon", r: 2, fly: 1 },
          elf: { e: "🧝‍♀️", name: "Elf", r: 2, walk: 1 },
          queen: { e: "🫅", name: "The queen", r: 3, walk: 1 },
        } },
      { name: "Royal wardrobe", colors: ["#fff3e6", "#f5c6d6", "#c98aa8"],
        decor: `<span class="weed" style="left:5%">🧵</span><span class="weed" style="left:84%;animation-delay:-2s">🎀</span>`,
        creatures: {
          partydress: { e: PARTY_DRESS, name: "Party dress", r: 0 }, daisydress: { e: DAISY_DRESS, name: "Daisy dress", r: 0 },
          pinktutu: { e: PINK_TUTU, name: "Pink tutu", r: 0 },
          petaldress: { e: PETAL_DRESS, name: "Flower fairy dress", r: 1 }, goldgown: { e: GOLDEN_GOWN, name: "Golden gown", r: 1 },
          lilacgown: { e: LILAC_GOWN, name: "Lilac gown", r: 1 },
          mermaidgown: { e: MERMAID_GOWN, name: "Mermaid gown", r: 2 }, twilightgown: { e: TWILIGHT_GOWN, name: "Twilight gown", r: 2 },
          rainbowgown: { e: RAINBOW_GOWN, name: "Rainbow gown", r: 3 },
        } },
    ],
    // Holiday items only come while their holiday's window is open (HOLIDAYS in src/index.html), and live in the holiday room.
    // `look` turns on a holiday look (LOOKS in src/index.html); `decor` hangs in the holiday room while the window is open.
    // Keep their keys: saved collections go by them.
    holidays: {
      halloween: { look: LOOKS.halloween, items: {
        s_pumpkin: { e: "🎃", name: "Jack-o'-lantern", r: 0, floor: 1 },
        s_ghost: { e: "👻", name: "Friendly ghost", r: 1, fly: 1 },
        s_pumpkingown: { e: PUMPKIN_GOWN, name: "Pumpkin gown", r: 2 },
        s_candybucket: { e: ART.candyBucket, name: "Candy bucket", r: 0 }, s_spiderweb: { e: "🕸️", name: "Spiderweb", r: 0 },
        s_witchdress: { e: WITCH_DRESS, name: "Witch dress", r: 1 }, s_witchhat: { e: WITCH_HAT, name: "Witch hat", r: 1 },
        s_batcape: { e: BAT_CAPE, name: "Bat-wing cape", r: 2 },
      } },
      muertos: { look: LOOKS.muertos, decor: ART.papelPicado, items: {
        s_sugarskull: { e: ART.sugarSkull, name: "Sugar skull", r: 0 }, s_marigolds: { e: ART.marigolds, name: "Marigolds", r: 0 },
        s_marigoldcrown: { e: MARIGOLD_CROWN, name: "Marigold crown", r: 1 }, s_papeldress: { e: PAPEL_DRESS, name: "Papel picado dress", r: 2 },
      } },
      diwali: { look: LOOKS.diwali, items: {
        s_diya: { e: ART.diya, name: "Diya", r: 0 }, s_rangoli: { e: ART.rangoli, name: "Rangoli tile", r: 0 },
        s_bangles: { e: BANGLES, name: "Bangles", r: 1 }, s_sparklerwand: { e: ART.sparkler, name: "Sparkler wand", r: 1 },
        s_lehenga: { e: LEHENGA, name: "Lehenga", r: 2 },
      } },
      thanksgiving: { look: LOOKS.thanksgiving, items: {
        s_pie: { e: "🥧", name: "Pie", r: 0 }, s_leafcrown: { e: LEAF_CROWN, name: "Crown of autumn leaves", r: 1 },
        s_harvestcape: { e: HARVEST_CAPE, name: "Harvest cape", r: 2 },
      } },
      gurpurab: { look: LOOKS.gurpurab, items: {
        s_langar: { e: ART.langarPlate, name: "Langar plate", r: 0 },
      } },
      winter: { items: {
        s_snowflake: { e: "❄️", name: "Snowflake", r: 0, fly: 1 },
        s_snowman: { e: "⛄", name: "Snowman", r: 1, floor: 1 },
        s_snowgown: { e: SNOW_GOWN, name: "Snow gown", r: 2 },
      } },
      valentine: { items: {
        s_letter: { e: "💌", name: "Love letter", r: 0 },
        s_heart: { e: "💖", name: "Sparkly heart", r: 1, fly: 1 },
        s_valentinegown: { e: VALENTINE_GOWN, name: "Valentine gown", r: 2 },
      } },
      spring: { items: {
        s_chick: { e: "🐣", name: "Spring chick", r: 0, walk: 1 },
        s_blossomgown: { e: BLOSSOM_GOWN, name: "Blossom gown", r: 2 },
      } },
    },
    // Decorations from the shop, placed on the floor of any room.
    shop: {
      d_plant: { e: "🪴", name: "Potted plant" }, d_teddy: { e: "🧸", name: "Teddy bear" }, d_vase: { e: "🏺", name: "Vase" },
      d_fountain: { e: "⛲", name: "Fountain" }, d_carousel: { e: "🎠", name: "Carousel horse" }, d_painting: { e: "🖼️", name: "Painting" },
      d_piano: { e: "🎹", name: "Piano" }, d_sofa: { e: "🛋️", name: "Sofa" },
    },
    run: { name: "Royal ball run", icon: "🏰", mover: CARRIAGE, goal: "🏰", badge: "Belle of the ball",
      intro: "Each fast answer moves the carriage closer. Ten fast answers get you to the ball!", done: "You made it to the ball!" },
    // Dress-up: each slot lists the items that can go there; only ones you own show up.
    dressUp: { doll: DOLL, slots: [
      { key: "dress", name: "Dress", items: ["gown", "kimono", "tutu", "ballgown", "starlight",
        "partydress", "daisydress", "pinktutu", "petaldress", "goldgown", "lilacgown", "mermaidgown", "twilightgown", "rainbowgown",
        "s_pumpkingown", "s_witchdress", "s_papeldress", "s_lehenga", "s_snowgown", "s_valentinegown", "s_blossomgown"] },
      { key: "head", name: "Head", items: ["tiara", "crown", "hennin", "ribbon", "s_witchhat", "s_marigoldcrown", "s_leafcrown"] },
      { key: "back", name: "Back", items: ["wings", "cape", "s_batcape", "s_harvestcape"] },
      { key: "hand", name: "Hand", items: ["wand", "rose", "purse", "butterfly", "cupcake", "sunflower", "jewel", "s_candybucket", "s_bangles", "s_sparklerwand"] },
      { key: "feet", name: "Feet", items: ["slipper"] },
    ] },
    pictures: ["castle", "heart", "rainbow", "star", "sun", "fish", "heart"],
  };
