//Try adding new properties inside constructor.
class Astronaut {
  constructor(name,age, mass, color){
    this.name = name;
    this.age = age;
    this.mass = mass;
    this.color = color;
  };
};
let fox = new Astronaut('Fox', 7, 12);


console.log(fox);
console.log(fox.age, fox.color);

fox = new Astronaut("Fox", 7, 12, "red");

fox.age = 9;
fox.color = 'red';
fox.origin = "Africa";

console.log(fox);
console.log(fox.age, fox.color);
console.log(fox.age, fox.color, fox.origin);
console.log(fox);

//Try modifying or adding properties below.