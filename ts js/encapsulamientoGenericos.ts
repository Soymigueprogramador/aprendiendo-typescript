// Encapsulamiento y genericos

// ¿ Como crear un encapsulamiento en TypeScript ?
/*
    Para crear un encapsulamiento en TypeScript hacemos esto: 
    1- Definimos la clase con la palabra reservada ' class '
    2- Escribimos elnombre de la clase con la primer letra en mayuscula
    3- Abrimos llaves {} ( aca no es necesario el signo igual = )
    4- Utilizamos ' set y get ' para configurar valores que viene por fuera de la clase
*/

class Sorteo <T> {
    private numero?: T;

    constructor( private nombre: string ) {}

    // Configuramos el valor que viene desde afuera de la clase
    setNumero( numero: T ) {
        this.numero= numero;
    }

    // Recibimos el valor que viene desde afuera de la clase
    getNumero() {
        return this.numero;
    }

    public sortear(): string {
        return `Para ${this.nombre} el ticket es el: ${this.numero}`;
    }
}

let sorteo = new Sorteo<string>('Miguel')

sorteo.setNumero('A12')

console.log(sorteo.sortear())

// Generico:
/*
    Sive para que la clase pueda tener un tipo de dato que cumpla con la necesidad de esa instanciacion de la clase.
*/