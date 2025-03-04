let numeroUno='50';
let numeroDos='10';   
let resultado;
// Concayena de dos numeros
resultado = numeroUno + numeroDos;
console.log("===================================");
console.log(resultado);
console.log("===================================");
// Suma de dos numeros
numeroUno=50;
numeroDos=10;    

resultado = numeroUno + numeroDos;
console.log("===================================");
 console.log(resultado);
 console.log("===================================");

resultado = numeroUno - numeroDos;
console.log(resultado);
console.log("===================================");


resultado = numeroUno * numeroDos;
console.log(resultado);
console.log("===================================");
resultado = numeroUno / numeroDos;
console.log(resultado);
console.log("===================================");

// crear una calculadora que sume, reste, multiplique y divida dos numeros
// los numeros pueden ser ingresados por el usuario 

alert('Calculadora');

//creamos una variable que guarda datos del usuario

let datoUsuarioUno = prompt('Ingrese el primer numero');

console.log('El valor del datoUsuarioUno es '+ datoUsuarioUno);

let datoUsuarioDos = prompt('Ingrese el Segundo numero');

console.log('El valor del datoUsuarioDos es '+ datoUsuarioDos);

//usamos una funcion predefinida para convertir el dato de string a numero
resultado = parseInt(datoUsuarioUno) + parseInt(datoUsuarioDos);
alert('El resultado de la Suma es: ' + resultado);

resultado = parseInt(datoUsuarioUno) - parseInt(datoUsuarioDos);
alert('El resultado de la Resta es: ' + resultado);

resultado = parseInt(datoUsuarioUno) * parseInt(datoUsuarioDos);
alert('El resultado de la Multiplicacion es: ' +resultado);

resultado = parseInt(datoUsuarioUno) / parseInt(datoUsuarioDos);
alert('El resultado de la Division es: ' +resultado);

let sorteo = Math.random();

sorteo = sorteo * 10;
console.log(sorteo);

sorteo=Math.round(sorteo);
console.log(sorteo);


sorteo = sorteo * 100;
sorteo=Math.round(sorteo); 
console.log(sorteo);


