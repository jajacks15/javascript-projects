let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split(''));
console.log(str);
    /* When using split, the parameter you give tells the program where to split the string into different items.
    When no parameters are given, it splits each word in the string into its own item. When a single letter is 
    identified as the parameter, a new item is created based on where the identified letter is shown in the string.
    When quotatations with a space is the parameter, a multi-dimenstional array is printed with each word in the string 
    as its own item. When a quotation without a space is used as the parameter, a multi-dimenstional array is printed with 
    each letter as its own item. */

//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(' '));
console.log(arr.join(''));
console.log(arr);
    /* When using join, the parameters you give tells the program how you want to join an array into its own string. When no
    parameters are given, it joins all items together into one string with commas included. When a letter is used as the parameter, 
    the items are joined into one string with the letter between each item. When quotations with a space in between are used as paramters, 
    the items are joined into one string with a space between each item. When quotations without a space are used, the items are joined
    without commas. */

//3) Do split or join change the original string/array?
//No, split and join do not change the original strings and arrays.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(",").sort().join(","));