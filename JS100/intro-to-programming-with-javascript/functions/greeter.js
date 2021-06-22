let rlSync = require('readline-sync');

let ask = prompt => {
  let res = rlSync.question(prompt);
  return res;
}

let firstName = ask('What is your first name?\n');
let lastName = ask('What is your last name?\n');

console.log(`Hello, ${firstName} ${lastName}!`);
