//Element İdentification
let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById("inputText");
let clearToDo = document.getElementById("clearToDo");
//Click add Button
addToDoButton.addEventListener('click', function()
{
    //"p" create
    let paragraph = document.createElement("p");
    paragraph.classList.add('paragraph-styling');
    toDoContainer.appendChild(paragraph);
    //İnput clearing
    paragraph.innerHTML = inputText.value;
    inputText.value = "";



//Mark what has been done
paragraph.addEventListener('click', function(){
paragraph.style.textDecoration = 'line-through';

    })
    //Clear a "p"
    paragraph.addEventListener('dblclick', function(){
toDoContainer.removeChild(paragraph);
    })
    //Clear all "p"'s
    clearToDo.addEventListener("click", function(){
paragraph.style.display = 'none';
    })
})
//Done
