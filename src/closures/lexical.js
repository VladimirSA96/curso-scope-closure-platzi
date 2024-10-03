const myGlobal = 0;

function myFunction() {
  // La accesibilidad (acceder) que vamos a tener a las variables y como llamarlas
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();
