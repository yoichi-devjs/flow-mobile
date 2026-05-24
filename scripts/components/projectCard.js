// 12.1 - import the projects from the seedData.js in the mock folder
import { projects } from "../../mock/seedData.js";
// 12.2 - import setActiveProjectId 
import { setActiveProjectId, getActiveProjectId } from "../data/store.js";
// 12.3 - import getActiveTasks
import { getActiveTasks } from "../modules/taskManager.js";
// 12.4 - import renderTasks
import { renderTasks } from "../components/taskCard.js";

// 12 - get the container element where project buttons will be displayed
const projectContainer = document.getElementById("projects");
// 13 - render all project buttons to the page
export function renderProjects() {

    // 14 - clear the previous buttons before re-rendering
    projectContainer.innerHTML = "";

    // 15 - loop through each project array
    projects.forEach(project => {

        // 16 - create a new button element for the project
        const btn = document.createElement("button");

        // 17 - set button text to the project
        btn.textContent = project.name;

        // 18 - check if this project is active
        if (project.id === getActiveProjectId()) {

            // 19 - make active project visually different
             btn.style.fontWeight = "bold";
        }

        // 20 - click changes active project
        btn.addEventListener("click", () => {

            // 21 - update store correctly
            setActiveProjectId(project.id);

            // 22 - re-render project button
            // so active styling updates correctly 
            renderProjects();
            // 22.1 - render only tasks that belong 
            // to the active project
            renderTasks(getActiveTasks());
        });

        // 23 - add button to the container
        projectContainer.appendChild(btn);
    });
}
// 24 - test run / debug check
// confirms whether the DOM exists 
console.log(projectContainer);