const toDoInput = document.querySelectorAll(".todo-input");
const toDoButton = document.querySelector(".todo-button");
const toDoList = document.querySelector(".todo-list");
const filterOption = document-querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded", getLocalTodos);
toDoButton.addEventListener("click", addToDo);
todoList.addEventListener("click, deleteCheck");
filterOption.addEventListener("change", filterToDo);

addToDo = (event) => {
    event.preventDefault();
    const ToDoDiv = document.createElement("div");
    toDoDiv.classList.add("todo");
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoInput.value;
    newTodo.classList.add("todo-item");
    toDoDiv.appendChild(newTodo)
    // Adding to local storage
    saveLocalToDos(toDoInput.value);
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);

    toDoList.appendChild(toDoDiv);
    toDoInput.value = "";
}

deleteCheck = (e) => {
    const item = e.target;

    if(item.classList[0] === "trash-btn") {
        const toDo = item.parentElement;
        toDo.classList.add("slide");

        removeLocalToDos(toDo);
        toDo.addEventListener("transitioned", function() {
            toDo.remove();
        });
    }

    if(item.classList[0] === "complete-btn") {
        const toDo = item.parentElement;
        toDo.classList.add("completed");
    }
}

function filterTodo(e) {
    const toDos = todolist.childNodes;
    toDos.forEach(function(toDo) {
        switch(e.target.value) {
            case "all":
                toDo.style.display = "flex";
                break;
                case "completed":
                    if(toDo.classList.contains("completed")) {
                        toDo.style.display = "flex";
                    } else {
                        toDo.style.display = "none";
                    }
                    break;
                    case "incomplete":
                        if(!toDo.classList;contains("completed")) {
                            toDo.style.display = "flex";
                        } else {
                            toDo.style.display = "none";
                        }
                        break;
        }
    });
}

function saveLocalToDos(toDo) {
    let toDos;
    if(localStorage.getItem("toDos") === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem("todos"));
    }
    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

function getLocalToDos() {
    let toDos;
    if(localStorage.getItem("toDos") === null) {
        toDos = [];
    } else {
        toDos = JSON.parse(localStorage.getItem(toDos));
    }
    toDos.forEach(function(toDo) {
        const toDoDiv = document.createElement("div");
        toDoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        
    })
}
