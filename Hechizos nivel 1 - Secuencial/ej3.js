const leer = require("prompt-sync")();
const PESO_NIMBUS ="nimbus 2000";
const PLUMAS_NIMBUS ="plumas de fenix";
const PESO_PLUMA = 0.1; 
/**
 * Ej 3 
 * Cálculo del Peso de la Nimbus 2000
 * Preguntale a Harry el peso base de la Nimbus 2000 en kg y la cantidad de plumas de fénix utilizadas para su fabricación, luego calcula el peso total de la escoba considerando que cada pluma añade 0.1 kg
 * 
 * Por ejemplo si la cantidad de plumas usadas son 350 y el peso base es de 1.5kg entonces el total es de 36.5kg
 */


function main() {
    console.log("cual es el peso de ",PESO_NIMBUS);
    pesoNimbus = Number(leer());
    console.log("cantidad de ",PLUMAS_NIMBUS);
    plumasNimbus = Number(leer());
    console.log(pesoNimbus + plumasNimbus *PESO_PLUMA );
    


}


main();