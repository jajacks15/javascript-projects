let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
for (item in tortoiseOne){
   console.log(item + ", " + tortoiseOne[item]);
   // OR console.log(`${item}, ${tortoiseOne[item]}`)
};
// Commented below is practice
// let wife = {
//    name: "Alexandra",
//    age: 28,
//    gender: "woman",
//    hometown: "Maryland",
//    occupation: "nurse",
   
// };
// newAge = wife.age + 1;
// wife.age = newAge;
// console.log(wife.age);
// wife["marital state"] = "married";
// console.log(wife.maritalstatus);
// console.log(wife["marital status"]);
// console.log(wife);

// let giraffe = {
//    species: "Reticulated Giraffe",
//    name: "Cynthia",
//    weight: 1500,
//    age: 15,
//    diet: "leaves",
//    birthday: function() {
//       return this.age + 1
//    }
//  };
//  console.log(giraffe.birthday);
