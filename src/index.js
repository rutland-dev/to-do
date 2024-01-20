import './style.css';
import { buildUI } from './DOM.js';
const { differenceInCalendarDays } = require('date-fns');

//****************************************************************************** */
let taskList = [
    {
        name: "Beer",
        description: "Buy this at the store",
        due: new Date(2024, 1, 20),
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
        priority: "medium",
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
        priority: "medium",
        notes: "Write notes here...",
        complete: true,
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

function createTask(name, description, due, project, priority, notes) {
    const task = {};
    task.name = name;
    task.description = description;
    task.due = due;
    task.project = project;
    task.priority = priority;
    task.notes = notes;
    task.complete = false;

    taskList.push(task);
};

//****************************************************************************** */
function getComparedDate(dueDate) {
    const result = differenceInCalendarDays(
        dueDate,
        getCurrentDate()
    );

    return result;
};

//****************************************************************************** */
function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const formattedDate = new Date(year, month, day);

    return formattedDate;
};

//****************************************************************************** */
let projectList = ["Default"];

//****************************************************************************** */
document.addEventListener('DOMContentLoaded', function() {
    buildProjectList();
    buildUI("All");
});

//****************************************************************************** */
function buildProjectList() {
    taskList.forEach(task => {
        if (!projectList.includes(task.project)) {
            projectList.push(task.project);
        }
    });
};

//****************************************************************************** */
function buildDisplayedTaskList(displayedProject) {
    let displayedTaskList = [];
    taskList.forEach(task => {
        if (displayedProject === "All") {
            displayedTaskList.push(task);
        } else {
            if (task.project === displayedProject) {
                displayedTaskList.push(task);
            }
        }
    });

    return displayedTaskList;
};

//****************************************************************************** */
function changeTaskStatus(task) {
    taskList.forEach(obj => {
        if (obj.name === task) {
            if (obj.complete === false) {
                obj.complete = true;
            } else {
                obj.complete = false;
            }
        }
    });
};

//****************************************************************************** */
export {
    projectList,
    buildDisplayedTaskList,
    changeTaskStatus
}
//***********LOOK INTO CSS MINIFYING WHEN YOU'RE DONE */