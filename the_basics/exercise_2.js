let num = 4936;
let onesPlace = num % 10;
num = (num - onesPlace) / 10;
let tensPlace = num % 10;
num = (num - tensPlace) / 10;
let hundredsPlace = num % 10;
num = (num - hundredsPlace) / 10;
let thousandsPlace = num;

console.log('thousands place: ', thousandsPlace);
console.log('hundreds place: ', hundredsPlace);
console.log('tens place: ', tensPlace);
console.log('ones place: ', onesPlace);