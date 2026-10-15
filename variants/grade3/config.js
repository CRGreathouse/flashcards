  // Save slot. Keep this the same so existing progress carries over; variants on one site need different slots.
  const STORE = "flash-facts-v1";
  const MUL_SET = [1, 2, 5, 10];
  const basicMul = (a, b) => MUL_SET.includes(a) || MUL_SET.includes(b);
  // A third number for each "three numbers" card. About a third of them hide a pair that makes 10.
  const third = (a, b) => (a + b) % 3 === 0 ? 10 - a : 1 + (a * 4 + b * 7) % 9;
  // Families and stages with `after` stay hidden until every card they name has been known at least once
  // ("mul" = the whole family, "mul.0" = its first stage). Each one opens with a "New cards" moment.
  const FACTS = {
    add: { name: "Addition", sym: "+", limit: 4000, rows: range(1, 10), cols: range(1, 10), how: "row + column",
      make: (a, b) => ({ text: `${a} + ${b}`, ans: a + b }), score: addScore,
      known: (a, b) => a <= 4 && b <= 4,  // a new player starts out knowing 1–4 + 1–4, so practice begins with harder sums
      proficient: (a, b) => a + b < 7 },  // and sums under 7 start (or are topped up to) well practiced, so they come up rarely
    sub: { name: "Subtraction", sym: "−", limit: 4500, rows: range(1, 10), cols: range(1, 10), how: "(row + column) − column",
      make: (a, b) => ({ text: `${a + b} − ${b}`, ans: a }), score: addScore },
    mul: { name: "Multiplication", sym: "×", limit: 5000, rows: range(1, 10), cols: range(1, 10), how: "row × column",
      make: (a, b) => ({ text: `${a} × ${b}`, ans: a * b }), score: mulScore,
      stages: [{ include: basicMul }, { after: ["mul.0"] }] },  // ×1, 2, 5 and 10 first, the rest once those are known
    div: { name: "Division", sym: "÷", limit: 5000, rows: range(1, 10), cols: range(1, 10), how: "(row × column) ÷ column",
      make: (a, b) => ({ text: `${a * b} ÷ ${b}`, ans: a }), score: mulScore,
      stages: [{ include: basicMul }, { after: ["mul.0"] }] },
    // These take working out, not just remembering, so they get more time.
    add3: { name: "Three numbers", sym: "3+", limit: 9000, rows: range(1, 9), cols: range(1, 9), how: "row + column + a third number",
      make: (a, b) => ({ text: `${a} + ${b} + ${third(a, b)}`, ans: a + b + third(a, b) }), score: (a, b) => a + b + third(a, b), after: ["add"] },
    // Crossing ten: the row is the ones digit of the two-digit number, which gets a tens digit of its own.
    xadd: { name: "Crossing ten (+)", sym: "↑10", limit: 8000, rows: range(1, 9), cols: range(1, 9), how: "ones digit of the first number (row) + column",
      include: (a, b) => a + b >= 10,
      make: (a, b) => { const n = 10 * (1 + (a * 5 + b * 3) % 7) + a; return { text: `${n} + ${b}`, ans: n + b }; },
      score: (a, b) => a + b - 10, after: ["add"] },
    xsub: { name: "Crossing ten (−)", sym: "↓10", limit: 8000, rows: range(0, 8), cols: range(1, 9), how: "ones digit of the first number (row) − column",
      include: (a, b) => b > a,
      make: (a, b) => { const n = 10 * (2 + (a * 3 + b * 5) % 7) + a; return { text: `${n} − ${b}`, ans: n - b }; },
      score: (a, b) => b - a, after: ["sub"] },
  };
