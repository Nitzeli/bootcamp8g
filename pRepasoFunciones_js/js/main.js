/*Crear una función que reciba una palabra del usuario
Si el usuario escribe más de una palabra, indicarle que debe ingresar sólo una palabra
Si el usuario ingresa al menos un número dentro de la palabra, indicarle que no puede ingresar números
Si el usuario ingresa una palabra, evaluar si esa palabra es un palíndromo */

/*
const getUserName = () => {
    let userName = prompt("Please enter your User","Nitzeli Villa")
    let sentence = countElements(userName);
    let numbers = numberDetected;
    let isPalindrome = palindrome(countElements)
}

const countElements= () =>{
    let arrayTextDivided= userName.split("  ");
    if(arrayTextDivided < 2){
        return false
    }
    return true 
}

const numberDetected=(string) =>{
    if (userName.match (1234567890/gi)){
        prompt("You cannot input numbers")
    }return true
}

const palindrome = (string) =>{
    for ( let i=0; i<getUserName.length; i++){
        if(getUserName[i] !== getUserName[getUserName.length - 1 -i]){
            return false;
        }
    }
    return true
}

*/


/*crear una función que reciba un número del usuario
si el usuario ingresa algo diferente a un número, indicarle que debe ingresar un número
si el usuario ingresa más de un número ( por ejemplo 22 10, ó 25,15,89) indicarle que debe ingresar únicamente un número
si el usuario ingresa un número, descomponer ese número en sus factores primos*/

const getNumber = ()=>{
    let value = parseInt(prompt("Please enter one number", "7"))
    let arrayValue = [value]
}

const checkInp = ()=>{
    if(isNaN(value)){
        alert ("it is not a number")
    }
}

const primeFactors = (value)=>{
    const isPrime=() =>{
        for(let i=2; i<=Math.sqrt(value); i++){
            if (value % i === 0){
                return false
        }
        return true
    }
    const result = ()=>{
        for (let i=2; i<= value; i++){
            while (is_prime(i) && num % i === 0){
                if(!result.includes(i)) result.push (i);
                value /= i;
            }
        }
        return result
    }
}