// 25.2 - import the activeProjectId from the store.js in the data folder
import { getActiveProjectId } from "../data/store.js";
import { tasks as defaultTasks } from "../../mock/seedData.js";

// my mobile app doesn't work, so I am debugging it by adding the below
// so now the app loads from the localStorage first and falls back to seedData.js if empty
// add/delete/update always affect same array reference
let tasks = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;
// 25 - return only task that belong 
// to the currently active project

// 25.1 - add a save tasks function
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getActiveTasks() {

    // 26 - filter tasks by matching projectId
    return tasks.filter(t => t.projectId === getActiveProjectId());
}

// 30 - implement a switchState function
export function switchState(state) {
    switch (state) {
        case "loading":
            return "loading";

        case "success":
            return "success";

        case "error":
            return "error";
    }
}

// 31 - implement an updateTaskStatus function
export function updateTaskStatus(taskId) {

    // 31.1 - find matching tasks
    const task = tasks.find(t => t.id === taskId);

    // 31.2 - safety check
    if(!task) return;

    // 31.3 - cycle status
    switch(task.status) {

        case "todo":
            task.status = "doing";
            break;

        case "doing":
            task.status = "done";
            break;

        case "done":
            task.status = "todo";
            break;
    }

    // 31.4 - save updated tasks
    saveTasks();
}

// 31.5 - expanding my initial idea with a todo list

// 31.6 - implement an addTask function 
export function addTask(title, projectId) {

    console.log("TITLE RECEIVED:", title);

    // 31.7 - newTask object
    const newTask = {
        id: crypto.randomUUID(),
        projectId,
        title,
        description: "",
        status: "todo",
        priority: "low",
        createdAt: new Date().toISOString()
    };

    console.log(tasks); // temporary test
    // 31.8 - push tasks into the newTask
    tasks.push(newTask);

    saveTasks();
}

// 31.9 - implement a toggle function
export function toggleTaskStatus(taskId) {

    const task = tasks.find(t => t.id === taskId);

    if (!task) return;

    task.status = task.status === "done" ? "todo" : "done";

    saveTasks();
}

// 31.9.1 - delete task function
export function deleteTask(taskId) {

    const index = tasks.findIndex(t => t.id === taskId);

    if (index === -1) return;

    tasks.splice(index, 1);

    saveTasks();
}