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


//OBJETOS

let misDatos={
    nombre: "Noah",
    apellidos: "Montaño",
    edad: 18
}

let configuracion={
    versionTS: "Es6",
    versionCodigo: "1.0"
}

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;

console.log(`La propiedad 1 es ${propiedad1} y la dos ${propiedad2}`)

//Objetos Enumerados

enum EstadoTarea {"Pendiente"= "P","EnProceso"="E", "Terminado"="T"}

let estadoPendiente = EstadoTarea.EnProceso;

console.log(estadoPendiente)


//Objeto Interface

interface Tarea{
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

let tarea1:Tarea ={nombre:"Tarea1",prioridad:2,estado:EstadoTarea.Terminado}

console.log(tarea1)



//Objeto Tipo

type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}
type Jefe = {
    codigoID:number,
}

let Empleado2:Empleado & Jefe;
Empleado2={nombre:"Miguel",edad:18,sueldo:2040,codigoID:2}
let Empleado1:Empleado = {nombre:"Manuel",edad:18,sueldo:1080};

console.log(Empleado1)

console.log(Empleado2)

//Operador Ternario
//Condicion ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea  ${tarea1.nombre} se encuentra en Proceso`: `La tarea ${tarea1.nombre} se encuentra en ${tarea1.estado}`);

//if else

if(tarea1.estado =="P"){
    console.log("Pendiente")

}else if(tarea1.estado == "E"){
    console.log("En proceso")
}else{
    console.log("Termiando")
}


//Switch

switch (tarea1.estado){
    case "P":
        console.log("Tarea Pendiente")
        break;
    case "E":
        console.log("Tarea En Ejecucion")
        break;
    case "T":
        console.log("Tarea Terminada")
        break;
    default:
        console.log("En otro proceso")
}

//Try Catch

try{
    let numero1:number = null;
    console.log(numero1.toString())
}catch(error){
console.log("Se ha producido un error al convertir un numero en String")
}