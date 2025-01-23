document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    let tasks = []; // Array to store tasks

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            tasks = JSON.parse(storedTasks); // Parse the JSON string into an array
            tasks.forEach((task) => createTaskElement(task)); // Add each task to the DOM
        }
    }

    // Save tasks to Local Storage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks)); // Convert the array to a JSON string
    }

    // Create a new task element in the DOM
    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        // Remove task event
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove task from DOM
            tasks = tasks.filter((task) => task !== taskText); // Remove from tasks array
            saveTasks(); // Update Local Storage
        };

        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
    }

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get user input and trim whitespace

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Add task to the DOM and tasks array
        createTaskElement(taskText);
        tasks.push(taskText);

        saveTasks(); // Update Local Storage
        taskInput.value = ""; // Clear input field
    }

    // Event listener for "Add Task" button
    addButton.addEventListener("click", addTask);

    // Event listener for "Enter" key in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Load tasks on page load
    loadTasks();
});