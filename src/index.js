import './style.css';
import { buildUI } from './DOM.js';
const { differenceInCalendarDays, format, parseISO } = require('date-fns');

//****************************************************************************** */
let taskList = [];
let displayedTaskList = [];
let projectList = ["Default"];

//****************************************************************************** */
if (!localStorage.getItem("taskList")) {
    taskList = [];
} else {
    retrieveTaskList();
};

function retrieveTaskList() {
    taskList = JSON.parse(localStorage.getItem("taskList"));
}

//****************************************************************************** */
function createTask(name, description, due, project, priority, notes) {
    const task = {};
    const parsedDate = parseISO(due, 'yyyy, MM, dd', new Date());
    task.name = name;
    task.description = description;
    task.due = new Date(parsedDate);
    task.formattedDue = format(parsedDate, "MM-dd-yyyy");
    task.project = project;
    task.priority = priority;
    task.notes = notes;
    task.complete = false;

    taskList.push(task);

    localStorage.setItem("taskList", JSON.stringify(taskList));
};

function removeTask(removedTask) {
    let i = 0;
    taskList.forEach(task => {
        if (task.name === removedTask) {
            taskList.splice(i, 1);
        }
        i++;
    });
}

//****************************************************************************** */
function getComparedDate(dueDate) {
    const result = differenceInCalendarDays(
        dueDate,
        getCurrentDate()
    );

    return result;
};

function getTaskListByDate(viewByDate) {
    taskList.forEach(task => {
        const comparedDate = getComparedDate(task.due);
        if (comparedDate < viewByDate) {
            displayedTaskList.push(task);
        }

        return displayedTaskList;
    });
}

//****************************************************************************** */
function getCurrentDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const formattedDate = new Date(year, month, day);

    return formattedDate;
};

//****************************************************************************** */
function createProject(projectName) {
    projectList.push(projectName);
};

//****************************************************************************** */
document.addEventListener('DOMContentLoaded', function() {
    buildProjectList();
    buildUI("All");
});

//****************************************************************************** */
function buildProjectList() {
    displayedTaskList = [];
    taskList.forEach(task => {
        if (!projectList.includes(task.project)) {
            projectList.push(task.project);
        }
    });
};

//****************************************************************************** */
function buildDisplayedTaskList(projectName, viewByDate) {
    displayedTaskList = []
    let buildingTaskList = [];
    taskList.forEach(task => {
        const comparedDate = getComparedDate(task.due);
        if (viewByDate === "day") {
            if (comparedDate < 1) {
                buildingTaskList.push(task);
            }
        } else if (viewByDate === 'week') {
            if (comparedDate < 8) {
                buildingTaskList.push(task);
            }
        } else {
            buildingTaskList.push(task);
        }
    });

    buildingTaskList.forEach(task => {
        if (projectName === "All") {
            displayedTaskList.push(task);
        } else {
            if (task.project === projectName) {
                displayedTaskList.push(task);
            }
        }
    })

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
    changeTaskStatus,
    createTask,
    createProject,
    getTaskListByDate,
    removeTask
}
//***********LOOK INTO CSS MINIFYING WHEN YOU'RE DONE */