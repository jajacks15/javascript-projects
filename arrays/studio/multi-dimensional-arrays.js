const input = require('readline-sync');
let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",");
foodArray.sort();
let equipmentArray = equipment.split(",")
equipmentArray.sort();
let petsArray = pets.split(",");
petsArray.sort();
let sleepAidsArray = sleepAids.split(",");
sleepAidsArray.sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodArray, equipmentArray, petsArray, sleepAidsArray]
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
selection = input.question("Please select cabinet a cabinet (0-3) from the cargo hold. " );

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selection >= 0 && selection < 4) {
    console.log(`Cabinet number ${selection} contains ${cargoHold[selection]}.`);
} else {
    console.log("Invalid input.");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
itemCheck = input.question("Which item would you like to check the selected cabinet for? ");

if (selection >= 0 && selection < 4) {
    console.log(itemCheck);
} if (itemCheck === cargoHold[selection].includes(itemCheck)) {
    console.log(`Cabinet ${selection} DOES contain ${itemCheck}.`);
} else {
    console.log(`Cabinet ${selection} DOES NOT contain ${itemCheck}.`);
}
    /* I am stuck on how to connect the user's two inputs with the conditional check that I am coding. For example,
    I know how to direct the program to the user's directed cabinet, however I do not know how to direct the program
    to the array that the user selected, nor do I know how to access the items in the selected array in order to have the 
    program check if their selected item exists in the cabinet. Hope I explained that well! Will connect with my IA to 
    discuss this more. */