//Clase 3

const user1 = "Soy Erik y tengo 9"; // -> 18
const user2 = "Soy Daniel y tengo 7"; // -> 20

//Sumar las edades, apoyándose en los índices
//console.log(user1[17] + user2[19]);
//97

// const age1 = parseInt(user1[17])
// const age2 = Number(user2[19])

// const suma = age1 + age2

// console.log(suma);

age1 = Number(user1[user1.length -1])
age2 = Number(user2[user2.length -1])


//console.log(age1 + age2)

//EJERCICIO: Sumar las edades de las siguientes frases
const user3 = "Soy Erik y tengo 23"; // -> 18
const user4 = "Soy Daniel y tengo 43"; // -> 20


//Forma 1
const splitAge = user3.split(" ")
const selectAge = Number(splitAge[splitAge.length -1])

const splitAge2 = user4.split(" ")
const selectAge2 = Number(splitAge2[splitAge2.length -1])

//console.log(selectAge + selectAge2) //66


//Forma 2: conforme a las indicaciones del profesor
const lastCharacter3= Number((user3[user3.length -2])+(user3[user3.length -1]))
const lastCharacter4= Number((user4[user4.length -2])+(user4[user4.length -1]))

//console.log(lastCharacter3 + lastCharacter4) //66

const phrase = "Hola me llamo Erik";
const word = "Erik";

//console.log(phrase.includes(word))

//CreateaTestMaxValue

 
function max (arrays) {
  // Maximum initialization value isO
    for (var i = 0; i < arrays.length -1; i++) {
        if(arrays[i] > arrays[i+1]){// swap
            
            var temp = arrays[i];

            arrays[i] = arrays[i+1];
            arrays[i+1] = temp;
        }
    }                
    var maxValue = arrays[arrays.length-1];
    return maxValue;
}


   //testing///
 var scores = [60,50,95,80,70];
 var maxValue = max(scores);
 console.log( "maxValue = " + (maxValue))