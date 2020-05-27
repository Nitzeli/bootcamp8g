/*1.- Declarar una variable que contenga un número cualquiera y determinar mediante un mensaje si ese número es par o impar*/
var numberOne=21

if(numberOne%2 === 0){
    console.log ("the number is even")
}else {
    console.log ("the number is odd")
}

/*2.- Determinar 2 variables ( base, altura ) e indicar si con ellas se forma un cuadrado o un rectángulo*/

var base=20
var height=20

if (base===height){
    console.log ("the figure is a square")
}else{
    console.log("the figure is a rectangle")
}

/*2.- Determinar una variable (numeroDeLados) e indicar el nombre de la figura geométrica que tiene esa cantidad de lados,si numero de lados es mayor que 5, poner un mensaje que diga "tu figura tiene muchos lados*/

var numberSides = 5

if (numberSides === 4){
    console.log ("figure is an square or rectagle")
}else if (numberSides >= 5){
    console.log ("the figure have a lot of sides")
}