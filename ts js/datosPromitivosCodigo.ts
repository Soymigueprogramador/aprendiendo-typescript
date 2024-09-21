console.log('Datos primitivos en codigo')

function sumando(a: number, b: number): number {
    return a + b;
}
let resultado = sumando(5, 3);
console.log(resultado)

class Usuarios {
    nombre: string
    constructor(nombre: string){
        this.nombre = nombre;
    }
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
};

const Usuario1 = new Usuarios('Miguel');
const Usuario2 = new Usuarios('Luciana');

console.log(Usuario1, Usuario2)