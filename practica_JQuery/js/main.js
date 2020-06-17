const getData = () =>{
    let form = $("input").val();
    console.log(form)
}

$(document).ready(function(){
    $("#btnSave").click(getData(){
        let form = $("input").val()
        console.lo
    })
})

const log = console.log
//Nodos
// $(document).ready(function () {
// })
$("#submit").click(function (e) {
    e.preventDefault();
    let firstName = $("#first").val()
    let lastName = $("#last").val()
    let age = $("#age").val()
    let mail = $("#mail").val()
    let userObject = { firstName, lastName, age, mail }
    log(userObject)
    renderRow(userObject)
});
function renderRow(userObject) {
    let { firstName, lastName, age, mail } = userObject
    userRow = `
    <tr>
    <th scope="row">3</th>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>
    <td>${mail}</td>
    <td><svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16"
            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
            <path fill-rule="evenodd"
                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
        </svg></td>
</tr>
    `
    $("tbody").append(userRow);
}