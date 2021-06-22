let rlSync = require('readline-sync');

let multiply = (a, b) => a * b;

let getNum = (prompt) => {
  let res = rlSync.question(prompt);
  return Number(res);
}

let num1 = getNum('Enter the first number: ');
let num2 = getNum('Enter the second number: ');
let ans = multiply(num1, num2);

console.log(`${num1} * ${num2} = ${ans}`);