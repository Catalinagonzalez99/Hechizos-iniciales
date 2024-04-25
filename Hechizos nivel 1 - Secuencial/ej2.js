const leer = require("prompt-sync")();
const NUMERO_ESTUDIANTES="estudiantes";
const NUMERO_LIBROS="libros";

/**
 * Ej 2 
 * Clase de Encantamientos
 * Para saber el total de ingredientes necesarios en la clase de hoy tenemos que saber el numero de estudiantes y libros a usar 
 * Donde podemos saber el total triplicando la cantidad de varitas por estudiante y duplicando la cantidad de libros 
 * Los estudiante tiene que traer su propia varita, los que no traigan no podran practicar los encantamientos
 * 
 * Por ejemplo si hay 7 varitas y 4 libros a usar los ingredientes necesarios son 29
 */


function main() {
    let numeroEstudiantes ="0";
    let numeroLibros = "0";
    console.log("cantidad de ",NUMERO_ESTUDIANTES);
    numeroEstudiantes = Number(leer());
    console.log("cantidad de",NUMERO_LIBROS);
    numeroLibros = Number(leer());
    numTriplicado = numeroEstudiantes * 3;
    numDuplicado = numeroLibros * 2;
    console.log("total",(numeroEstudiantes*3+ numeroLibros*2));



    
}


main();