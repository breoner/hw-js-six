export function calculate(a, b, op) {
  if (op === "add") return a + b;
  if (op === "subtract") return a - b;
  if (op === "multiply") return a * b;
  if (op === "divide") return b !== 0 ? a / b : "На нуль ділити не можна";
  return "Невідома операція";
}