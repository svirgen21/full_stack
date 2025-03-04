
let documento;
let boleto; 
let edad;
let destino;

documento = prompt("Tiene pasaporte vencido");

 if (documento === "si"){
    alert("puede continuar con la compra del boleto para el viaje");
    //window.location.href = "https://www.despegar.com.ar/";

 }else{
    alert("Primero debe renovar su pasaporte y luego puede comprar el boleto");
    //window.location.href = "https://www.migraciones.gov.ar/";
 }