let boleto;
let edad;
let destino;    

edad = prompt("Cual es su edad?");

edad = parseInt(edad);

if (edad < 18) {
    alert("traer autorizacion de los padres");
} else{
    destino = prompt("elija el destino de su viaje"); 
}
//boleto = prompt("Desea comprar un boleto para viajar?");
console.log(destino);

if(destino === 'espana'){
    window.location.href = "./espana.html"; //paginas de la app
   
}else{
     //window.open("https://www.us.despegar.com/", "_blank",); // pagina externas
}
