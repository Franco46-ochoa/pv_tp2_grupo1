/* TP02 - Ejercicio05 */
/* Declarar dos variables denominadas horas, minutos, asignar valores a cada una y realizar la conversión para expresar
esas horas y minutos en segundos. Mostrar por consola las horas y minutos, luego el resultado de la conversión en segundos. */

let horas = 2;
let minutos = 30;
const segundos = (horas, minutos) => horas * 3600 + minutos * 60;
console.log('Las horas son ' + horas + ' y los minutos son ' + minutos);
console.log('La conversión es ' + segundos(horas, minutos) + ' segundos');
