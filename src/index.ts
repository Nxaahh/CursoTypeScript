console.log("Hola Mundo");


/**
 * TIPOS DE DATOS
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null 
 * undefined
 * 
 */



var nombre:string = "Noah";//Variable global

let apellido:string = "Montaño";//Variable local

const PI:number = 3.14159;//Constante

let a:string="Prueba", b:string="a",c:number=4;

console.log(a)

//Concatenacion de texto

console.log("Hola "+ nombre +" "+ apellido);
console.log("Hola",nombre,apellido);
console.log(`Hola ${nombre} ${apellido} `);


//Array
let alumnos1A:string[]= ["Juan","Jose","Alex"];
let alumnos2A:string[]= ["Fran"];

let alumnos:string[]=[...alumnos1A,...alumnos2A,"Pablo"]

let valores: (String | number | boolean)[]=["Hola",true,2];

console.log(alumnos)
