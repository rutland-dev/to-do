import './style.css';
import { buildUI } from './DOM.js';

let taskList = [
    {
        name: "Beer",
        description: "Buy this at the store",
        due: new Date(2024-2-1),
        project: "Booze",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Wine",
        description: "Buy this at the store",
        due: new Date(2024-2-1),
        project: "Booze",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Whiskey",
        description: "Buy this at the store",
        due: new Date(2024-1-17),
        project: "Booze",
        priority: "med",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Bread",
        description: "Buy this at the store",
        due: new Date(2024-2-1),
        project: "Groceries",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Milk",
        description: "Buy this at the store",
        due: new Date(2024-1-17),
        project: "Groceries",
        priority: "med",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Cheese",
        description: "Buy this at the store",
        due: new Date(2024-2-1),
        project: "Groceries",
        priority: "high",
        notes: "Write notes here...",
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