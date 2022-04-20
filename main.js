const enterField = document.querySelector("#enterField");
const toDoList = document.querySelector("ul");

document.querySelector("#toDoForm").addEventListener("submit", function(event){
    console.log("submiting");
    event.preventDefault();

    const li = document.createElement('li');
    li.textContent = enterField.value;
    toDoList.appendChild(li);

    enterField.value = "";
})