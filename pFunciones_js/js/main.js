/*1:-preguntar al usuario el nombre de una figura geométrica (cuadrado, rectángulo, círculo, triángulo)
-preguntar al usuario qué desea calcular (area, perímetro)
-dependiendo de la figura y lo que se desea calcular, aplciar la fórmula correspondiente y mostrar al usuario en un alert el resultado del cálculo.*/



    var operationCuadrado= prompt("perimeter or area")
    var side= (prompt("please insert data", 5));
    const operationFigure = ()=>{
        var calculateSquareRecPerimeter= (side+side+side+side);
        var calculateSquareA= (side*side)
        var calculateRectanguleArea= (side*side/2)
    }
    operationFigure(calculateRectanguleArea)


    const PI = 3.1415
const askUserForNumber = () => {
    let userNumber = parseInt(prompt("Ingresa un número entre 0 y 50"))
    console.log(userNumber)
    if( userNumber > 0 && userNumber < 50){
        for(let i = 0; i <= userNumber; i++){
            if( i % 2 === 0 ){
                console.log(`${i} es un número par` )
            }
        }
    } else {
        alert("Tu número no esta dentro del rango")
    }
}
const askUserForData = () => {
    let figure = prompt("Escoge entre cuadrado, rectángulo, círculo y triángulo");
    let operation = prompt("Qué deseas calcular? área ó perímetro?");
    console.log(figure, operation)
    if( figure === "cuadrado" && operation === "área"){ /*area de un cuadrado*/
        let side = parseInt(prompt("Cuánto mide el lado de tu cuadrado?"))
        let result = getSquareArea(side)
        alert(`El ${operation} de tu ${figure} es igual a ${result}`)
    } else if ( figure === "cuadrado" && operation === "perímetro" ){ /* perímetro de un cuadrado*/
        let side = parseInt(prompt("Cuánto mide el lado de tu cuadrado?"))
        let result = getSquarePerimeter( side )
        alert(`El ${operation} de tu ${figure} es igual a ${result}`)
    } else if ( figure === "círculo" && operation === "área"){
        let radius = parseInt(prompt("Cuánto mide el radio de tu círculo?"))
        let result = getCircleArea(PI, radius);
        alert(`El ${operation} de tu ${figure} es igual a ${result}`)
    } else if ( figure === "círculo" && operation === "perímetro"){
        let diameter = parseInt(prompt("Cuánto mide el díametro de tu círculo?"))
        let result = getCirclePerimeter( PI, diameter );
        alert(`El ${operation} de tu ${figure} es igual a ${result}`)
    }
}
const getSquareArea = (side) => {
    let squareArea = (side * side);
    return squareArea
}
const getTriangleArea = ( base, height ) => {
    let triangleArea = ( base * height )/2
    return triangleArea
}
const getCircleArea = ( PI, radius ) => {
    let circleArea = PI * ( radius * radius );
    return circleArea 
}
const getSquarePerimeter = ( side ) => {
    let squarePerimeter = side * 4
    return squarePerimeter
}
const getCirclePerimeter = ( PI, diameter ) => {
    let circleDiameter = PI * diameter
    return circleDiameter
}