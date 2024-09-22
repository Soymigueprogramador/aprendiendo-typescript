// Datos primitivos en código

// Ejemplo con booleano.
let estudiasteJavaScript: boolean = false;

if (estudiasteJavaScript) {
    console.log('Podés seguir con TypeScript');
} else {
    console.log('Tenés que ver JavaScript antes de TypeScript');
}

// Ejemplo con number.
let boca: number = 11;
let riBer: number = 12;

function jugar(equipo1: number, equipo2: number, ): void {
    if (equipo1 < equipo2) {
        console.log('Gana boquita papa!!');
    } else if (equipo1 === equipo2) {
        console.log('Empate');
    } else {
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