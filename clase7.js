
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
console.log( USER.name )
//accesar al valor de una propiedad cuando la propiedad tiene forma de string
console.log( USER["edad"] )

function extraerPropiedad(propiedad) {
    console.log( USER[propiedad] )
}

extraerPropiedad( "pasatiempos" )

//Crear una nueva propiedad
//objeto.propiedad = "valor que quiero guardar"

//Modificar una propiedad existente
//objeto.propiedad = "el nuevo valor"

//Eliminar una propiedad
//delete objeto.propiedad

delete USER.email
console.log( USER )


delete USER.mascotas.especie
console.log( USER )

USER.mascotas.especie = "Gato"
USER.mascotas.comidaFavorita = "Croquetas"
console.log( USER )

console.log( USER.pasatiempos )
console.log( USER.pasatiempos[0] )

USER.pasatiempos.push( "leer" )
console.log( USER.pasatiempos )