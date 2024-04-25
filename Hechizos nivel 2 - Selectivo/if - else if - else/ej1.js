const leer = require("prompt-sync")();
const USUARIO_CLIENTE ="cliente";

/**
 * Ej 1 
 * Compra de Varitas Mágicas:
 * Solicita al cliente su edad y determina si es lo suficientemente mayor como para comprar una varita mágica.
 * La edad minima para comprar una varita es a partir de los 11 años
 * 
 * Por ejemplo si el cliente tiene 14 años si puede comprar, en otro caso si tuviera 9 entonces no
 */


function main() {
    let edadMinima =11;
    let edadCliente =0;
    console.log("edad de",USUARIO_CLIENTE);
    edadCliente = Number(leer()); 


    if (edadCliente > edadMinima)
    console.log("compra la varita magica");
    else if (edadCliente < edadMinima)
    console.log("no puedes comprar la varita magica");

}


main();