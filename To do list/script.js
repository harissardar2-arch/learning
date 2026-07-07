const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create task container
    const task = document.createElement("div");
    task.classList.add("task");

    // Create task text
    const text = document.createElement("span");
    text.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";

    deleteBtn.addEventListener("click", function () {
        task.remove();
    });

    task.appendChild(text);
    task.appendChild(deleteBtn);

    taskList.appendChild(task);
}