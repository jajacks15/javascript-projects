let num = String(1001);

//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.
console.log(num, "has", num.length, "digits.");
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let decimal = String(123.45);
let decimalOne = decimal.slice(0,3);
let decimalTwo = decimal.slice(4,6);
console.log(decimal, "has", decimalOne.length + decimalTwo.length, "digits.");

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
    }