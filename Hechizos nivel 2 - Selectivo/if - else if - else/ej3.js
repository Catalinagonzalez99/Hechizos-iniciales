const leer = require("prompt-sync")();
const NOMBRE_PLANTA = "planta";
const PLANTA_VALIDA_1 = "mandragora";
const PLANTA_VALIDA_2 = "valeriana";
const PLANTA_NO_VALIDA_1 = "bubotear";
const PLANTA_NO_VALIDA_2 = "whomping willow";

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen, en otro caso si trae una Valeriana se le otorgara el permiso
 */


function main() {
  
    console.log("cual es el nombre de la", NOMBRE_PLANTA);
    nombrePlanta = leer();


    if (nombrePlanta == PLANTA_VALIDA_1 || nombrePlanta == PLANTA_VALIDA_2) {
        console.log("permiso para hacer el examen")
    }
        else if ( nombrePlanta == PLANTA_NO_VALIDA_1|| nombrePlanta == PLANTA_NO_VALIDA_2) {
        console.log("no se le otorga el permiso del examen ");
    }


}


main();