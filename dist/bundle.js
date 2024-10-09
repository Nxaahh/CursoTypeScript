/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
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
var nombre = "Noah"; //Variable global
let apellido = "Montaño"; //Variable local
const PI = 3.14159; //Constante
let a = "Prueba", b = "a", c = 4;
console.log(a);
//Concatenacion de texto
console.log("Hola " + nombre + " " + apellido);
console.log("Hola", nombre, apellido);
console.log(`Hola ${nombre} ${apellido} `);
//Array
let alumnos1A = ["Juan", "Jose", "Alex"];
let alumnos2A = ["Fran"];
let alumnos = [...alumnos1A, ...alumnos2A, "Pablo"];
let valores = ["Hola", true, 2];
console.log(alumnos);
//OBJETOS
let misDatos = {
    nombre: "Noah",
    apellidos: "Montaño",
    edad: 18
};
let configuracion = {
    versionTS: "Es6",
    versionCodigo: "1.0"
};
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(`La propiedad 1 es ${propiedad1} y la dos ${propiedad2}`);
//Objetos Enumerados
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["EnProceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
let estadoPendiente = EstadoTarea.EnProceso;
console.log(estadoPendiente);
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Terminado };
console.log(tarea1);
let Empleado2;
Empleado2 = { nombre: "Miguel", edad: 18, sueldo: 2040, codigoID: 2 };
let Empleado1 = { nombre: "Manuel", edad: 18, sueldo: 1080 };
console.log(Empleado1);
console.log(Empleado2);
//Operador Ternario
//Condicion ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea  ${tarea1.nombre} se encuentra en Proceso` : `La tarea ${tarea1.nombre} se encuentra en ${tarea1.estado}`);
//if else
if (tarea1.estado == "P") {
    console.log("Pendiente");
}
else if (tarea1.estado == "E") {
    console.log("En proceso");
}
else {
    console.log("Termiando");
}
//Switch
switch (tarea1.estado) {
    case "P":
        console.log("Tarea Pendiente");
        break;
    case "E":
        console.log("Tarea En Ejecucion");
        break;
    case "T":
        console.log("Tarea Terminada");
        break;
    default:
        console.log("En otro proceso");
}
//Try Catch
try {
    //let numero1:number = null;
    // console.log(numero1.toString())
}
catch (error) {
    console.log("Se ha producido un error al convertir un numero en String");
}
//Video 2
//Video 3
//for
for (let x = 0; x < 10; x++) {
    console.log("Numero: " + x);
}
//foreach
let tarea2 = { estado: EstadoTarea.Terminado, nombre: "Tarea 2", prioridad: 0 };
let tarea3 = { estado: EstadoTarea.Terminado, nombre: "Tarea 3", prioridad: 3 };
let listaTareas = [tarea1, tarea2, tarea3];
//(valor1,valor2,valor3) => { }   FUNCION ARROW
//function operar (valor1:number,valor2:number,valor3:number){ }
listaTareas.forEach((elemento, indice, listaTareas) => { console.log(`${elemento.nombre} - ${indice} - ${listaTareas} `); });
for (let indice = 0; indice < listaTareas.length; indice++) {
    let elemento = listaTareas[indice];
    console.log(elemento);
}
//while
/*while(){

}

//do while

do{

}while()

*/
//functions
/**
 * Dado el parametro nombre muestra por pantalla un saludo
 * @param nombre
 */
function saludar(nombre = "Noah", direccion, apellido) {
    if (apellido != undefined) {
        console.log(`Hola ${nombre} ${apellido} Vives en la calle ${direccion} `);
    }
    else {
        console.log(`Hola ${nombre}`);
    }
    if (typeof (direccion) == "string") {
        console.log(`Vives en la calle ${direccion}`);
    }
}
saludar(undefined, "Martin");
saludar(undefined, "Moron", "Montaño");
//funciones anonimas
let fanonima = function () { console.log("Hola mundo"); };
console.log(fanonima);
let fitera = function (elemento, indice) {
    console.log(`La tarea ${elemento.nombre} esta en la posicion ${indice}`);
};
listaTareas.forEach(fitera);
//Funcion con multiples parametros
function muestraTareas(...tareas) {
    tareas.forEach(fitera);
}
console.log("muestra tareas");
let tarea4 = { estado: EstadoTarea.Terminado, nombre: "Tarea 4", prioridad: 0 };
let tarea5 = { estado: EstadoTarea.Terminado, nombre: "Tarea 5", prioridad: 3 };
muestraTareas(tarea1, tarea2, tarea3, tarea4, tarea5);
let listadoTareas2 = [...listaTareas, tarea4, tarea5];
console.log("muestratareas listado2");
muestraTareas(...listadoTareas2);
//funcion farrow
console.log("farrow");
let farrow = (tarea, indice) => {
    console.log(`${indice} - ${tarea.nombre}`);
};
farrow(tarea1, 1);
listadoTareas2.forEach(farrow);
listadoTareas2.forEach((tarea) => { console.log(`${tarea.nombre}`); });
listadoTareas2.forEach(function (tarea) { console.log(`${tarea.nombre}`); });
//CALLBACK
let fsuma = function suma(a, b) {
    return a + b;
};
let fresta = function resta(a, b) {
    return a - b;
};
function opera(x, y, funcion) {
    return funcion(x, y);
}
opera(1, 2, fsuma);
opera(1, 2, fresta);
/*
async function  getDataUniversity() : Promise<University[ ]> {
    const data = await fetch("http://universities.hipolabs.com/search?country=Spain");
    let respuesta:Promise<University[]> =await data.json() as Promise<University[]>
    return respuesta;
}
getDataUniversity().then((data:University[])=>{
    data.forEach((universidad)=>{console.log(universidad.name)})
    })
*/
//ASYNC GENERADORA
function* fgeneradora2() {
    yield "Hola";
    yield "Mundo";
    yield "IES";
}
let llamadafgen2 = fgeneradora2();
console.log(llamadafgen2.next());
console.log(llamadafgen2.next());
console.log(llamadafgen2.next());
console.log(llamadafgen2.next());
function obtenerDatosWeb() {
    return __asyncGenerator(this, arguments, function* obtenerDatosWeb_1() {
        let peticion = yield __await(fetch("https://haveibeenpwned.com/api/v2/breaches"));
        let datos = yield __await(peticion.json());
        for (let i = 0; i < datos.length; i++) {
            yield yield __await(datos[i]);
        }
    });
}
let datosWebPage = obtenerDatosWeb();
datosWebPage.next().then(({ value, done }) => { console.log(`${value.Name} -- ${value.Description} `); });
//SOBRECARGA DE FUNCIONES


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map