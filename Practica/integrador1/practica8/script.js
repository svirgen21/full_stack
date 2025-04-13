document.addEventListener("DOMContentLoaded", function () {
    // Menú Hamburguesa
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show");

            // Asegurar que el menú se muestre correctamente
            if (menu.classList.contains("show")) {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none";
            }
        });
    }


    // Validación del formulario en alta.html
    const formAlta = document.getElementById("formAlta");
    if (formAlta) {
        formAlta.addEventListener("submit", function (event) {
            let nombre = document.getElementById("nombre").value.trim();
            let precio = document.getElementById("precio").value.trim();
            let descripcion = document.getElementById("descripcion").value.trim();

            if (nombre === "" || precio === "" || descripcion === "") {
                alert("Todos los campos son obligatorios.");
                event.preventDefault();
                return;
            }

            if (isNaN(precio) || precio <= 0) {
                alert("El precio debe ser un número válido mayor que 0.");
                event.preventDefault();
                return;
            }

            alert("Servicio agregado correctamente.");
        });
    }

    // Validación del formulario en contacto.html
    const formContacto = document.getElementById("formContacto");
    if (formContacto) {
        formContacto.addEventListener("submit", function (event) {
            let nombre = document.getElementById("nombre").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nombre === "" || email === "" || mensaje === "") {
                alert("Todos los campos son obligatorios.");
                event.preventDefault();
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Ingrese un correo electrónico válido.");
                event.preventDefault();
                return;
            }

            alert("Mensaje enviado correctamente.");
        });
    }
});
