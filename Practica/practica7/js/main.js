document.addEventListener("DOMContentLoaded", () => {
    console.log("Contenido del DOM cargado");

    const textarea = document.getElementById("origen");
    const destino = document.getElementById("destino");

    // Asignar el contenido al textarea al inicio
    textarea.value = "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

    // Habilitar todos los botones cuando el usuario edita el textarea
    textarea.addEventListener("input", () => {
        const inputs = document.getElementsByTagName("input");
        const buttons = document.getElementsByTagName("button");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    });

    // Botón "Reemplazar"
    const btnReemplazar = document.getElementById("btn-reemplazar");
    btnReemplazar.addEventListener("click", () => {
        destino.innerHTML = textarea.value;
    });

    // Obtener los botones por texto (según orden visual en HTML)
    const btns = document.getElementsByClassName("btn-agregar");
    
    // "Agregar"
    btns[0].addEventListener("click", () => {
        destino.innerHTML += textarea.value;
    });

    // "Agregar 5 veces"
    btns[1].addEventListener("click", () => {
        destino.innerHTML += textarea.value.repeat(5);
    });

    // "Agregar 10 veces"
    btns[2].addEventListener("click", () => {
        destino.innerHTML += textarea.value.repeat(10);
    });

    // "Agregar n veces"
    btns[3].addEventListener("click", () => {
        const n = parseInt(prompt("¿Cuántas veces deseas agregar el contenido?"));
        if (!isNaN(n) && n > 0) {
            destino.innerHTML += textarea.value.repeat(n);
        } else {
            alert("Ingresa un número válido mayor que 0.");
        }
    });

    // Botón "Vaciar"
    const btnVaciar = document.querySelector(".btn-vaciar");
    btnVaciar.addEventListener("click", () => {
        destino.innerHTML = "";
    });

    // Botón "Convertir a mayúsculas"
    const btnMayus = document.querySelector(".btn-convertir-a-mayusculas");
    btnMayus.addEventListener("click", () => {
        destino.innerText = destino.innerText.toUpperCase();
    });

    // Botón "Convertir a minúsculas"
    const btnMinus = document.querySelector("button");
    btnMinus.addEventListener("click", () => {
        destino.innerText = destino.innerText.toLowerCase();
    });

    // Agregar "[Ok] " al inicio de cada <li>
    const lis = document.getElementsByTagName("li");
    for (let i = 0; i < lis.length; i++) {
        lis[i].innerHTML = "[Ok] " + lis[i].innerHTML;
    }
});
