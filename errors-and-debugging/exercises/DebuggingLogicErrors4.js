// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
   /* launchReady should be false in the first code block. I do not think that 
   launchReady should be true in the second code block. */
// Is the program behaving as expected?
   /* The first code block is behaving as expected. I suppose this is due to the first
   added console.log line allowing the code to print launchReady as false properly? The
   second code block is still not behaving as expected. I still believe it is due to the conditional
   not being corrected. I believe that the conditional should state if 
   crewReady===true &&& computerStatus === 'green'. The problem is 'green' is a string instead of a 
   boolean value, right? */

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }