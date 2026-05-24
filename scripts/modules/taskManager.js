// 25.1 - import the tasks from the seedData.js file in the mock folder
import { tasks } from "../../mock/seedData.js";
// 25.2 - import the activeProjectId from the store.js in the data folder
import { getActiveProjectId } from "../data/store.js";


// 25 - return only task that belong 
// to the currently active project
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
}