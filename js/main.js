console.log("hola")

const encuesta = document.querySelector(".encuesta");
const post = document.querySelector(".post");
const botonEnviar = document.getElementById("enviar");
const puntajes = document.querySelectorAll(".btn");
const puntajeSeleccionado = document.getElementById("puntajeSeleccionado");

botonEnviar.addEventListener("click", () => {
    encuesta.style.display = "none";
    post.classList.remove("hidden");

});


puntajes.forEach((puntaje) => {
    puntaje.addEventListener("click", () => {
        puntajeSeleccionado.innerHTML = puntaje.innerHTML;
    });
});
