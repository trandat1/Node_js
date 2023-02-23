function reverse_string(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
const prompt = require("prompt-sync")();
const str = prompt("input string:");
console.log(reverse_string(str));
// program to reverse a string

// function reverseString(str) {
//   // return a new array of strings
//   const arrayStrings = str.split("");

//   // reverse the new created array elements
//   const reverseArray = arrayStrings.reverse();

//   // join all elements of the array into a string
//   const joinArray = reverseArray.join("");

//   // return the reversed string
//   return joinArray;
// }

// take input from the user
// const string = prompt("Enter a string: ");

// const result = reverseString(string);
// console.log(result);
