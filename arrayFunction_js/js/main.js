/*Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO*/


   /* var originalPhrase = ("La mejor forma de predecir el futuro es creándolo");
    var arrayPhrase = originalPhrase.split (" ")
    var newArray = []
   // console.log(arrayPhrase)
    var arrayLenght = arrayPhrase.length */

/*
    var words = arrayPhrase.map(function (word, index){ // 
        let moduleIndex = index % 2
        if ( moduleIndex === 0 ) {
            console.log(moduleIndex, word)
            let wordUpperCase = word.toUpperCase()
            console.log(wordUpperCase)
            newArray.push(wordUpperCase)
        } else {
            console.log(moduleIndex, word)
            let wordLowerCase = word.toLowerCase()
            console.log(wordLowerCase)
            newArray.push(wordLowerCase)
        }
    })
    console.log(newArray)
    let newPhrase = newArray.join(" ")
    console.log(newPhrase) 
*/


/*    2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo" */

    /*var words = arrayPhrase.filter((word)=>{    
        return word.length >= 5
        })
        console.log(words.join(" "))*/

    /*3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"*/


    /*var originalPhrase = "La mejor forma de predecir el futuro es creándolo"
    var arrayPhrase = originalPhrase.split (" ")
    var arrayLenght = arrayPhrase.length

    
    const finalExercise= arrayPhrase.reduce((sumaLetraTotal, word, indexWord) => {
        return sumaLetraTotal + word.length 
    },0)

    const avarageLetter = (totalLetter,totalWords)=>{
        let avarage = totalLetter / totalWords
        console.log ("la frase en promedio"+" "+avarage)
    }
    */


    /*esta funcion sirve para crear un objeto*/
/*const createUserObject = (name, age,height ) => {
    let nombre = 
    let edad = parseInt(prompt("Ingresa la edad de tu usuario"))
    let altura = parseInt(prompt("Ingresa la altura de tu usuario"))
    let userObject = {}
    userObject.name = nombre
    userObject.age = edad
    userObject.height = altura
    console.log(userObject)
}
*/

var dataArray = [
    [
        "Ruben",
        25,
        1.70
    ],[
        "Yorch",
        23,
        1.80
    ],[
        "Juan",
        22,
        1.82
    ]
]
const createUserObject = (array) => {
    let name = array[0]
    let age = array[1]
    let height = array[2]
    let userObject = {}
    userObject.name = name
    userObject.age = age
    userObject.height = height
    console.log(userObject)

}

let arrayNew = dataArray.map(user => createUserObject(user))



