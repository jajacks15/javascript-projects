// //Write a function makeLine(size) that returns a line with exactly size hashes.

function makeLine(size) {
  let line = ""
  for (let i = 0; i < size; i++) {
    line += "#";
  }
  return line;
};
makeLine(5)
// /*Write a function called makeSquare(size) that returns a size by size string of hashes. 
// The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape. 
// Tips:
// 1. Call your makeLine function to create each row of the square.
// 2. The newline character, \n, will be helpful to you.
// 3. Do NOT include a newline character at the end of your string.*/

// function makeSquare(size) {
//   let square = "";
//   for (let i = 0; i < size; i++) {
//     square += makeLine(size) + "\n";
//   }
//   return square.slice(0, -1);
// }
// console.log(makeSquare(5));

// console.log("\n");

// /* Write a function makeRectangle(width, height) that returns a rectangle
//  with the given width and height. Use your makeLine function to do this. */

function makeRectangle(width, height) {
  let rectangle = "";
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + "\n");
  }

  return rectangle.slice(0, -1);
}

console.log(makeRectangle(5, 3));
console.log("\n");

// /* Write a function makeDownwardStairs(height) that prints the staircase 
// pattern shown below, with the given height. Use your makeLine function to 
// do this. */

function makeDownwardStairs(height) {
  let downwardStairs = ""
  for (let i = 0; i < height; i++) {
    downwardStairs += makeLine(i + 1) + "\n";
  }
  return downwardStairs.slice(0, -1);
}

console.log(makeDownwardStairs(5));

/* Write a function makeSpaceLine(numSpaces, numChars) that returns a 
line with exactly the specified number of spaces, followed by the 
specified number of hashes, followed again by numSpaces more spaces. */

function makeSpaceLine(numSpaces, numChars) {
  let spaceLine = "";
  for (let i = 0; i < numChars; i++) {
    let spaces = " ";
    spaceLine = (spaces * i) + makeLine(numChars) + (spaces * i);
    //Do not know how to iterate empty spaces into the string.
  }
return spaceLine;
}
console.log(makeSpaceLine(3, 5));

console.log("\n");

/* Write a function makeIsoscelesTriangle(height) that returns a 
triangle of the given height. */

function makeIsoscelesTriangle(height) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += (makeSpaceLine(height - i - 1, 2 * i + 1) + "\n") 
    //Got the above from book. Unkown how this is the solution.
  }
  return triangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

/* Write a function makeDiamond(height) that returns a diamond where 
the triangle formed by the top portion has the given height. */

function makeDiamond(height) {

}
console.log(makeDiamond(5));


