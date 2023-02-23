const prompt = require("prompt-sync")();
const x = prompt("input x:");
const y = prompt("input y:");
const z = prompt("input z:");
function check_whether(x, y, z) {
  if (x * y == z) return console.log("x*y=z");
  if (x + y == z) return console.log("x+y=z");
  if (x - y == z) return console.log("x-y=z");
  if (x / y == z) return console.log("x/y=z");
  else {
    return console.log("There is no corresponding expression");
  }
}
check_whether(x, y, z);
