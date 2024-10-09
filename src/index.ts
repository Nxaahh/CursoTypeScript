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
    //let numero1:number = null;
   // console.log(numero1.toString())
}catch(error){
console.log("Se ha producido un error al convertir un numero en String")
}

//Video 2



//Video 3


//for

for(let x=0;x<10;x++){

    console.log("Numero: "+x)

}

//foreach


let tarea2 : Tarea = {estado: EstadoTarea.Terminado,nombre: "Tarea 2", prioridad: 0}
let tarea3 : Tarea = {estado: EstadoTarea.Terminado,nombre: "Tarea 3", prioridad: 3}

let listaTareas:Tarea[] = [tarea1,tarea2,tarea3]

//(valor1,valor2,valor3) => { }   FUNCION ARROW
//function operar (valor1:number,valor2:number,valor3:number){ }

listaTareas.forEach((elemento,indice,listaTareas)=>{console.log(`${elemento.nombre} - ${indice} - ${listaTareas} `)})

for(let indice =0;indice<listaTareas.length;indice++){
    let elemento = listaTareas[indice]
    console.log(elemento)
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
function saludar(nombre:string ="Noah",direccion: string | number, apellido?:string ): void{
    if(apellido != undefined){
        console.log(`Hola ${nombre} ${apellido} Vives en la calle ${direccion} `)
    }
    else{
        console.log(`Hola ${nombre}`);
    }
    if(typeof(direccion)== "string"){
        console.log(`Vives en la calle ${direccion}`)
    }

}
saludar(undefined,"Martin")
saludar(undefined,"Moron","Montaño")


//funciones anonimas

let fanonima = function (){console.log("Hola mundo")}
console.log(fanonima)



let fitera = function(elemento:Tarea,indice:number){
    console.log(`La tarea ${elemento.nombre} esta en la posicion ${indice}`)
}
listaTareas.forEach(fitera)


//Funcion con multiples parametros

function muestraTareas(... tareas:Tarea[]): void{

    tareas.forEach(fitera)

}
console.log("muestra tareas")
let tarea4 : Tarea = {estado: EstadoTarea.Terminado,nombre: "Tarea 4", prioridad: 0}
let tarea5 : Tarea = {estado: EstadoTarea.Terminado,nombre: "Tarea 5", prioridad: 3}
muestraTareas(tarea1,tarea2,tarea3,tarea4,tarea5)



let listadoTareas2:Tarea[]=[...listaTareas,tarea4,tarea5]
console.log("muestratareas listado2")
muestraTareas(...listadoTareas2)


//funcion farrow
console.log("farrow")
let farrow = (tarea:Tarea, indice:number)=>{
    console.log(`${indice} - ${tarea.nombre}`)
}
farrow(tarea1,1)
listadoTareas2.forEach(farrow)
listadoTareas2.forEach((tarea:Tarea)=>{console.log(`${tarea.nombre}`)})
listadoTareas2.forEach(function (tarea:Tarea){console.log(`${tarea.nombre}`) })



//CALLBACK

let fsuma = function suma(a:number,b:number){
    return a+b;
}
let fresta = function resta(a:number,b:number){
    return a-b;
}


function opera(x:number,y:number,funcion:(a:number,b:number)=>number){
    return funcion(x,y)
}
opera(1,2,fsuma);
opera(1,2,fresta);


//Asyncrona
/*
async function asincrona(){
    let suma:number =0;
    for(let i =0;i<10000000000;i++){
        suma+=i;
    }
    return suma;
}

asincrona().then((data:number)=>{console.log(`El resultado de ejecutar asyn = ${data}`)});
console.log("Linea posterior a la funcion asincrona")
*/
type University ={
    domains:string[],
    alpha_two_code:string,
    name:string

}

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

    function* fgeneradora2():Generator<string>{
        yield "Hola";
        yield "Mundo"
        yield "IES"
    }

    let llamadafgen2 =fgeneradora2();
    console.log(llamadafgen2.next());
    console.log(llamadafgen2.next());
    console.log(llamadafgen2.next());
    console.log(llamadafgen2.next())

    type WebPage={
        Name:string,
        Domain:string,
        Description:string

    }
/*
    async function* obtenerDatosWeb():AsyncGenerator<WebPage>{
        let peticion = await fetch("https://haveibeenpwned.com/api/v2/breaches");
        let datos: WebPage[] = await peticion.json() as WebPage[];

        for(let i=0;i<datos.length;i++){
            yield datos[i];
        }

    }
    let datosWebPage =obtenerDatosWeb();
        datosWebPage.next().then(({value,done})=>{console.log(`${value.Name} -- ${value.Description} `)});

*/
    //SOBRECARGA DE FUNCIONES
    function saludarSobrecarga (nombre:string):string;
    function saludarSobrecarga (nombre:string,apellido:string):string;
    function saludarSobrecarga (nombre:string,apellido:string,edad:string):string;

    function saludarSobrecarga(nombre:string,apellido?:string,edad?:string){
        let saludo = `Hola ${nombre} `

        if(apellido !=undefined){
            saludo = saludo+` ${apellido}`
        }
        if(edad != undefined){
            saludo = saludo+` ${edad}`
        }
        return saludo;
    }
    saludarSobrecarga("Manuel");
    saludarSobrecarga("Miguel","32")
    saludarSobrecarga("Miguel","Martinez","82")




    //Ejercicio 2
    function ej2(type:string ="SessionStorage", key:string, data:Tarea[]){
        if(type == "session"){
            sessionStorage.setItem(key,data.toString())
            console.log("Almacenado en sessionStorage")
        }else if(type == "local"){
            localStorage.setItem(key,data.toString())
            console.log("Almacenado en localstorage")
        }else{
            console.log("No se ha almacenado")
        }
    }

    //Ejercicio 3

    let tarea:Tarea ={nombre:"Tarea",prioridad:2,estado:EstadoTarea.Terminado}
    let tarea01:Tarea={nombre:"Tarea01",prioridad:3,estado:EstadoTarea.Pendiente}
    let tarea02:Tarea={nombre:"Tarea02",prioridad:1,estado:EstadoTarea.EnProceso}
    let arrayTareas:Tarea[]= [tarea,tarea01,tarea02]

    ej2("session","datos",arrayTareas)
    ej2("local","datos",arrayTareas)


    //Ejercicio 4
    function ej4(type:string="session",key:string){
        let valor;
        if(type=="session"){
           valor = sessionStorage.getItem(key);
        }else if(type=="local"){
            valor = localStorage.getItem(key)
        }
        for(let i = 0;i<arrayTareas.length;i++){
            console.log(`El valor es`+key[i])
        }
       
    }

    //Ejercicio 5

    ej4("local","datos")
    ej4("session","datos")

    //Ejercicio 6
    function ej6(type:string,key:string){
        if(type == "local"){
            console.log("LocalStoragge antes de borrar:" +localStorage.length)
            while(localStorage.length!=0){
             localStorage.removeItem(key)
            }
            console.log("Localstorage tras borrar: "+localStorage.length)

        }
        if(type=="session"){
            console.log("sessionstorage antes de borrar: "+sessionStorage.length)
            while(sessionStorage.length!=0){
             sessionStorage.removeItem(key)
            }
            console.log("sessionstorage tras borrar: "+sessionStorage.length)
        }
      

    }

    ej6("local","datos")
    ej6("session","datos")


    //Ejercicio 7
    import Cookies from "js-cookie";
    Cookies.set("nombre", "Noah", {expires:7,path:"/"});
    Cookies.set("apellido","Montaño",{expires:2});
    Cookies.set("email","nmonmun0411@iescarrillo.es",{expires:4});
    console.log(Cookies.get("nombre"));
    console.log(Cookies.get("apellido"));
    console.log(Cookies.get("email"));
    Cookies.remove("nombre");
    Cookies.remove("apellido");
    Cookies.remove("email");
    console.log(Cookies.get("nombre"));
    console.log(Cookies.get("apellido"));
    console.log(Cookies.get("email"));
