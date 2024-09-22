"use strict";
// Tipos personalizados
// Ejemplo anteior
let programadorFrontend = {
    nombre: 'Miguel',
    tecnologias: [
        'HTML', 'CSS', 'JavaScript', 'React.js', 'TypeScript',
    ],
    tomaMatecocido: true
};
console.log(programadorFrontend);
console.log(programadorFrontend.tecnologias);
// Aclaraciones:
/*
    1- Siempre que vamos a definir un type, interface o class en TypeScript debemos iniciar con una mayuscula.
    2- Los types se pueden usar para muchas cosas pero una de ellas es para tipar objetos.
    3- En caso de que no sabemos lo que nos va a mandar el backend en alguna de las propiedades podemos poner esto
       ' tomaMatecocido?: boolean ' o ' tomaMatecocido: boolean | null ', el ? significa que no es obligatorio mandar ese type
       y el | significa que es uno o el otro type.
    
*/ 
