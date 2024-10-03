// variables

var a; // declaración
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignacion
var a = "aa"; // redeclaracion

// Global Scope
var fruit = "Apple"; // Global

function bestFruit() {
  console.log(fruit);
}

// Ejecutamos la function
bestFruit();

function countries() {
  country = "Colombia";
  console.log(country);
}

countries();
console.log(country);
