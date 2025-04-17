// Paises y capitales
const paisCapi = {
    "Argentina":"Buenos Aires",
    "Mexico":"Ciudad de Mexico",
    "Brasil":"Brasilia",
    "Colombia":"Bogota",
    "Chile":"Santiago",
    "Peru":"Lima"
  };
  
  // Función para elformulario
  function inicializarSelects() {
    const paisSelect = document.getElementById('pais');
    const capitalSelect = document.getElementById('capital');

    for (const pais in paisCapi) {
      const option = document.createElement('option');
      option.value = pais;
      option.textContent = pais;
      paisSelect.appendChild(option);
    }
  
    // Evento
    paisSelect.addEventListener('change', () => {
      const paisSelecct2 = paisSelect.value;
      capitalSelect.innerHTML = '';
  
      if (paisSelecct2) {
        const capital = paisCapi[paisSelecct2];
        const option = document.createElement('option');
        option.value = capital;
        option.textContent = capital;
        capitalSelect.appendChild(option);
        capitalSelect.disabled = false;
  
        console.log("Pais: " + paisSelecct2);
        console.log("Capital que le corresponde: " + capital);
      } else {
        capitalSelect.disabled = true;
        const defaultOption = document.createElement('option');
        defaultOption.textContent = 'Capital';
        capitalSelect.appendChild(defaultOption);
      }
    });
  }
  inicializarSelects();
  