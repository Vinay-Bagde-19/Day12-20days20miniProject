const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click",() =>{
    const newTodoText = newTodoInput.value;

    if(newTodoText !== ""){
        const newTodoitem = document.createElement("li");
        newTodoitem.innerText = newTodoText;

        //create delete btn to delete todo item
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText = "X";
        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            newTodoitem.remove();
        });

        newTodoitem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoitem);
        newTodoInput.value = "";
    }
});