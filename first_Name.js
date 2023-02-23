//exercise 1
const d = new Date();
let d_ = d.getDay();

const day = new Map([
  [0, "Sunday"],
  [1, "Monday"],
  [2, "Tuesday"],
  [3, "Wednesday"],
  [4, "Thursday"],
  [5, "Friday"],
  [6, "Saturday"],
]);

const hours = new Map([
  [13, 1],
  [14, 2],
  [15, 3],
  [16, 4],
  [17, 5],
  [18, 6],
  [19, 7],
  [20, 8],
  [21, 9],
  [22, 10],
  [23, 11],
]);

const hours__ = d.getHours();
if (d.getHours() < 12) {
  let hours_ = d.getHours();
  console.log(
    "Current is:",
    hours_,
    "AM:",
    d.getMinutes(),
    ":",
    d.getSeconds()
  );
}

console.log("Today is:", day.get(d_));
if (d.getHours() > 12) {
  let hours_ = hours.get(d.getHours());
  console.log(
    "Current is:",
    hours_,
    "PM :",
    d.getMinutes(),
    ":",
    d.getSeconds()
  );
}

//exercise 2
console.log(d.getDate(), "-", d.getMonth(), "-", d.getFullYear());

//exercise 3

const prompt = require("prompt-sync")();

const C_ = prompt("Input is *C:");
const F = (C_ / 5) * 9 + 32;
const F_=prompt("Input is *F:");
const C =((F_-32)/9*5)
console.log(`${C_}*C is ${F}*F`);
console.log(`${F_}*C is ${C}*C`);


//exercise 4

