let rlSync = require('readline-sync');

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth() + 1;
let currentDay = new Date().getDate();

let birthYear = Number(rlSync.question('What year were you born?\n'));
let birthMonth = Number(rlSync.question('What month were you born?\n'));
let birthDay = Number(rlSync.question('What day of the month were you born?\n'));

let age = currentYear - birthYear;
if (currentMonth < birthMonth || currentMonth === birthMonth && currentDay < birthDay) {
  age--;
}

console.log(`You are ${age} years old.`);