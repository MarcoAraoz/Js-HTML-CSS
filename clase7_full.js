
//Ejercicio 1
const USER = {
name: "Brenda Gonzalez",
edad: 26,
email: "brenda@academlo.com",
pasatiempos: [ "hornear", "cantar", "programar" ],
vacunacionCompleta: true,
mascotas:{
    name: "Juno",
    especie: "Gato"
},
saludar: function(){
    console.log( "Hola! mi nombre es Brenda" )
},
nombreDelMetodo(params) {
    console.log( "soy un metodo" )
}
}

//accesar al valor de una propiedad
//console.log( USER.name ) //Brenda Gonzalez

//accesar al valor de una propiedad cuando la propiedad tiene forma de string
//console.log( USER["edad"] )//26

function extraerPropiedad(propiedad) {
    console.log( USER[propiedad] )
}

//extraerPropiedad( "pasatiempos" )// [ 'hornear', 'cantar', 'programar' ]

//Crear una nueva propiedad
//objeto.propiedad = "valor que quiero guardar"
USER.tamañoDeTetas = 'supertetona'
//console.log(USER);

//Modificar una propiedad existente
//objeto.propiedad = "el nuevo valor"
USER.tamañoDeTetas = 'tetona'
//console.log(USER);

//Eliminar una propiedad
//delete objeto.propiedad
delete USER.tamañoDeTetas
//console.log(USER);

delete USER.email
//console.log( USER )


delete USER.mascotas.especie
// console.log( USER )

USER.mascotas.especie = "Gato"
USER.mascotas.comidaFavorita = "Croquetas"
//console.log( USER )

//console.log( USER.pasatiempos )// [ 'hornear', 'cantar', 'programar' ]
//console.log( USER.pasatiempos[0] )// hornear

USER.pasatiempos.push( "leer" )
//console.log( USER.pasatiempos )//[ 'hornear', 'cantar', 'programar', 'leer' ]


//Ejercicio 2

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

// console.log( users[0].social[0].url )

//Generar una lista de nombres de todos los usuarios

//let usersNames = []

// usersNames.push( users[0].name )
// usersNames.push( users[1].name )
// usersNames.push( users[2].name )
// usersNames.push( users[3].name )
// usersNames.push( users[4].name )

//console.log( usersNames )//[ 'Erik', 'Georg', 'Andrea', 'Oscar', 'Daniela' ]


//Estructura de un for que recorrera un arreglo

// for( let i = 0; i < arreglo.length; i++ ){
//     /*lo que queremos llevar a cabo con cada uno de los elementos*/
//     let elementoActual = arreglo[i]
// }

let usersNames = []

for( let i = 0; i < users.length; i++ ){
    usersNames.push( users[i].name )
}

//console.log( usersNames )//[ 'Erik', 'Georg', 'Andrea', 'Oscar', 'Daniela' ]


//Ejercicio 3: Funcion que determine si un numero es par o impar


//Determinar si el numero genera residuo al dividirse entre2  (modulo)
//Si el residuo es = 0 --> el numero es par
//si el residuo != 0 --> el numero NO es par --> es impar

function determinarNumero( numero ) {
    const residuo = numero % 2
    if( residuo === 0 ){
        return `El numero ${ numero } es par`
    }else{
        return `El numero ${ numero } es impar`
    }
}
//console.log( determinarNumero( 10 ) )//El numero 10 es par
//console.log( determinarNumero( 9 ) )//El numero 9 es impar

const arregloDesordenado = [
    {name: "Susanita",
     age: 60 }, 
    {name: "Brenda",
     age: 26 }, 
    {name: "Pedrito",
     age: 12 }
]

// console.log( arregloDesordenado.sort(function compareNumbers(a, b) {
//     return a.age - b.age;
// }))

// arregloDesordenado.sort(function compareNumbers(a, b) {
//     return a.age - b.age;
// })

//console.log(arregloDesordenado);


//Clase erik

