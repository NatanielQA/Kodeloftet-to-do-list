// Initialize an empty array to store to-do items
let todos = [];

// Get references to the form and list
const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// Function to add a to-do item
function addTodo(todo) {
    // Add the new todo to the array
    todos.push(todo);
    // Update the display
    displayTodos();
}

// Function to display the to-do list
function displayTodos() {
    // Clear the current list
    todoList.innerHTML = "";
    // Loop through the todos array and display each item
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement("li");
        todoItem.textContent = todos[i];
        todoList.appendChild(todoItem);
    }
}

// Event listener for form submission
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
        addTodo(todoText);
        todoInput.value = ""; // Clear the input field after adding the todo
    } else {
        alert("Please enter a to-do");
    }
});
