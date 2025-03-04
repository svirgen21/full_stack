//login

let user;
let password;// mejor una longitud de 15 caracteres minimo


user = 'pepes';
password = '12345';
let authCel = true;

if (user =='pepe' && password === '1234' && authCel){
    console.log("Welcome Admin");

}else{

console.log("usuario o contrasena incorrecta");
}

console.log("========================================================")


if (user =='pepe' || password === '12345' && authCel){
    console.log("Welcome Admin");

}else{

console.log("usuario o contrasena incorrecta");
}