// Use terminal commands to see what happens when we call Astronaut but do not pass in 3 arguments.

// Next, set default values for 1 or more of the parameters in constructor.

class Astronaut {
   constructor(name, age, mass, city = "Philly", experience = "expert"){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.city = city;
     this.experience = experience
   }
}

let tortoise = new Astronaut('Speedy', 120, 25, "New York", "Novice");

console.log(tortoise.name, tortoise.age, tortoise.mass, tortoise.city, tortoise.experience);

// What happens if we call Astronaut and pass in MORE than 3 arguments? TRY IT!