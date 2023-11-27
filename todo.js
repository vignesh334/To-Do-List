var inp = document.getElementById("input") 
// var h1 = document.getElementById("result")
var ul = document.getElementById("list-container")

function add(){
    var listitem =document.createElement("li")
    listitem.innerHTML=inp.value + "<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listitem)
}
function deleteitem(event){
    event.target.parentElement.remove()
}