import './style.css';
import { projectList, buildDisplayedTaskList } from './index.js';

//****************************************************************************** */
function buildUI() {
    clearBody();

    const headerDiv = buildHeader();
    document.body.appendChild(headerDiv);

    const menuDiv = buildMenu();
    document.body.appendChild(menuDiv);

    const taskViewDiv = buildTaskView();
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

    const createNewProjectBtnDiv = document.createElement('div');
    createNewProjectBtnDiv.setAttribute('id', 'create-new-project-button-div');
    
    const createNewProjectBtn = buildNewProjectButton();

    projectMenuDiv.appendChild(projectMenuListForm);
    
    createNewProjectBtnDiv.appendChild(createNewProjectBtn);
    projectMenuDiv.appendChild(createNewProjectBtnDiv);

    return projectMenuDiv;
};

//****************************************************************************** */
function buildProjectList() {
    const projectMenuListForm = document.createElement('form');
    projectMenuListForm.setAttribute('id', 'project-menu-list-form');

    const projectMenuListLabel = document.createElement('label');
    projectMenuListLabel.setAttribute('id', 'project-menu-list-label');
    projectMenuListLabel.setAttribute('for', 'project-menu-list');
    projectMenuListLabel.textContent = "Project"

    const projectMenuListSelect = document.createElement('select');
    projectMenuListSelect.setAttribute('id', 'project-menu-list-select');
    projectMenuListSelect.setAttribute('name', 'project-menu-list-select');

    projectList.forEach(projectName => {
        buildProjectListOptions(projectName, projectMenuListSelect);
        console.log(`option built: ${projectName}`);
    });
    projectMenuListForm.appendChild(projectMenuListLabel);
    projectMenuListForm.appendChild(projectMenuListSelect);

    return projectMenuListForm;
};

//****************************************************************************** */
function buildProjectListOptions(projectName, projectMenuListSelect) {
    const projectListOption = document.createElement('option');
    projectListOption.setAttribute('value', projectName);
    projectListOption.textContent = projectName;
    projectMenuListSelect.appendChild(projectListOption);
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
function buildTaskView() {
    const taskViewDiv = document.createElement('div');
    taskViewDiv.setAttribute('id', 'task-view-div');

    const taskViewTitleDiv = document.createElement('div');
    taskViewTitleDiv.setAttribute('id', 'task-view-title-div');
    taskViewDiv.appendChild(taskViewTitleDiv);

    const taskViewTitleText = document.createElement('h2');
    taskViewTitleText.setAttribute('id', 'task-view-title-text');
    taskViewTitleText.textContent = "Tasks";
    taskViewTitleDiv.appendChild(taskViewTitleText);

    const displayedTasksDiv = displayTasks("All");
    taskViewDiv.appendChild(displayedTasksDiv);
    
    return taskViewDiv;
}

//****************************************************************************** */
function displayTasks(project) {
    const displayedTasksDiv = document.createElement('div');
    displayedTasksDiv.setAttribute('id', 'displayed-task-div');

    const displayedTasksUL = document.createElement('ul');
    displayedTasksUL.setAttribute('id', 'displayed-tasks-ul');
    displayedTasksDiv.appendChild(displayedTasksUL);

    const displayedTaskList = getDisplayedTaskList(project);
    displayedTaskList.forEach(task => {
        const createdTask = document.createElement('li');
        createdTask.setAttribute('id', task.name);
        createdTask.classList.add('task');
        createdTask.textContent = task.name;
        displayedTasksUL.appendChild(createdTask);
    });

    return displayedTasksDiv;
};

//****************************************************************************** */
function getDisplayedTaskList(project) {
    const displayedTaskList = buildDisplayedTaskList(project);
    return displayedTaskList;
}

//****************************************************************************** */
export {
    buildUI
}