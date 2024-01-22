const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str.slice(3) + str.slice(0,3);
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`${newStr} is ${str} with the first three characters sliced from the string and added to the end of the word.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let num = input.question("How many letters will be relocated? ")
newStr = str.slice(num) + str.slice(0,num);
console.log(str.slice(num) + str.slice(0,num));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (num < str.length) {
    console.log(`${newStr} is ${str} with the first ${num} characters sliced from the string and added to the end of the word.`);
} else {
    console.log("Invalid input. Provided number must be less than str length.");
}