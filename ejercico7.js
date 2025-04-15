let nombres = ["Ana", "Marcos", "Valentina", "Luis", "Carmen", "José"];

let maslargo = nombres[0];

for (let i = 1; i < nombres.length; i++) {
  if (nombres[i].length > maslargo.length) {
    maslargo = nombres[i];
  }
}

console.log("El nombre más largo es:", maslargo);
