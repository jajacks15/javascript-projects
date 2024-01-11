// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelSufficient = true;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelSufficient = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   fuelSufficient = false;
}

console.log("fuelSufficient = ", fuelSufficient);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (fuelSufficient=== true && launchReady== true){
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
    console.log('Liftoff!');
 } else {
   console.log('Launch scrubbed.');
}

   /* I've given up on the launchReady code block. I don't understand why the compund boolean expression
   in line 21 results in a true statement even if BOTH crewStatus && computerStatus !== the string 'green'.
   launchReady should ultimately be true though, since crewStatus = true (not a negative value) and computerStatus = 'green'. /
   /* Upon checking answers in the book, I realized that I was evaluating the boolean expression wrong. 
   The correct interpretation is true && true === true. My brain interpreted it as false && true === false (I explained that poorly) */
   // I added fuelSufficient to the first block instead of crewReady to the second block. Is that ok? //