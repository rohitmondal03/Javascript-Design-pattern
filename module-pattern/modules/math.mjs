import { verifyInput } from "./verifyinput.mjs";


export const addNumbers= (num1, num2) => {
  verifyInput(num1);
  verifyInput(num2);
  return num1 + num2;
}

export const subtractNumbers= (num1, num2) => {
  verifyInput(num1);
  verifyInput(num2);
  return num1 - num2;
}

export const multiplyNumbers= (num1, num2) => {
  verifyInput(num1);
  verifyInput(num2);
  return num1 * num2;
}

export const divideNumbers= (num1, num2) => {
  verifyInput(num1);
  verifyInput(num2);
  if (num2 === 0) {
    throw new Error('Cannot divide by zero');
  }
  return num1 / num2;
};