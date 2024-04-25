const leer = require("prompt-sync")();
const NUMERO_ESCARABAJOS="escarabajos de ojo de tigre";
const NUMERO_RAICES="raices de mandragora"; 
/**
 * Ej 1 
 * Cálculo de Pociones
 * Solicita la cantidad de escarabajos de ojo de tigre y el número de raíces de mandrágora necesarios para hacer una poción, y luego calcula la cantidad total de ingredientes necesarios
 * 
 * Por ejemplo si es necesario 8 raíces de mandrágora y 5 escarabajos de ojo de tigre para hacer la poción entonces el total de ingredientes es 13
 */


function main() {
    let numeroEscarabajos ="0";
    let numeroRaices ="0";
    console.log("cantidad de ",NUMERO_ESCARABAJOS);
    numeroEscarabajos = Number(leer());
    console.log("cantidad de ",NUMERO_RAICES);
    numeroRaices = Number(leer());
    console.log(numeroEscarabajos+numeroRaices);


}


main();