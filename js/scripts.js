
document.addEventListener("DOMContentLoaded", function () {
    const botonModo = document.getElementById("boton-modo");

    if (botonModo) {
        const modoGuardado = localStorage.getItem("modo");

        if (modoGuardado === "oscuro") {
            document.body.classList.add("modo-oscuro");
            botonModo.textContent = "☀️";
        }

        botonModo.addEventListener("click", function () {
            document.body.classList.toggle("modo-oscuro");
            const esOscuro = document.body.classList.contains("modo-oscuro");

            botonModo.textContent = esOscuro ? "☀️" : "🌙";
            localStorage.setItem("modo", esOscuro ? "oscuro" : "claro");
        });
    }

    const form = document.getElementById("form-contacto");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const comentarios = document.getElementById("comentarios").value.trim();

            const errorNombre = document.getElementById("error-nombre");
            const errorEmail = document.getElementById("error-email");
            const errorComentarios = document.getElementById("error-comentarios");

            errorNombre.textContent = "";
            errorEmail.textContent = "";
            errorComentarios.textContent = "";

            let hayErrores = false;

            if (nombre === "") {
                errorNombre.textContent = "El nombre es obligatorio.";
                hayErrores = true;
            }else if (/\d/.test(nombre)) {
                errorNombre.textContent = "El nombre no puede contener números.";
                hayErrores = true;
            }

            if (email === "") {
                errorEmail.textContent = "El email es obligatorio.";
                hayErrores = true;
            } else if (!email.includes("@") || !email.includes(".")) {
                errorEmail.textContent = "Ingresá un email válido.";
                hayErrores = true;
            }

            if (comentarios === "") {
                errorComentarios.textContent = "Por favor, escribí un comentario.";
                hayErrores = true;
            }

    

            if (!hayErrores) {
                alert("Mensaje enviado correctamente.");
                form.reset();
            }
        });
    }
});
