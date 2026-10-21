  // Save slot. Must differ from other variants hosted on the same site.
  const STORE = "flash-facts-flash1-v1";
  // Overrides for the settings in DEFAULT_OPTIONS (src/index.html).
  const OPTIONS = { earthquakes: true, readAloud: true };
  // Families and stages with `after` stay hidden until every card they name has been known at least once
  // ("add" = the whole family, "add.0" = its first stage). Each one opens with a "New cards" moment.
  const FACTS = {
    add: { name: "Addition", sym: "+", limit: 4000, rows: range(0, 10), cols: range(0, 10), how: "row + column",
      make: (a, b) => ({ text: `${a} + ${b}`, ans: a + b }), score: addScore,
      stages: [{ include: (a, b) => a <= 8 && b <= 8 }, { after: ["add.0"] }] },  // then 9s, 10s and teen numbers
    sub: { name: "Subtraction", sym: "−", limit: 4500, rows: range(0, 8), cols: range(0, 8), how: "(row + column) − column",
      make: (a, b) => ({ text: `${a + b} − ${b}`, ans: a }), score: addScore, after: ["add"] },
    miss: { name: "Missing number", sym: "?", limit: 6000, rows: range(0, 8), cols: range(0, 8), how: "row + ? = row + column",
      make: (a, b) => ({ text: `${a} + ? = ${a + b}`, ans: b, parts: [`${a} +`, `= ${a + b}`] }), score: addScore, after: ["sub"] },
    ten: { name: "Make 10", sym: "10", limit: 5000, rows: range(0, 10), cols: [10], how: "row + ? = 10",
      make: (a) => ({ text: `${a} + ? = 10`, ans: 10 - a, parts: [`${a} +`, "= 10"] }), score: (a) => addScore(a, 10 - a), after: ["add.0"] },
    mul: { name: "Multiplication", sym: "×", limit: 5000, rows: range(0, 10), cols: [0, 1, 2, 5, 10], how: "row × column",
      make: (a, b) => ({ text: `${a} × ${b}`, ans: a * b }), score: mulScore,
      stages: [{ include: (a, b) => a <= 8 && b <= 2, after: ["add"] }, { include: (a, b) => b !== 5, after: ["mul.0"] }, { after: ["mul.1"] }] },
  };
