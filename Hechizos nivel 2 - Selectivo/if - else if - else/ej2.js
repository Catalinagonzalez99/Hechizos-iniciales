const leer = require("prompt-sync")();
const NOTA_EXAMEN ="examen";
/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o si sacara 30 entonces pertenece a Slytherin
 */


function main() {
    let casaGryffindor = 90;
    let casaHufflepuff = 70;
    let casaRavenclaw = 50;
    let casaSlytherin = -(50);
    console.log("cual es tu puntuacion del",NOTA_EXAMEN);
    notaExamen = Number(leer());
    
    if (NOTA_EXAMEN > 70)
    console.log("pertenece a Gryffindor");
    else if (NOTA_EXAMEN < 50)
    console.log("pertenece a Slytherin");

}


main();