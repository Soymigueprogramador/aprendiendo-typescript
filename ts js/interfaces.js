"use strict";
// Intergaces
let programadorr = {
    nombre: 'Miguel',
    tecnologias: [
        'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript',
    ],
    tomaMatecocido: true
};
function enviarCV(programadorr) {
    console.log(`Este CV es de ${programadorr.nombre}`);
}
enviarCV(programadorr);
console.log(programadorr);
