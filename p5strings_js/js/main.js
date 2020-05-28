/* 1:
-Pedir al usuario su nombre completo
-Determinar la cantidad de palabras que tiene su nombre
-si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
-si no, indicar al usuario que tiene un nombre corto */



 var completeName= prompt("Please insert your complete name", "Nitzeli Alejandra Villa");
 var arrayName= completeName.split(" ")

 if (completeName.length === 3){
    console.log ("your name is short")
 } else if (completeName.length >= 4){
     console.log ("your name is too long")
 } 


/* pedir al usuario mediante diferentes propmts su dirección
    (calle)
    (número)
    (colonia)
    (alcaldía)
    (estado)
    mostrar al usuario su dirección completa con el siguiente formato:
    input ->    san mateo 
                172
                la preciosa
                azcapotzalco
                ciudad de mexico
    output ->   San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México*/


    var streetName= prompt ("What's your street?", "av san antonio")
    var streetNumber= prompt ("What's your street number", 111)
    var colonyName= prompt ("What's your colony?", "napoles")
    var mayorName= prompt("What's your municipal mayor?", "benito juarez")
    var stateName= prompt ("What's your state?", "ciudad de méxico")
    var arrayCompleteAddress = [streetName, streetNumber, colonyName, mayorName, stateName]

    var capitalized= arrayCompleteAddress[0].toUpperCase()
    
/*
3: 
    Pedir al usuario que escriba una frase
    Pedir al usuario que escriba un caracter
    Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase
*/


var phrase= prompt("please enter your message", "no me sale la practica")
var letter= prompt("please write a letter","e")

console.log(phrase.match(/e/gi).length);



/*Pedir al usuario su nombre completo
Mostrarle al usuario sus iniciales con el siguiente formato:
input  -> "Israel Salinas Martínez"
output -> I.S.M. 
*/

var yourName= prompt("please insert your name","Nitzeli Alejandra Villa")
var arrayInitials= yourName.split(" ")

console.log(yourName.charAt(0).toUpperCase()+"."+yourName.charAt(12).toUpperCase()+"."+yourName.charAt(18).toUpperCase()+".")*/