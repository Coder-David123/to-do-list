const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('tasklist');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        taskList.removeChild(li);
    });

    // Add delete button to the task item
    li.appendChild(deleteBtn);
    // Add the task item to the list
    taskList.appendChild(li);
    taskInput.value = '';
}

addBtn.addEventListener('click', addTask);
