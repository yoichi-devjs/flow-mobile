// 3 - import the data from the seedData.js file (in the mock folder)
import { tasks, projects } from "../mock/seedData.js";
// 3.1 - import the renderTask from the taskCard.js (in the components folder)
import { renderTasks } from "./components/taskCard.js";
// 3.2 - import the renderProjects from the projectCard.js (in the components folder)
import { renderProjects } from "./components/projectCard.js"
// 3.3 - import the getActiveTasks from the taskManager.js (in the modules folder)
import { getActiveTasks } from "./modules/taskManager.js"
// 3.4 - import the activeProjectId from the store.js (in the data folder)
import { getActiveProjectId } from "./data/store.js"


// 4 - log to console to test everything has being coded 
// and imported/exported properly
console.log("PROJECTS:", projects)
console.log("TASKS:", tasks);

console.log("ACTIVE TASKS:", getActiveTasks());


// 27 - intitial render of all project buttons
renderProjects();
// 28 - initial render of tasks 
// using filtered tasks array
renderTasks(getActiveTasks());