// ejercicio19.js

// Obtenemos los elementos
const inputNombre = document.querySelector("#nombre");
const inputApellido = document.querySelector("#apellido");
const inputLibreta = document.querySelector("#libreta");
const boton = document.querySelector("#mostrarDatos");

// Evento en el botón
boton.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();
  const apellido = inputApellido.value.trim();
  const libreta = inputLibreta.value.trim();

  alert(`Los datos ingresados son:\n Nombre: ${nombre} Apellido: ${apellido} Libreta Universitaria: ${libreta}`);
});
