"use strict";
// Tipos de datos en typeScript
// Tipos de datos 
/*
    En TypeScript tenemos 3 tipos de datos que son:
    1- Primitivos
    2- Compuestos
    3- Definidos por el usuario
*/
// Datos primitivos:
/*
    1- string
    2- number
    3- booleanos
    4- undefined
    5- null
*/
// Compuestos 
/*
    Los datos compuestos son:
    1- objetos
    2- arrays
    3- enum
    4- function
*/
// Definidos por los usuarios:
/*
    Los datos definidos por los usuarios son:
    1- class
    2- interface
    3- type
*/
// ¿ Porque se le se les llama definidos por el usuario ?
/*
    Se les dice datos definidos por los usuarios ya que esta ligado al tipo de datos que vamos a
    utilizar segun el proyecto que estemos realizando.
*/
// Datos primitivos
let nombre = 'Miguel';
let numero = 32;
let booleano = true;
let noDefinido = undefined;
let nulo = null;
// ¿ Como se define una variable con constante en TypeScript ?
/*
    Las variables y contantes de definen asi:
    1- Definimos con  let o const
    2- Nombre de la variable o constante
    3- Tipo de dato
    4- El signo igual =
    5- Valor de la variable o constante
*/
console.log(nombre, numero, booleano, noDefinido, nulo);
// datos compuestos
const programador = {
    nombre: 'Miguel',
    casado: false,
    carrera: 'Tecnicatura universitaria en programación',
    cursos: [
        'HTML', 'JavaScript', 'React.js'
    ],
    paisInmigrar: undefined,
    otraProfesion: null
};
// ¿ Porque no tiene tipado ?
/*
    En los objetos literales no se asignan tipados ya que paara ellos necesitariamos crear una interface.
*/
console.log(programador);
// Arrays en TypeScript
// En caso de un array de string
const arrayString = ['Miguel', 'Luciana'];
// En caso de un array de number
const arrayNumber = [1, 2, 3,];
// En caso de un array de booleano
const arrayBooleanos = [true, false];
console.log(arrayBooleanos, arrayNumber, arrayString);
// Enum o enumerados
// Enum con dias de la semana
var semana;
(function (semana) {
    semana[semana["lunes"] = 0] = "lunes";
    semana[semana["martes"] = 1] = "martes";
    semana[semana["miercoles"] = 2] = "miercoles";
    semana[semana["jueves"] = 3] = "jueves";
    semana[semana["viernes"] = 4] = "viernes";
    semana[semana["sabados"] = 5] = "sabados";
    semana[semana["domingos"] = 6] = "domingos";
})(semana || (semana = {}));
// Enum con string
var colores;
(function (colores) {
    colores["rolo"] = "rojo";
    colores["verde"] = "verde";
})(colores || (colores = {}));
console.log(semana, colores);
// Funciones
// Declaración de función con tipado explícito
function sumar(a, b) {
    return a + b;
}
// Función flecha con retorno implícito (inferido por TypeScript)
const dividir = (a, b) => a / b;
// Función con parámetros opcionales
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
}
// Función con parámetros por defecto
function saludar2(nombre, edad = 32) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
}
console.log(sumar(2, 3), dividir(12, 4), saludar('Miguel'), saludar2('Ana'));
// class o clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludando() {
        console.log(`Hola, mi nombre es ${this.nombre}`); // Usar this para acceder a la propiedad
    }
}
const persona = new Persona('Miguel');
persona.saludando();
console.log(Persona);
