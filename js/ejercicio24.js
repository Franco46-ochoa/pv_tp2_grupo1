const button = document.getElementById("colorButton");

// Lista de colores posibles
const colors = ["#709c72", "#9c9470", "#708a9c", "#8c709c", "#9c7082", "#9c7070", "#709c7b"];

button.addEventListener("click", () => {
  // Seleccionar color aleatorio
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Cambiar el fondo del body
  document.body.style.backgroundColor = randomColor;

  // Mostrar mensaje en la consola
  console.log("Color de fondo cambiado a:", randomColor);
});
