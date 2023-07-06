const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const taskStatus = document.getElementById('taskStatus');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // To Create new list item
        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        checkbox.addEventListener('change', toggleTask);

        const text = document.createElement('span');
        text.className = 'text';
        text.innerText = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerText = 'x';
        deleteButton.addEventListener('click', deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = '';
        updateTaskCount();
        updateTaskStatus(); 
    }
}

function toggleTask(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentNode;

    if (checkbox.checked) {
        listItem.classList.add('completed');
    } else {
        listItem.classList.remove('completed');
    }
    updateTaskStatus();
}

function deleteTask(event) {
    const deleteButton = event.target;
    const listItem = deleteButton.parentNode;

    taskList.removeChild(listItem);
    updateTaskCount();
    updateTaskStatus();
}

function updateTaskCount() {
    const count = taskList.children.length;
    taskCount.innerText = `Total Tasks : ${count}`;
}
function updateTaskStatus() {
    const completedTasks = taskList.getElementsByClassName('completed').length;
    const uncompletedTasks = taskList.children.length - completedTasks;
    taskStatus.innerText = `Completed tasks: ${completedTasks} | Uncompleted tasks: ${uncompletedTasks}`;
}