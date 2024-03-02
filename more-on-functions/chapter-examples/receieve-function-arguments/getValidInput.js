const input = require('readline-sync');

// function getValidInput(prompt, isValid) {

//     let userInput = input.question(prompt);

//     while (!isValid(userInput)) {
//       console.log("Invalid input. Try again.");
//       userInput = input.question(prompt);
//     }

//     return userInput;

//     let isValidPassword = function(password) {
//       if password[0] != "a"
//       return false

//       if password.
//     }
// }

// TODO 1: write a validator 
// that ensures input starts with "a"
function getValidInput(prompt, isValid) {

  let userInput = input.question(prompt);

  while (!isValid(userInput)) {
    console.log("Invalid input. Try again.");
    userInput = input.question(prompt);
  }

  return userInput

  let isValidPassword = function (password) {
    if (password[0] != "a") {
      return false;
    } if (password[0] != "a" || "e" || "i" || "o" || "u") {
      return false;
    }
  }
  console.log(getValidInput("Enter password that begins with 'a': ", isValidPassword));
}
// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!

// function callMe(func) {
//   func();
// }

// callMe("Al");