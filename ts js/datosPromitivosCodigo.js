"use strict";
// Datos primitivos en código
// Ejemplo con booleano.
let estudiasteJavaScript = false;
if (estudiasteJavaScript) {
    console.log('Podés seguir con TypeScript');
}
else {
    console.log('Tenés que ver JavaScript antes de TypeScript');
}
// Ejemplo con number.
let boca = 11;
let riBer = 12;
function jugar(equipo1, equipo2) {
    if (equipo1 < equipo2) {
        console.log('Gana boquita papa!!');
    }
    else if (equipo1 === equipo2) {
        console.log('Empate');
    }
    else {
        console.log('Gana riBer, martinez renuncia!!');
    }
}
jugar(boca, riBer);
// ¿Qué es void?
/*
    En TypeScript, cuando tenemos una función que no va a devolver nada,
    se usa void (vacío).
    Se puede no poner nada, pero es buena práctica
    especificar void.
*/ 
