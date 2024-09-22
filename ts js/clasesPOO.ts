// Clases y POO ( Programacion Orientada a Objetos )

// ¿ Como crear clases en TypeScript ?
/*
    Para crear clases en TypeScript hacemos esto:
    1- Definimos la clase con la palabra reservada ' class '
    2- Escribimos el nombre de la clase con el primer letra en mayuscula
    3- Abrimos llaves{} ( aca no es necesario usar el signo = )
    4- Dentro de las llaves ponemos las claves y valores que va a tener y le agregamos el ? para que no muestre errores
       por no haberlo inicializado desde el principio.
*/

class Pelicula {
    nombre?: string; 
    elenco?: string[];
    protagonistas?: string[];
    proyectadaEnCines() {
        console.log(`${this.nombre} se esta proyectada en cines`);
    }
    constructor( nombre: string, elenco: string[], protagonistas: string[] ) {
        this.nombre = nombre;
        this.elenco = elenco;
        this.protagonistas = protagonistas;
    }
}

const pelicula1 = new Pelicula('Terminator', ['Miguel', 'Evelin', 'Luciana'], ['Miguel', 'Evelin'])
const pelicula2 = new Pelicula('Grupo comando', ['Miguel', 'Evelin', 'Luciana'], ['Miguel', 'Evelin'])

console.log(pelicula1, pelicula2)