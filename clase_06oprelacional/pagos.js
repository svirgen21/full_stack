
let saldo;
let monto;
let cantidadCompras = 0;
let totalCompras = 0;

saldo = 10000; // cuenta bancaria

pagoCarrito = 1500;
 // pago de la compra

 if(saldo >= pagoCarrito ){
    console.log("Aprobado");
    saldo= saldo - pagoCarrito;
    console.log('saldo actual: ' + saldo)
    //cantidadCompras = cantidadCompras + 1; // contador de compras
    totalCompras = pagoCarrito;
    console.log('Total de compras :' + totalCompras);
    cantidadCompras += 1; // operador de incremento

    console.log ("cantidad de productos: " + cantidadCompras);



    //descontar el saldo del pago


 }else {
 console.log("saldo insuficiente");
 console.log("tu saldo actual :" + saldo);

 }