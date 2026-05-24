import { updateTaskStatus, getActiveTasks } from "../modules/taskManager.js"
// 5 - create an app variable that "extracts" the div (app)
// 5.1 - where all tasks will be displayed
const app = document.getElementById("app");
// 6 - implement a render function that takes tasks 
// and draws them on screen
export function renderTasks(taskList) {

    // 7 - clear the previou contend 
    // and prevents old tasks from stacking or duplicating
    app.innerHTML = "";

    // 8 - loop through every task in the array
    taskList.forEach(task => {
        // 9 - create an new HTML element for each task
        const taskEl = document.createElement("div");

        // 10 - fill the element with HTML content using task data
        // 10.1 - makes JS variables visible UI
        taskEl.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <small>Status: ${task.status}</small>
        <small>Priority: ${task.priority}</small>
        <hr />
      `;

      // 29 - attaching the click listener before 
      // the append because the element gets added to the behaviour
      // before entering the page

      // 29.1 - creating button dynamically first
      const btn = document.createElement("button");
      // 29.2 - updating the status
      btn.textContent = `Move from ${task.status}`;

      // 29.1.0 - addEventListener on the button
      btn.addEventListener("click", () =>  {

        // 29.1.1 - update task status
        updateTaskStatus(task.id);

        // 29.1.2 - re-render update tasks
        renderTasks(getActiveTasks());

      });

      // 29.3 append the created button 
      // so it appears on screen
      taskEl.appendChild(btn);
      // 11 - add the created element to the page
      // 11.1 - makes it appear on screen
      app.appendChild(taskEl);


    });
}