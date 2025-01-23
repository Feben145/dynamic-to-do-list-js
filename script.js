// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-button");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Function to add a task to the list
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // Check if the task input is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText; // Set the task text

        // Create a "Remove" button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn"; // Assign a class for styling

        // Add an event listener to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the task from the list
        };

        // Append the remove button to the <li> element
        taskItem.appendChild(removeButton);

        // Append the <li> element to the task list
        taskList.appendChild(taskItem);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Add event listener to the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Add event listener for the Enter key in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});