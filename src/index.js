import './style.css';
import { buildUI } from './DOM.js';

let taskList = [
    {
        name: "Beer",
        due: new Date(2024-2-1),
        project: "Booze",
        complete: false,
    },
    {
        name: "Wine",
        due: new Date(2024-2-1),
        project: "Booze",
        complete: false,
    },
    {
        name: "Whiskey",
        due: new Date(2024-1-17),
        project: "Booze",
        complete: false,
    },
    {
        name: "Bread",
        due: new Date(2024-2-1),
        project: "Groceries",
        complete: false,
    },
    {
        name: "Milk",
        due: new Date(2024-1-17),
        project: "Groceries",
        complete: false,
    },
    {
        name: "Cheese",
        due: new Date(2024-2-1),
        project: "Groceries",
        complete: false,
    },
];

let projectList = ["Default"];

document.addEventListener('DOMContentLoaded', function() {
    buildProjectList();
    buildUI();
})

function buildProjectList() {
    taskList.forEach(task => {
        if (!projectList.includes(task.project)) {
            projectList.push(task.project);
        }
    });
}

function buildDisplayedTaskList(displayedProject) {
    let displayedTaskList = [];
    taskList.forEach(task => {
        if (displayedProject === "All") {
            displayedTaskList.push(task);
        };
    });
    
    return displayedTaskList;
};

export {
    projectList,
    buildDisplayedTaskList
}
//***********LOOK INTO CSS MINIFYING WHEN YOU'RE DONE */