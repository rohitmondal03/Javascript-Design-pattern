import {
  addNumbers,
  subtractNumbers,
  divideNumbers,
  multiplyNumbers,
} from "./modules/math.mjs";


const num1InputValue = document.getElementById("num1");
const num2InputValue = document.getElementById("num2");
const resultDiv = document.getElementById("result");

document.getElementById("add").addEventListener("click", () => {
  const result = addNumbers(Number(num1InputValue.value), Number(num2InputValue.value));
  resultDiv.textContent = result;
});

document.getElementById("subtract").addEventListener("click", () => {
  const result = subtractNumbers(Number(num1InputValue.value), Number(num2InputValue.value));
  resultDiv.textContent = result;
});

document.getElementById("multiply").addEventListener("click", () => {
  const result = multiplyNumbers(Number(num1InputValue.value), Number(num2InputValue.value));
  resultDiv.textContent = result;
});

document.getElementById("divide").addEventListener("click", () => {
  const result = divideNumbers(Number(num1InputValue.value), Number(num2InputValue.value));
  resultDiv.textContent = result;
});