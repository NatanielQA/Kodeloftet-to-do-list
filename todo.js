// Initialize todos array by retrieving from localStorage or using an empty array
let todos = JSON.parse(localStorage.getItem("todos")) || [];

const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

// Function to add a to-do item
function addTodo(todo) {
    todos.push({ text: todo, completed: false });
    // Save the updated todos array to localStorage
    localStorage.setItem("todos", JSON.stringify(todos));
    // Update the display
    displayTodos();
}

// Function to delete a to-do item
function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
}

// Function to toggle the completion status of a to-do item
function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
}

// Function to display the to-do list
function displayTodos() {
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const todoItem = document.createElement("li");

        // Create a checkbox for each todo item
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todos[i].completed;
        checkbox.addEventListener("change", function() {
            toggleTodo(i);
        });

        // Create a span element to display the todo text
        const todoText = document.createElement("span");
        todoText.textContent = todos[i].text;

        // Delete button
        const deleteButton = document.createElement("span");
        deleteButton.textContent = "❌";
        deleteButton.classList.add("delete-button");

        // Hover for delete button
        deleteButton.addEventListener("mouseenter", function() {
            deleteButton.style.cursor = "pointer";
        });

        deleteButton.addEventListener("click", function() {
            deleteTodo(i);
        });

        // Append the checkbox, todo text, and delete button to the list item
        todoItem.appendChild(checkbox);
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        // Append the todo item to the list
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

// Display the todos when the page loads
displayTodos();
