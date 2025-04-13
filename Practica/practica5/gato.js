//practica 5

//ejercicio 1
console.log("Ejercicio 1")
let cantidadgatos = 10;
let gatos = ['😺', '😸', '😹'];

for (let i = 1; i <= cantidadgatos; i++) {
     console.log(`gato # ${i}: ${gatos[(i - 1) % 3]}`);
    }


    console.log('=====================================================')

    //Ejercicio 2
    console.log("Ejercicio 2")
let cantidadDeGatos = 5;
let cantidadDePasos = 3;

for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: 🐈 ${"🐾".repeat(cantidadDePasos)}`);
}

    console.log('=====================================================')


    //Ejercicio 3
    console.log("Ejercicio 3")    
let gatosAlternados = ["🐈", "gato negro"];// no se porque no reconoce el gato negro 🐈‍⬛
for (let i = 1; i <= cantidadDeGatos; i++) {
    console.log(`Gato #${i}: ${gatosAlternados[i % 2]} ${"🐾".repeat(cantidadDePasos)}`);
}