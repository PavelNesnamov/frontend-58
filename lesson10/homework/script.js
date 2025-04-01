let myNumber = document.createElement('p');
myNumber = 100 / (25 % 3);
document.body.append(myNumber);

let myString = document.createElement('p');
let year = 2024;
myString = `Hello, ${year} world`;
document.body.append(myString);

let isHuman = document.createElement('p');
isHuman.innerText = 42 !== '42';
document.body.append(isHuman);

console.log(myString);

let myNumber2 = document.createElement('p');
myNumber2.innerText = parseInt('123smth');
document.body.append(myNumber2);

console.log(myNumber2);