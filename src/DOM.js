import './style.css';
import { projectList, buildDisplayedTaskList, changeTaskStatus } from './index.js';

//****************************************************************************** */
function buildUI(projectName) {
    clearBody();

    const headerDiv = buildHeader();
    document.body.appendChild(headerDiv);

    const menuDiv = buildMenu();
    document.body.appendChild(menuDiv);

    const taskViewDiv = buildTaskView(projectName);
    document.body.appendChild(taskViewDiv);

    //build footer
};

//****************************************************************************** */
function clearBody() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
};

//****************************************************************************** */
function buildHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header-div');

    const headerText = document.createElement('h1');
    headerText.setAttribute('id', 'header-text');
    headerText.textContent = "Task Master";

    headerDiv.appendChild(headerText);
    
    return headerDiv;
};

//****************************************************************************** */
function buildMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div');

    const createNewButtonsDiv = buildNewButtons();
    menuDiv.appendChild(createNewButtonsDiv);

    const projectMenuDiv = buildProjectMenu();
    menuDiv.appendChild(projectMenuDiv);
    
    const viewByDateDiv = buildViewByDateBtns();
    menuDiv.appendChild(viewByDateDiv);

    return menuDiv;
};

//****************************************************************************** */
function buildProjectMenu() {
    const projectMenuDiv = document.createElement('div');
    projectMenuDiv.setAttribute('id', 'project-menu-div');

    const projectMenuListDiv = document.createElement('div');
    projectMenuListDiv.setAttribute('id', 'project-menu-list-div');

    const projectMenuListForm = buildProjectList();
    
    const createNewProjectBtn = buildNewProjectButton();

    projectMenuDiv.appendChild(projectMenuListForm);

    return projectMenuDiv;
};

//****************************************************************************** */
function buildProjectList() {
    const projectMenuListForm = document.createElement('form');
    projectMenuListForm.setAttribute('id', 'project-menu-list-form');

    const projectMenuListLabel = document.createElement('label');
    projectMenuListLabel.setAttribute('id', 'project-menu-list-label');
    projectMenuListLabel.setAttribute('for', 'project-menu-list');
    projectMenuListLabel.textContent = "View By Project"

    const projectMenuListSelect = document.createElement('select');
    projectMenuListSelect.setAttribute('id', 'project-menu-list-select');
    projectMenuListSelect.setAttribute('name', 'project-menu-list-select');
    projectMenuListSelect.addEventListener('change', () => {
        document.querySelector('#task-view-div').remove();
        const taskViewDiv = buildTaskView(projectMenuListSelect.value);
        document.body.appendChild(taskViewDiv);
    });

    const AllOption = document.createElement('option');
    AllOption.setAttribute('value', "All");
    AllOption.textContent = "All";
    projectMenuListSelect.appendChild(AllOption);

    projectList.forEach(projectName => {
        const projectListOption = buildProjectListOptions(projectName, projectMenuListSelect);
        projectMenuListSelect.appendChild(projectListOption);
    });
    projectMenuListForm.appendChild(projectMenuListLabel);
    projectMenuListForm.appendChild(projectMenuListSelect);

    return projectMenuListForm;
};

//****************************************************************************** */
function buildProjectListOptions(projectName) {
    const projectListOption = document.createElement('option');
    projectListOption.setAttribute('value', projectName);
    projectListOption.textContent = projectName;

    return projectListOption;
};

//****************************************************************************** */
function buildNewButtons() {
    const createNewButtonsDiv = document.createElement('div');
    createNewButtonsDiv.setAttribute('id', 'create-new-buttons-div');

    const createNewProjectBtn = buildNewProjectButton();
    createNewButtonsDiv.appendChild(createNewProjectBtn);

    const createNewTaskBtn = buildNewTaskButton();
    createNewButtonsDiv.appendChild(createNewTaskBtn);

    return createNewButtonsDiv;
};

//****************************************************************************** */
function buildNewProjectButton() {
    const createNewProjectBtn = document.createElement('button');
    createNewProjectBtn.setAttribute('type', 'button');
    createNewProjectBtn.setAttribute('id', 'create-new-project-button');
    createNewProjectBtn.textContent = "New Project";

    return createNewProjectBtn;
};

//****************************************************************************** */
function buildNewTaskButton() {
    const createNewTaskBtn = document.createElement('button');
    createNewTaskBtn.setAttribute('type', 'button');
    createNewTaskBtn.setAttribute('id', 'create-new-task-button');
    createNewTaskBtn.textContent = "New Task";

    return createNewTaskBtn;
}

//****************************************************************************** */
function buildViewByDateBtns() {
    const viewByDateDiv = document.createElement('div');
    viewByDateDiv.setAttribute('id', 'view-by-date-div');

    const viewByDateText = document.createElement('p');
    viewByDateText.setAttribute('id', 'view-by-date-buttons-text');
    viewByDateText.textContent = "View By Due Date";
    viewByDateDiv.appendChild(viewByDateText);

    const viewByDateBtnsDiv = document.createElement('div');
    viewByDateBtnsDiv.setAttribute('id', 'view-by-date-buttons-div');
    viewByDateDiv.appendChild(viewByDateBtnsDiv);

    const viewByDateBtnAll = document.createElement('button');
    viewByDateBtnAll.setAttribute('id', 'view-by-date-button-all');
    viewByDateBtnAll.textContent = "All";
    viewByDateBtnsDiv.appendChild(viewByDateBtnAll);

    const viewByDateBtnToday = document.createElement('button');
    viewByDateBtnToday.setAttribute('id', 'view-by-date-button-today');
    viewByDateBtnToday.textContent = "Today";
    viewByDateBtnsDiv.appendChild(viewByDateBtnToday);

    const viewByDateBtnWeek = document.createElement('button');
    viewByDateBtnWeek.setAttribute('id', 'view-by-date-button-week');
    viewByDateBtnWeek.textContent = "7 Days";
    viewByDateBtnsDiv.appendChild(viewByDateBtnWeek);

    return viewByDateDiv;
}

//****************************************************************************** */
function buildTaskView(projectName) {
    const taskViewDiv = document.createElement('div');
    taskViewDiv.setAttribute('id', 'task-view-div');

    const taskViewTitleDiv = document.createElement('div');
    taskViewTitleDiv.setAttribute('id', 'task-view-title-div');
    taskViewDiv.appendChild(taskViewTitleDiv);

    const taskViewTitleText = document.createElement('h2');
    taskViewTitleText.setAttribute('id', 'task-view-title-text');
    taskViewTitleText.textContent = "Tasks";
    taskViewTitleDiv.appendChild(taskViewTitleText);

    const displayedTasksDiv = displayTasks(projectName);
    taskViewDiv.appendChild(displayedTasksDiv);
    
    return taskViewDiv;
}

//****************************************************************************** */
function displayTasks(projectName) {
    const displayedTasksDiv = document.createElement('div');
    displayedTasksDiv.setAttribute('id', 'displayed-task-div');

    const displayedTasksUL = document.createElement('ul');
    displayedTasksUL.setAttribute('id', 'displayed-tasks-ul');
    displayedTasksDiv.appendChild(displayedTasksUL);

    const displayedTaskList = getDisplayedTaskList(projectName);
    displayedTaskList.forEach(task => {
        const createdTask = document.createElement('li');
        createdTask.setAttribute('id', `${task.name}-li`);
        createdTask.classList.add('task');

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.value = task.name;
        checkBox.setAttribute('id', `${task.name}-input`)
        checkBox.addEventListener('click', () => {
            changeTaskStatus(task.name)
            document.querySelector('#task-view-div').remove();
            document.body.appendChild(buildTaskView(projectName));
        });
        const label = document.createElement('label');
        label.setAttribute('id', `${task.name}-label`);
        label.textContent = task.name;

        createdTask.appendChild(checkBox);
        createdTask.appendChild(label);

        if (task.complete === true) {
            checkBox.setAttribute('checked', 'checked');
        }
        
        displayedTasksUL.appendChild(createdTask);
    });

    return displayedTasksDiv;
};

//****************************************************************************** */
function getDisplayedTaskList(projectName) {
    const displayedTaskList = buildDisplayedTaskList(projectName);

    return displayedTaskList;
}

//****************************************************************************** */
export {
    buildUI
}