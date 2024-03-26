let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let beagle = {
   name: "LeRoy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
 superChimpOne["astronautID"] = 10
 salamander["astronautID"] = 3
 superChimpTwo["astronautID"] = 5
 beagle["astronautID"] = 4
 waterBear["astronautID"] = 7

 /* Add a move method to each animal object. The move method will select a random number of steps from 0 to 10 for the animal to take. 
 The number can be 0 as well as 10. */
 superChimpOne["move"] = function() {
   let steps = Math.floor(Math.random() * 11)
   return steps;
 };
 salamander["move"] = function() {
   let steps = Math.floor(Math.random() * 11)
   return steps;
 };
 superChimpTwo["move"] = function() {
   let steps = Math.floor(Math.random() * 11)
   return steps;
 };
 beagle["move"] = function() {
   let steps = Math.floor(Math.random() * 11)
   return steps;
 };
 waterBear["move"] = function() {
   let steps = Math.floor(Math.random() * 11)
   return steps;
 };


// Create an array to hold the animal objects.
let crew = [
   superChimpOne,
   salamander,
   superChimpTwo,
   beagle,
   waterBear
];
// Print out the relevant information about each animal.
let crewReport = function (obj) {

   return `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`;
}; 
console.log(crew.map(crewReport));
// Start an animal race!

let fitnessTest = function(array) {
      let results = []
      let steps
      let turns;
      for (let i = 0; i < array.length; i++){
          numSteps = 0;
          turns = 0;
          while(numSteps < 20){
          numSteps += array[i].move();
          turns++;
          }
          results.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
      }
      return results;
     }
     console.log(fitnessTest(crew))