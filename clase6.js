//Clase 6: ARRAYS
//Métodos importantes de los arreglos

let animales = []

//push --> sirve para añadir uno o mas elementos al final de un arreglo, 
//devuelve la nueva longitud del arreglo

animales.push( "gato", "perro" )
// console.log( animales )

//pop --> elimina el ÚLTIMO elemento de un arreglo 
//y devuelve el elemento eliminado

let elementoEliminado = animales.pop()
// console.log( `el elemento eliminado fue ${elementoEliminado} `)
// console.log( animales )

//unshift --> agrega elementos AL INICIO del arreglo y
// devuelve la nueva longitu del arreglo

let nuevaLongitud = animales.unshift( "hamster", "tigre" )
// console.log( `la nueva longitud del arreglo es: ${ nuevaLongitud }` )
// console.log( animales )

//shift --> elimina el PRIMER elemento de un arreglo 
//y devuelve el valor eliminado

let primerElementoEliminado = animales.shift()
// console.log( `el elemento que se eliminó fue ${ primerElementoEliminado }` )
// console.log( animales )



//splice --> me permite eliminar y agregar elementos a partir de un indice dado

let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "domingo", 
    "lunes",
    "noviembre",
    "diciembre"
]

let indexStart = meses.indexOf( "domingo" )
//4

meses.splice( indexStart, 2 )
//[ 'enero', 'febrero', 'marzo', 'abril', 'noviembre', 'diciembre' ]

let indexAbril = meses.indexOf( "abril" )
//3

meses.splice( indexAbril + 1 , 0, "mayo", "junio", "julio", 'agosto', 'septiembre', 'octubre' )
// ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto',
//  'septiembre','octubre','noviembre','diciembre'
// ]


//slice --> extrae una copia de una parte del arreglo
//devuelve un nuevo arreglo con los elementos extraidos

let numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

let rango = numeros.slice( )
rango.push( 11 )
//console.log( rango )
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
//console.log( numeros )
//[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//split --> separa una cadena de texto en pequeños pedazos y los 
//añade como elementos de un arreglo

let frase = "Mi nombre es Brenda y tengo 26 años"

let palabrasArray = frase.split( " " )

//console.log( palabrasArray )
//['Mi', 'nombre', 'es', 'Brenda', 'y', 'tengo', '26', 'años' ]
//console.log( palabrasArray[3] )
//Brenda

//join --> une todos los elementos de un arreglo para formar una cadena de texto

let nuevaCadena = palabrasArray.join( " " )
//console.log( nuevaCadena )
//Mi nombre es Brenda y tengo 26 años



//Crea un array de nombre emails y almacena 
//todos los correos del arreglo users.

const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

const index = users.length
const emails = [
    users[0].email,
    users[1].email,
    users[2].email,
    users[3].email,
    users[4].email,
]
//console.log(index); //5
//console.log(emails); //['erik@academlo.com', 'georg@academlo.com', 'andrea@hotmail.com', 'oscar@academlo.com', 'andrea@uaq.mx']

//Crea un array de nombre facebookAccounts y almacena
//todas las urls de las cuentas de facebook del arreglo users.

const facebookAccounts = [
    users[0].social[0].url,
    users[1].social[0].url,
    users[2].social[0].url,
    users[3].social[0].url,
    users[4].social[0].url
]
//console.log(facebookAccounts); //['facebook/erik', 'facebook/georg', 'facebook/andrea', 'facebook/oscar', 'facebook/andrea']

//OBJETOS
 
// Son abstracciones de objetos reales
// Poseen propiedades ( caracteristicas )
// Tienen metodos, ( acciones )
Object 

const objeto = {
    propiedad: 'valor',
    propiedad2: 'valor2',
    key: 'value',
    clave: 'valor',
    metodo: function( parametros ){
            //accion a realizar
    },
}


const objetoJuno = {
    especie: "Gato",
    nombre: "Juno",
    edad: 4,
    color: "Calico",
    hobbies: [ "dormir", "acurrucarse", "saltar por las noches" ],
    statusSalud: {
        vacunacion : true,
        desparacitacion: true,
    },
    ronronear: function() {  
        console.log( "prrrrrrrrrrr" )
    },
}

let nombreMascota = objetoJuno.nombre
console.log( nombreMascota )

// console.log( objetoJuno.hobbies )
// console.log( objetoJuno.comidaFavorita )

// //accesar a un metodo
// objetoJuno.ronronear()

// console.log( objetoJuno.hobbies[1] )
// console.log( objetoJuno.statusSalud.vacunacion )

// //Otra manera de accesar a los valores de las propiedades
// console.log( objetoJuno["especie"] )



// //Maneras de modificar un objeto

// objetoJuno.color = "Colorcitos"
// console.log( objetoJuno.color )

// objetoJuno.comidaFavorita = "Croquetas"

// console.log( objetoJuno.comidaFavorita )
// console.log( objetoJuno )


// //extraer propiedades de forma dinamica
// function extraerPropiedad( propiedad ){
//     console.log( typeof propiedad )
//     console.log( objetoJuno[ propiedad ] )
// }

// extraerPropiedad( "hobbies" )
// extraerPropiedad( "nombre" )

