const prompt = require("prompt-sync")();

//ES6..

//Se considera una práctica abandonada el declarar variables con el prefijo var
// var numero = 5;

//La forma correcta es con let para variables y const para constantes.
// let numero = 5;
// const nombre = "David";

//Esto generaría el típico error de Assignment to constant variable, ya que no podemos
//cambiar el valor de una constante.

// const nombre = "Maxi";

// nombre = "Pepe";

// console.log(nombre);

//FUNCIONES CLÁSICAS Y ES6 EN ADELANTE

// //Función clásica....
// function Restar(a,b){

//     return a - b;
// }

// //La misma función que antes pero ahora es de tipo flecha
// const Restar = (a,b) => {

//     return a - b;
// }

// //Incluso aún más reducida a de tipo inline
// const Restar = (a,b) => a-b;

// //Función inline pero que además si sólo recibe un parámetro se pueden omitir los paréntesis en los parámetros
// const Cuadrado = numero => numero*numero;

//////////////////////////////////////////////////
////////////OBJETOS DE JAVASCRIPT////////////////
/////////////////////////////////////////////////

// let maxi = {
//     nombre : "Maxi",
//     edad : 34,
//     ciudad : "Málaga",
//     hobbies : {
//         hobbie1: "Música",
//         hobbie2: "Magia",
//         hobbie3: "Viajar"
//     }

// }

// let arrayMaxi = ["Maxi", 32, "Málaga", ["Música", "Magia", "Viajar"]];

// console.log(maxi.hobbies.hobbie3);

// maxi.hobbies.hobbie3 = "Programación";

// console.log(maxi.hobbies.hobbie3);

//////////////////////////////////////////////////////////

//RETORNANDO OBJETOS EN FUNCIONES ES6 EN ADELANTE

/////////////////////////////////////////////////////////

// const Pokemon = monster => ({pokemonName : monster});

// let resultado = Pokemon("Pikachu")

// console.log(resultado);

// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"] crea una función que saque por
// consola la longitud del array. Crea otra función que obtenga un elemento aleatorio del array
// y lo saque por consola.

// let array = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// const mideArray = (arrayQueRecibe) => {

//     console.log(arrayQueRecibe.length);
// }

// const elementoRandom = (arrayQueRecibe) => {

//     const aleatorio = parseInt((Math.random() * (arrayQueRecibe.length - 1)));

//     console.log(arrayQueRecibe[aleatorio]);
// }

// mideArray(array);
// elementoRandom(array);

///////////////////////////////////////////////////////////

// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una función que
// los liste y los saque por consola.

// const arrayPlanetas = ["Mercurio","Venus","Tierra","Marte","Saturno","Jupiter","Urano"];

//SOLUCION MAP
// arrayPlanetas.map(
//     planeta => console.log(planeta)
// )

//SOLUCION FOREACH
// const mostrarPlanetas = array => {

//     array.forEach(element => {
//         console.log(element)
//     });
// }

// mostrarPlanetas(arrayPlanetas);

// 3. Dado el array javascript1 = ["DOM", "BOM", "Funciones", "Arrays"], elimina "DOM" del
// array. Añade en su lugar el elemento "Objetos". Elimina el elemento "Arrays". Añade en su
// lugar el elemento "ArraysDifíciles". Haz una copia del array que solo incluya los últimos dos
// elementos. Obtén el índice del elemento "Funciones".

// let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];

// javascript1.splice(0, 1, "Objetos");

// console.log(javascript1);

// // //Solución 1
// // javascript1.pop()
// // javascript1.push("ArraysDifíciles");

// //Solución 2
// javascript1.splice(3, 1, "ArraysDifíciles");
// console.log(javascript1);

// //Solucion splice
// let arrayNuevo = javascript1.splice(2, 2);

// //Solución slice
// // let arrayNuevo = javascript1.slice(2, 4);

// console.log(arrayNuevo);

// 4. Crea una string, pásala a array y saca por consola la versión invertida de la original.
// Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let string = "Francisco";

// let array = string.split("");

// array.reverse();

// console.log(array);

// 5. Crea dos arrays de la misma longitud y una función que cree un nuevo array que intercale
// sus elementos y vacíe los arrays originales. Por ejemplo, con los arrays arrayUno = [1, 2, 3]
// y arrayDos = [4, 5, 6] el resultado debería ser [1, 4, 2, 5, 3, 6]

// let arrayJuegos1 = ["CSGO","Tekken","Metal Gear","Tomb Raider"];

// let arrayJuegos2 = ["Mario Bros","Dragon Age","Kirby","Terrania"];

// let arrayResultado = [];

// const intercalar = (arrayJuegos1,arrayJuegos2) => {

//     for(let i = 0; i < arrayJuegos1.length; i++){

//         arrayResultado.push(arrayJuegos1[i]);
//         arrayResultado.push(arrayJuegos2[i]);
//         // arrayJuegos2[i].push("");

//     }

//     console.log(`Soy el primer array ${arrayJuegos1}`);
//     console.log(`Soy el segundo array ${arrayJuegos2}`);
//     console.log(`Soy el array de Resultado ${arrayResultado}`);
// }

// intercalar(arrayJuegos1,arrayJuegos2);

///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//SPREAD & REST..

//SPREAD

// const Describe = (name, ps, atk, def, speed) => {
//     console.log("Nombre: ", name);
//     console.log("Vida: ", ps);
//     console.log("Ataque: ", atk);
//     console.log("Defensa: ", def);
//     console.log("Velocidad: ", speed);
// }

// //Primero generamos un array que se llama Pokemon, que tiene 5 posiciones
// let Pokemon = ["Pikachu", 35, 55, 40, 90]

// //Ejecutamos la funcion llamada Describe, a la cual le tenemos que pasar parámetros
// Describe(...Pokemon)

//REST

//Aqui estamos aplicando el Rest, por lo tanto VENGAN LOS ARGUMENTOS QUE VENGAN, nunca dará error
// const agrupadora = (...args) => {
//   console.log(args);
// }

// agrupadora(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // [1, 2, 3, 4, 5]


//DESTRUCTURING ASSIGNMENT

//...En arrays...

// let comida = ["Curry", "Ramen", "Pizza"];

// let [plato1, plato2, plato3] = comida;

// console.log(plato1, plato2, plato3);

//...En objetos...

// let ciudades = {
//     primera : "A Coruña",
//     segunda : "Lugo",
//     tercera : "Madrid"
// }

// let { 
//     primera : top1,
//     segunda : top2,
//     tercera : top3
// } = ciudades;

// console.log(top1, top2, top3)


// let arrayCoches = ["Mercedes", "BMW", "Ford"];

// // for(let i = 0; i < arrayCoches.length; i++){

// //     console.log(arrayCoches[i])
// // }

// //FOR OF....
// for(let coche of arrayCoches){
//     console.log(coche);
// }

// for(let indice in arrayCoches){
//     console.log(indice)
// }


// //RECORRER OBJETOS CON UN FOR IN

// let deportes = {
//     deporte1 : "futbol",
//     deporte2 : "boxeo",
//     deporte3 : "basketball"
// }

// for (let elemento in deportes){
//     console.log(deportes[elemento])
// }