
var userObject = {}
var counter = 0;
const getUserData = (event) => {
    event.preventDefault()
    let inputsCollection = document.querySelectorAll("input")
    inputsCollection.forEach(item => {
        /*Creamos una llave para nuestro objeto*/
        let objectKey = item.dataset.pointsTo
        /*Creamos un valor para nuestro objeto*/
        let objectValue = item.value
        /*insertamos la llave y el valor dentro de nuestro objeto*/
        userObject[objectKey] = objectValue
    })
    printUserData(userObject)
}
const printUserData = (userObject) => {
    const { age, name, mail } = userObject
    let dataRow = document.createElement('tr');
    let idTd = document.createElement('td')
    let ageTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let mailTd = document.createElement('td')
    let idTextNode = document.createTextNode(++counter)
    idTd.appendChild(idTextNode)
    let ageTextNode = document.createTextNode(age)
    ageTd.appendChild(ageTextNode)
    let mailTextNode = document.createTextNode(mail)
    mailTd.appendChild(mailTextNode)
    let nameTextNode = document.createTextNode(name)
    nameTd.appendChild(nameTextNode)
    dataRow.appendChild(idTd)
    dataRow.appendChild(ageTd)
    dataRow.appendChild(nameTd)
    dataRow.appendChild(mailTd)
    let usersTable = document.getElementById("users-table")
    usersTable.appendChild(dataRow)
}
var submitButton = document.getElementById('submit-button')
submitButton.addEventListener( 'click', getUserData )


const ajaxKoders = () => {

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://ajaxclass-1ca34.firebaseio.com/.json');

    xhr.onreadystatechange = function () {
        //
        if (this.readyState === 4 && this.status === 200) {

            let result = JSON.parse(this.responseText),
                resultArray = Object.values(result.koders);

            for (const user in resultArray) {
                new User(resultArray[user])
            }
        }
    }
    xhr.send();
}

btnGetUser.addEventListener('click', ajaxKoders);