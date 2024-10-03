function greeting() {
  let userName = "Ana"; // asignamos y declaramos nuestra variable
  console.log(userName); // invocamos con un console.log

  if (userName === "Ana") {
    // hicimos una validación
    console.log(`Hello ${userName}!`); // volvemos a invocarla
  }
}

greeting(); // Ejecutamos nuestra logica

console.log(userName); // Esta parte no podemos acceder a esta variable, porque
// esta variable tiene el alcance solamente dentro de la función y puede ser transmitida
// en toda la logica anidada en if y ser declarado, pero si yo quisiera que fuera por afuera
// no es posible

// Aqui se puede ver que el alcance
