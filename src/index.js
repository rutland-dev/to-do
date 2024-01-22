import './style.css';
import { buildUI } from './DOM.js';
const { differenceInCalendarDays, format, parseISO } = require('date-fns');

//****************************************************************************** */
let taskList = [
    {
        name: "Beer",
        description: "Buy this at the store",
        due: new Date(2024, 0, 21),
        formattedDue: format(new Date(2024, 0, 21), "MM-dd-yyyy"),
        project: "Booze",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Cider",
        description: "Buy this at the store",
        due: new Date(2024, 0, 25),
        formattedDue: format(new Date(2024, 0, 25), "MM-dd-yyyy"),
        project: "Booze",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Whiskey",
        description: "Buy this at the store",
        due: new Date(2024, 0, 21),
        formattedDue: format(new Date(2024, 0, 21), "MM-dd-yyyy"),
        project: "Booze",
        priority: "medium",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Bread",
        description: "Buy this at the store",
        due: new Date(2024, 1, 1),
        formattedDue: format(new Date(2024, 1, 1), "MM-dd-yyyy"),
        project: "Groceries",
        priority: "low",
        notes: "Write notes here...",
        complete: false,
    },
    {
        name: "Milk",
        description: "Buy this at the store",
        due: new Date(2024, 0, 23),
        formattedDue: format(new Date(2024, 0, 23), "MM-dd-yyyy"),
        project: "Groceries",
        priority: "medium",
        notes: "Write notes here...",
        complete: true,
    },
    {
        name: "Cheese",
        description: "Buy this at the store",
        due: new Date(2024, 2, 1),
        formattedDue: format(new Date(2024, 1, 1), "MM-dd-yyyy"),
        project: "Groceries",
        priority: "high",
        notes: "Write notes here...",
        complete: false,
    },
];
let displayedTaskList = [];

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

    console.log(format(parsedDate, "MM-dd-yyyy"));

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
let projectList = ["Default"];

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
    getTaskListByDate
}
//***********LOOK INTO CSS MINIFYING WHEN YOU'RE DONE */