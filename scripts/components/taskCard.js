import { projects } from "../../mock/seedData.js";
import { getActiveProjectId } from "../data/store.js";
import { updateTaskStatus, getActiveTasks, addTask, deleteTask } from "../modules/taskManager.js"
// 5 - create an app variable that "extracts" the div (app)
// 5.1 - where all tasks will be displayed
const app = document.getElementById("app");
// 6 - implement a render function that takes tasks 
// and draws them on screen
export function renderTasks(taskList) {

    // 7 - clear the previou contend 
    // and prevents old tasks from stacking or duplicating
    app.innerHTML = "";

    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("task-input-wrapper");

    inputWrapper.innerHTML = `
      <input id="taskInput" placeholder="Add a new task..." />
      <button id="addTaskBtn">Add</button>
    `;

    app.appendChild(inputWrapper);

    const input = inputWrapper.querySelector("input");
    const button = inputWrapper.querySelector("button");

    button.addEventListener("click", () => {

      const taskTitle = input.value.trim();

      if(!taskTitle) return;

      addTask(taskTitle, getActiveProjectId());

      input.value = "";

      window.refreshUI();

    });

    // 8 - loop through every task in the array
    getActiveTasks().forEach(task => {
        // 9 - create an new HTML element for each task
        const taskEl = document.createElement("div");
        // 9.1.1 - adding a dedicated task
        taskEl.classList.add("task-card");
        // 9.1 - add status classes
        taskEl.classList.add(task.status);
        // 9.2 - add priority
        taskEl.classList.add(task.priority);


        const project = projects.find(p => p.id === task.projectId);

        taskEl.style.borderLeft = `6px solid ${project.color}`;

        // 10 - fill the element with HTML content using task data
        // 10.1 - makes JS variables visible UI
        taskEl.innerHTML = `
          <h3 style="color:grey; font-size:19px; ">${task.title}</h3>

          <p>${task.description}</p>

          <small>Status: ${task.status}</small>
          <small>Priority: ${task.priority}</small>
        `;

      // 29 - attaching the click listener before 
      // the append because the element gets added to the behaviour
      // before entering the page

      // 29.1 - creating button dynamically first
      const btn = document.createElement("button");
      btn.classList.add("complete-btn");
      // 29.2 - updating the status
      btn.textContent = task.status === "done" ? "Undo" : "Complete";

      // 29.1.0 - addEventListener on the button
      btn.addEventListener("click", () =>  {

        // 29.1.1 - update task status
        updateTaskStatus(task.id);

        // 29.1.2 - re-render update tasks
        window.refreshUI();

      });

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {

        deleteTask(task.id);

        window.refreshUI();

      })

      // 29.3 append the created button 
      // so it appears on screen
      taskEl.appendChild(btn);
      // 29.3.1 - add the created element
      // so it appears on screen
      taskEl.appendChild(deleteBtn);
      // 11 - add the created element to the page
      // 11.1 - makes it appear on screen
      app.appendChild(taskEl);


    });
}