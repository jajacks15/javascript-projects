// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitson = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitson && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
// BEFORE running the code, predict what will be printed to the console by the following statements:

   /*I predict that "engines are off" will be printed in the console because 
   the value assigned to engineIndicatorLight is not equal to "green" or "green blinking", resulting in 
   the condition and nested conditions both being false -Julian */

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
