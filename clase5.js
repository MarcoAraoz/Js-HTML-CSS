//FUNCIONES



/*
    ESTRUCTURAS DE CONTROL

    CICLOS / BUCLE
    Estructuras que me permiten llevar a cabo un proceso determinado numero de veces
    
    FOR 

    for( let contador = valorInicial ; condicion ; contador++ ){
        //instrucciones que se van a repetir en cada iteracion del ciclo    
    } 

    incremento --> contador ++
    decremento --> contador --
*/
/*
for( let i = 0; i <= 10 ; i++ ){
    console.log( i )
}

console.log( "Acabó el for" )
*/

/*
    iteracion   valori  console.log(i)  modificacioni
    1           i = 0   0               i = i + 1 = 0 + 1 = 1
    2           i = 1   1               i = i + 1 = 1 + 1 = 2
    ...
    11          i = 10 10               i = i + 1 = 10 + 1 = 11 
*/


/*
ARREGLOS / ARRAYS
Estructuras que me permiten agrupar otros datos y asignarles una posicion

                indice 0    indice 1    indice2 ...
let arreglo = [ elemento1, elemento2, elemento3,... ]
*/

let arregloDatos = [ "cadena de texto", 10, true ]
console.log( arregloDatos )

console.log( typeof arregloDatos[0] )
console.log( typeof arregloDatos[1] )
console.log( typeof arregloDatos[2] )

const ARREGLO_FRUTAS = [ "fresa", "manzana", "guayaba", "limon" ]
console.log( ARREGLO_FRUTAS )

//Puedo llevar a cabo modificaciones en un arreglo guardado 
//en una constante porque no implica reasignaciones
ARREGLO_FRUTAS.push( "aguacate" )
console.log( ARREGLO_FRUTAS )

//Esto no es posible, porque es una reasignacion
//ARREGLO_FRUTAS = [ "fresa", "manzana", "guayaba", "limon", "aguacate", "sandia" ]

let arregloNombres = [ "Brenda", "Jesus", "Daniel", "German" ]
let arregloNombres2 = arregloNombres

console.log( arregloNombres )
console.log( arregloNombres2 )

arregloNombres2.push( "Samantha" )

console.log( arregloNombres )
console.log( arregloNombres2 )


//spread operator 
//let arregloCopia = [ "Brenda", "Jesus", "Daniel", "German" ]
let arregloCopia = [ ...arregloNombres ]
console.log( arregloCopia )

arregloCopia.push( "Benjamin" )
console.log( arregloNombres )
console.log( arregloNombres2 )
console.log( arregloCopia )


//PROPIEDAD LENGTH
//Devuelve la cantidad de elementos que conforman al arreglo
//indiceUltimoElemento = arreglo.length - 1
console.log( arregloCopia.length )
console.log( [].length )


let arregloAnimales = [ "gato", "hamster" ]
//push --> agrega uno o mas elementos al final del arreglo
let valorDevueltoPush = arregloAnimales.push( "perro", "serpiente" )
console.log( arregloAnimales )
console.log( valorDevueltoPush )


//Clase 5 de Erik

// Extraer las edades de las siguientes frases
//(la edad siempre será la penúltima palabra) ysumarlas.

const text = "Hola, me llamo Erik y tengo 30 años"
const text2 = "Hola, me llamo Daniel y tengo 25 años"
const text3 = "Hola, me llamo Luis y tengo 40 años"

const textLength = text.length
const text2Length = text2.length
const text3Length = text3.length

const age1 = text[textLength -7] + text[textLength - 6]//30
const age2 = text2[text2Length -7] + text2[text2Length - 6]//25
const age3 = text3[text3Length -7] + text3[text3Length - 6]//40
const sum = Number(age1) + Number(age2) + Number(age3)//95
//console.log(sum);

//Resolución del ejercicio usando una función dinámica

function numbers(str) {
    const div = str.split(" ")
    const num = div[div.length -2]  
    const toNumber = Number(num)
    return toNumber
}

console.log((numbers(text)) + (numbers(text2)) + (numbers(text3)))

//console.log(numbers(text))//30
//console.log(numbers(text2))//25
//console.log(numbers(text3))//40

function greetings(text, name) { 
    const string = text + name
    console.log(string)
}

greetings('Bienvenido, ', 'Luis')

function queue(arr, item) {
    arr.push(item)
    console.log(arr);
    const removed = arr.shift()
    return removed
}

numbers = [1,2,3,4,5]
console.log(queue(numbers,6))



//Ejercicio de Freecodecamp.com
function testStrictNotEqual(val) {
    if (val !== 17) { // Cambia esta línea
      return "Not equal";
    }
    return "Equal";
  }
  
console.log(testStrictNotEqual(17))

//Crear una función que reciba un texto donde la
//edad esté en la penúltima palabra y obtengamos esta edad.

const stringAge = "Hola, me llamo Erik y tengo 30 años"

function getAge(text) {
    const spl = text.split(" ")
    const age = spl[spl.length -2]
    
    console.log(Number(age));
}

getAge(stringAge)