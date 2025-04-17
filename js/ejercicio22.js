// Ejercicio 22
const input = document.getElementById('textoIngre');
const output = document.getElementById('textoMostra');

input.addEventListener('input', () => {
  const texto = input.value;
  output.textContent = texto;

  if (texto.length > 20) {
    output.classList.add('largo');
  } else {
    output.classList.remove('largo');
  }
});
