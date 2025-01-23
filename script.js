document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Add a new task
    function addTask() {
        // Retrieve and trim the task input value
        const taskText = taskInput.value.trim();

        // Check if the taskText is not empty
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new <li> element and set its textContent to taskText
        const taskItem = document.createElement("li");
        taskItem.textContent = taskText;

        // Create a new <button> element for removing the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn"); // Add a class for styling

        // Assign an onclick event to the remove button
        removeButton.onclick = () => {
            taskList.removeChild(taskItem); // Remove the <li> element from taskList
        };

        // Append the remove button to the <li> element
        taskItem.appendChild(removeButton);

        // Append the <li> element to the taskList
        taskList.appendChild(taskItem);

        // Clear the input field for the next task
        taskInput.value = "";
    }

    // Event listener for the "Add Task" button
    addButton.addEventListener("click", addTask);

    // Event listener for the "Enter" key in the input field
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});