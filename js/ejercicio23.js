function mostrar(lenguaje) {
    let texto = "";
  
    if (lenguaje === "C++") {
      texto = "C++ es un lenguaje orientado a objetos creado en 1979.";
    } else if (lenguaje === "Python") {
      texto = "Python es un lenguaje fácil de leer.";
    } else if (lenguaje === "Java") {
      texto = "Java es un lenguaje multiplataforma.";
    }
  
    document.getElementById("resultado").innerHTML = "<p>" + texto + "</p>";
    console.log("Seleccionaste: " + lenguaje);
  }
  