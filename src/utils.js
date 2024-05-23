export function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("All parameters must be a number!");
  }

  return Number(num1) + Number(num2);
}

export function mult(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("All parameters must be a number!");
  }

  return Number(num1) * Number(num2);
}
