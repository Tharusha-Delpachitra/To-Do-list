document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readystate: complete");
        initApp();
    }
});

const initApp = () => {

    const Task = document.querySelector(".task");
    const button = document.querySelector(".Add-btn");

    button.addEventListener("click", () => {
        var taskValue = Task.value;
        console.log(taskValue);

        if (taskValue.trim() !== '') {
            var ul = document.querySelector('.task-list'); 
            var li = document.createElement('li');

            // Create a span to hold the task text
            var taskText = document.createElement('span');
            taskText.textContent = taskValue;
            taskText.className = 'task-text'; // Add task-text class
            
            // Create done button to mark the done tasks
            var doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.className = 'done-btn';

            // Create the delete button
            var deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';

            // Append the task text, done button, and delete button to the list item
            li.appendChild(taskText);
            li.appendChild(doneBtn);
            li.appendChild(deleteBtn);
            ul.appendChild(li);

            // Clear the task input field
            Task.value = '';

            // Add event listener to the delete button
            deleteBtn.addEventListener('click', () => {
                ul.removeChild(li);
            });

            // Add event listener to the done button
            doneBtn.addEventListener("click", () => {
                taskText.classList.toggle("done");
            });
        } else {
            alert("Please Enter the task");
        }
    });

};