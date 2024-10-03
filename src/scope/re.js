var firstName; // Undefined
firstName = "Vladimir";
console.log(firstName);

var lastName = "Sanchez"; // declarar / asignar
lastName = "Flores"; // reasignar
console.log(lastName);

var secondName = "Sanchez"; // declarando / asignando
var secondName = "Flores"; // reasignando
console.log(secondName);

// LET (yo no puedo redeclarar )
let fruit = "Apple"; //declarar y asignar
fruit = "Kiwi";
console.log(fruit);
// let fruit = "Banana"; //Cuando quiero redeclarar ya no es posible

// CONST
const animal = "dog"; //declarar y asignar
// animal = "cat"; //reasignando no es posible
// const animal = "snake";
console.log(animal);

const vehicles = [];
vehicles.push("✈");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);
