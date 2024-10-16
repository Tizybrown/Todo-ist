// JavaScript Code
const form = document.querySelector('form'); 
const input = document.querySelector('.add-todo');
const todos = document.querySelector('.todos');
var erase = document.querySelectorAll('.erase');
var nothing = document.querySelector('.nothing');

// Adding Event Listener for Adding Tasks
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the page from reloading

    let myInput = input.value; // Get the task from the input field

    if (myInput === '') {
        nothing.textContent = 'Please Enter Your Todo';
    } else {
        nothing.textContent = '';
        
        // Create a task template and add it to the list
        todos.innerHTML += `<div class="todo_list">
            <h2>${myInput}</h2>
            <span class="erase">X</span>
        </div>`;
    }

    input.value = ''; // Clear the input field
});

// Adding Event Listener for Deleting Tasks
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('erase')) {
        e.target.parentElement.remove();
    }
});
