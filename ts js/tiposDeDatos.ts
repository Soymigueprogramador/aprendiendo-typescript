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

let nombre: string = 'Miguel'
let numero: number = 32
let booleano: boolean = true
let noDefinido: undefined = undefined
let nulo: null = null

// ¿ Como se define una variable con constante en TypeScript ?
/*
    Las variables y contantes de definen asi:
    1- Definimos con  let o const
    2- Nombre de la variable o constante 
    3- Tipo de dato 
    4- El signo igual = 
    5- Valor de la variable o constante
*/

console.log(nombre, numero, booleano, noDefinido, nulo)

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

console.log(programador)

// Arrays en TypeScript

// En caso de un array de string
const arrayString : string[] = ['Miguel', 'Luciana']

// En caso de un array de number
const arrayNumber: number[] = [1, 2, 3,]

// En caso de un array de booleano
const arrayBooleanos: boolean[] = [true, false]

console.log(arrayBooleanos, arrayNumber, arrayString)

// Enum o enumerados

// Enum con dias de la semana
enum semana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabados,
    domingos
}

// Enum con string
enum colores {
    rolo = 'rojo',
    verde = 'verde'
}

console.log(semana, colores)

// Funciones

// Declaración de función con tipado explícito
function sumar(a: number, b: number): number {
    return a + b;
}

// Función flecha con retorno implícito (inferido por TypeScript)
const dividir = (a: number, b: number): number => a / b;

// Función con parámetros opcionales
function saludar(nombre: string, edad?: number): string {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    } else {
        return `Hola, mi nombre es ${nombre}`; 
    }
}

// Función con parámetros por defecto
function saludar2(nombre: string, edad: number = 32): string {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
}

console.log(sumar(2, 3), dividir(12, 4), saludar('Miguel'), saludar2('Ana'));

// class o clases
class Persona {
    nombre: string; 

    constructor(nombre: string) {
        this.nombre = nombre; 
    } 

    saludando() {
        console.log(`Hola, mi nombre es ${this.nombre}`); // Usar this para acceder a la propiedad
    }
}

const persona = new Persona('Miguel'); 
persona.saludando(); 

console.log(Persona); 

// Interface 

// Interface basica
interface persona {
    nombre: string,
    edad: number
}

// Interface con propiedades opcionales
interface producto {
    nombre: string,
    edad: number,
    descripcion?: string
}

// Interface para funciones
interface comparador {
    (a: number, b: number): boolean
}

// Interface para clases (class interfaces)
interface persona {
    nombre: string,
    edad: number,
    saludar(): void;
}

// Types

// Tipo basico
type Numeros = number; 

// Tipo basico objeto literal
type Personas = {
    nombre: string;
    edad: number; 
}

// type con union types
type Nombres = 'Miguel' | 'Ana';

type Personass = {
    nombre: string;
    edad: number;
    descripcion?: string;  
} 

// type para funciones
type comparador1 = {
    (a: number, b: number): boolean
}

// para clases (class types)
type Persona2 = {
    nombre: string;
    edad: number;
    saludarse(): void
}