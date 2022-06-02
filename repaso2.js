
let globos = [
    {
        color: "amarillo"
    },
    {
        color: "amarillo"
    },
    {
        color: "rojo"
    },
    {
        color: "azul"
    },
    {
        color: "amarillo"
    },
    {
        color: "amarillo"
    },
    {
        color: "rojo"
    },
    {
        color: "verde"
    },
     {
        color: "negro"
    },
]

//recorrer el arreglo y sacar elemento por elemento
//evaluar el color del globo y "añadirlo" donde corresponda
//si es un color nuevo: añado una nueva caja, le coloco el 
//nombre del color que corresponde y guardo EL PRIMER globo de ese color
//Si es un color que ya existe simplemente lo agregamos a donde corresponde

/*
colores = {
    amarillo: 1,
    rojo: 1
}
*/

let contadorColores = {}

for( let i = 0; i < globos.length; i++ ){
    if ( contadorColores[ globos[i].color ] ) {
        //Ya existe la propiedad
        contadorColores[ globos[i].color ] += 1
        //  contadorColores[ globos[i].color ] =  contadorColores[ globos[i].color ] + 1
    } else {
        //aun no existe la propiedad
        contadorColores[ globos[i].color ] = 1
    }
}
console.log( contadorColores )
/*
    agregar una propiedad --> objeto[nuevaPropiedad] = valor inicial
    modificar una propiedad --> objeto[propiedad] = nuevo valor
*/

/*
Tendremos una variable maxNumber para guardar el numero mas grande
Vamos a comparar cada valor con maxNumber. Cuando el valor sea mayor a maxNumber, 
reasignaremos el valor a maxNumber --> maxNumber = valor
*/

let maxNumber = 0
let mostRepeated = null
for( const color in contadorColores ){
    if( maxNumber < contadorColores[ color ] ){
        maxNumber = contadorColores[ color ]
        mostRepeated = color
    }
}

console.log( `El color de globos mas repetido es ${mostRepeated} con una cantidad de ${ maxNumber } globos` )
