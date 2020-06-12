/*var nameInput = document.getElementById('user-name');
console.log(nameInput.value)
var inputs = document.getElementsByClassName('form-control');
console.log(inputs)
var inputsByName = document.getElementsByName('user')
console.log(inputsByName)
var elementsByTagname = document.getElementsByTagName("input")
console.log(elementsByTagname)
var elementByQuery = document.querySelector("input.form-control")
console.log(elementByQuery)
var allElementsByQuery = document.querySelectorAll("input.form-control")
console.log(allElementsByQuery)*/

/*
var nameInput = document.getElementById('user-name');
console.log(nameInput.value)
var addressInput = document.getElementById('user-address');
console.log(addressInput.value)
var phoneInput = document.getElementById('user-phone');
console.log(phoneInput.value)
//var userData = {nameInput,addressInput,phoneInput}
//console.log(userData)

var userInfo = new userData{nameInput,addressInput,phoneInput}


var inputCollection= document.getElementsByTagName("input")
console.log(inputCollection)

for(let i=0; i < inputCollection.length; i++){
    console.log(inputCollection[i].value)
}
*/

var dataInfo = document.getElementById('user-name')
dataInfo.addEventListener("keyup",(event) =>{
    let inputValue = event.target.value;
    console.log(inputValue)
})