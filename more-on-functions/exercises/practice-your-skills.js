//Create an anonymous function and set it equal to a variable.

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

let triple = function (a){
    if (typeof a === "number") {
        return a * 3;
    } else if (typeof a === "string") {
        return "ARRR!";
    } else {
        return a;
    };
}

let mappedArr = arr.map(triple);

console.log(triple(5));
console.log(triple("plane"));
console.log(arr)
console.log(mappedArr);
