// Intergaces

// ¿ Como usar una interface en TypeScript ?
/*
    Los pasos para crear una interface en TypeScript son: 
    1- Definimos la interface con la palabra reservada 'interface'
    2- Escribimos el nombre de la interface usando la primer letra en mayuscula
    3- Abrimos llaves {} ( aca no tenemos que usar el signo = ) 
*/


interface Programadores {
    nombre: string,
    tecnologias: string[],
    tomaMatecocido: boolean
}

let programadorr: Programadores = {
    nombre: 'Miguel',
    tecnologias: [
        'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript',
    ],
    tomaMatecocido: true
};

function enviarCV( programadorr: Programador ) {
    console.log(`Este CV es de ${programadorr.nombre}`);
 
}

enviarCV(programadorr)
console.log(programadorr)