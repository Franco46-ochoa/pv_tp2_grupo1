function transcribir() {
    const input = document.getElementById("text").value;
    const mensaje = document.getElementById("mensaje");

    if (input == '') {
        mensaje.innerText = "El campo está vacío";
    } else {
        mensaje.innerText = input;
    }
}

document.getElementById("text").addEventListener("input", transcribir);
