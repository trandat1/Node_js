const prompt = require("prompt-sync")();
const marks = prompt("Input is marks:");

function check_total(marks) {
  if (marks > 89 && marks < 100) {
    return true;
  }
  return false;
}

if (check_total(marks)) {
  return console.log("A+");
}
else {
  return console.log("B");
}