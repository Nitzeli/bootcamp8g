/*Crear una función que reciba una palabra del usuario
        -Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
        -Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
        -si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo
        -Indicar el resultado al usuario */

const getUserString = () => {
  let userString = prompt("Ingrese una palabra");
  let stringArray = userString.split(" ");
  let wordCount = stringArray.length;
  console.log(wordCount)
  if(wordCount > 1){
      alert("Inserte solo una palabra")
  }
var lettersArray = userString.split("");
for (let i = 0; i < lettersArray.length; i++) {
    let character = lettersArray[i];
    let isNumber = isNaN(character);
    isNumber ? null : alert("No es posible insertar numeros")
}
var isaPalindrome = lettersArray.reverse().join("")
console.log(isaPalindrome)
console.log(userString)
if(isaPalindrome==userString){
    alert("La palabra es un palindromo")
}else{
    alert("No es un palindromo")
}
}

/*crear una función que reciba un número del usuario
si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
si el usuario ingresa un número, descomponer ese número en sus factores primos*/

const valueNumber = () =>{
var userNumber = prompt("ingresa un número");
let numberString = userNumber.split(" ")
let numberCount = numberString.length
let primeNumbers = 
console.log(numberCount)
if(userNumber === Number){
    alert("escribe solo un número")
}else{
    console.log("seguir con el proceso")
}
}

var numbersArray = numberString.split(" ")
for(let j=0; j<numbersArray.length; j++){
    let character = numbersArray[j]
   
}


const calculatePrimeFactor = ( number) => {
    let factors = []
    let residue = number
    for ( residue ; residue != 1; ) {
      let prime = findDividerNumber(residue)
      factors.push(prime)
      residue = residue / prime
    }
  return factors
  }
  const findDividerNumber = ( dividendo ) => {
   let primeNumbers = [ 2, 3, 5, 7, 11, 13 ]
    for ( let i = 0; i < primeNumbers.length; i++ ){
      if( dividendo % primeNumbers[i] === 0  ){
        return primeNumbers[i]
      }
    }
  }
   

