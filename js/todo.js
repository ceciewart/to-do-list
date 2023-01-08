// SELECTORS
// Info added on Input:
const input = document.querySelector('.todo-input'); 
// The button that adds to the list
const saveButton = document.querySelector('.todo-button');
// Refers to the ul where the list items will be appended
const todoUL = document.querySelector('.todo-list')
// Filter 
const filter = document.querySelector('.filter');


//EVENT LISTENERS
// document.addEventListener('DOMContentLoaded', retrieveTodos);
saveButton.addEventListener('click', addTodo);
todoUL.addEventListener('click', deleteCheck);
filter.addEventListener('click', taskFilter);


//FUNCTIONS
//Inside the ul goes this code built on JS
//   <div class='todo'>
//         <li class='todo-item'></li>
//         <button class="complete-button">Delete</button>
//         <button>Checked</button>
//   </div>
// 

//1) Adding TODOS
function addTodo(event) {
   event.preventDefault();
// Code below creates the HTML structure and class attributes I need to show once a to do is submitted
   const todoDiv = document.createElement('div');
   todoDiv.classList.add('todo');

   const newTodo = document.createElement('li');
   newTodo.innerText = input.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    // Appending to List
    todoUL.appendChild(todoDiv);
    // Clearing todo input value
    input.value = "";
}

// 2) Deleting/Completing TODOS - Based on target(what is clicked)

function deleteCheck(e){
    const item = e.target;

    //Deleting a todo
     if(item.classList[0] === "trash-button") {
        const todo =  item.parentElement; 

        // Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            // Todo only gets removed when the animation is over. 
            todo.remove();// removes the whole div created in JS for each todo
        });
     }
     // Completing a todo
     else if(item.classList[0] === "complete-button"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
     }
}


//3)Filtering my TODOS
function taskFilter(e){
    const todos = todoUL.childNodes;
    todos.forEach(function(todo){
        const styling = todo.style;
        if(styling !=undefined && styling !=null)
        switch(e.target.value){
            case 'all':
                styling.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    styling.display = 'flex';
                } else {
                    styling.display = 'none';
                   
                }
                break;
            case 'uncompleted':
                if (todo.classList.contains('completed')){
                    styling.display = 'none';
                } else {
                    styling.display = 'flex';
                  
                }
                break;

        }
    });

}

// Filtering by Completed or Uncompleted todos - DONE







