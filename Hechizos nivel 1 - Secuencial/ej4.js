const leer = require("prompt-sync")();
const EDAD_MAGO ="mago";
const DIAS_PRACTICA ="dias de practica del hechizo patronus";

/**
 * Ej 4 
 * Cálculo del Hechizo Patronus:
 * Solicita al usuario la edad del mago y la cantidad de días de práctica del hechizo Patronus, luego calcula la potencia del hechizo. La potencia se obtiene duplicando la edad sumado a la mitad de todos los días de practica realizados para dominar el Patronus
 * 
 * Por ejemplo si la edad es 25 y los días de practica son 158 entonces su potencia con el hechizo patronus es de 129
 */


function main() {
    let edadMago ="0";
    let diasPractica ="0";
    console.log("edad de ",EDAD_MAGO);
    edadMago = Number(leer());
    console.log("cantidad de",DIAS_PRACTICA);
    diasPractica = Number(leer());
console.log((edadMago*2)+(diasPractica/2));
}


main();