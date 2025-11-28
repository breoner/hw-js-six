import { calculate } from "./calc.js";

const btn = document.getElementById("calculate");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const op = document.getElementById("operation");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  const operation = op.value;

  if (isNaN(a) || isNaN(b)) {
    result.innerText = "Результат: введіть обидва числа";
    return;
  }

  result.innerText = "Результат: " + calculate(a, b, operation);
});