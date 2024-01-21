import './style.css';
import { projectList, buildDisplayedTaskList, changeTaskStatus, createTask, createProject } from './index.js';

//****************************************************************************** */
function buildUI(projectName) {
    clearBody();

    const headerDiv = buildHeader();
    document.body.appendChild(headerDiv);

    const menuDiv = buildMenu();
    document.body.appendChild(menuDiv);

    const newProjectFormDiv = buildNewProjectForm();
    document.body.appendChild(newProjectFormDiv);

    const newTaskFormDiv = buildNewTaskForm();
    document.body.appendChild(newTaskFormDiv);

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
    
    const viewByDateDiv = buildViewByDateButtons();
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

    const createNewProjectButton = buildNewProjectButton();
    createNewButtonsDiv.appendChild(createNewProjectButton);

    const createNewTaskButton = buildNewTaskButton();
    createNewButtonsDiv.appendChild(createNewTaskButton);

    return createNewButtonsDiv;
};

//****************************************************************************** */
function buildNewProjectButton() {
    const createNewProjectButton = document.createElement('button');
    createNewProjectButton.setAttribute('type', 'button');
    createNewProjectButton.setAttribute('id', 'create-new-project-button');
    createNewProjectButton.textContent = "New Project";
    createNewProjectButton.addEventListener('click', () => {
        document.querySelector('#new-project-form-div').setAttribute('style', 'display: flex');
        document.querySelector('#new-project-form-input').focus();
    })

    return createNewProjectButton;
};

//****************************************************************************** */
function buildNewProjectForm() {
    const newProjectFormDiv = document.createElement('div');
    newProjectFormDiv.setAttribute('id', 'new-project-form-div');

    const newProjectForm = document.createElement('form');
    newProjectForm.setAttribute('id', 'new-project-form');
    newProjectFormDiv.appendChild(newProjectForm);

    const newProjectFormLabel = document.createElement('label');
    newProjectFormLabel.setAttribute('id', 'new-project-form-label');
    newProjectFormLabel.setAttribute('for', 'new-project-form-input');
    newProjectFormLabel.textContent = "New Project Name:";
    newProjectForm.appendChild(newProjectFormLabel);

    const newProjectFormInput = document.createElement('input');
    newProjectFormInput.setAttribute('id', 'new-project-form-input');
    newProjectFormInput.setAttribute('name', 'new-project-form-input');
    newProjectFormInput.setAttribute('type', 'text');
    newProjectForm.appendChild(newProjectFormInput);

    const newProjectFormButtonsDiv = document.createElement('div');
    newProjectFormButtonsDiv.setAttribute('id', 'new-project-form-buttons-div');
    newProjectForm.appendChild(newProjectFormButtonsDiv);

    const newProjectFormSubmitButton = document.createElement('button');
    newProjectFormSubmitButton.setAttribute('type', 'button');
    newProjectFormSubmitButton.textContent = "Submit";
    newProjectFormButtonsDiv.appendChild(newProjectFormSubmitButton);
    newProjectFormSubmitButton.addEventListener('click', () => {
        createProject(newProjectFormInput.value);
        buildUI(document.querySelector('#project-menu-list-select').value);
        newProjectForm.reset();
        newProjectFormDiv.setAttribute('style', 'display: none;');
    });

    const newProjectFormCancelButton = document.createElement('button');
    newProjectFormCancelButton.setAttribute('type', 'button');
    newProjectFormCancelButton.textContent = "Cancel";
    newProjectFormButtonsDiv.appendChild(newProjectFormCancelButton);
    newProjectFormCancelButton.addEventListener('click', () => {
        newProjectForm.reset();
        newProjectFormDiv.setAttribute('style', 'display: none;');
    });

    return newProjectFormDiv;
}

//****************************************************************************** */
function buildNewTaskButton() {
    const createNewTaskButton = document.createElement('button');
    createNewTaskButton.setAttribute('type', 'button');
    createNewTaskButton.setAttribute('id', 'create-new-task-button');
    createNewTaskButton.textContent = "New Task";
    createNewTaskButton.addEventListener('click', () => {
        document.querySelector('#new-task-form-div').setAttribute('style', 'display: flex;');
        document.querySelector('#new-task-form-name-input').focus();
    });

    return createNewTaskButton;
};

//****************************************************************************** */
function buildViewByDateButtons() {
    const viewByDateDiv = document.createElement('div');
    viewByDateDiv.setAttribute('id', 'view-by-date-div');

    const viewByDateText = document.createElement('p');
    viewByDateText.setAttribute('id', 'view-by-date-buttons-text');
    viewByDateText.textContent = "View By Due Date";
    viewByDateDiv.appendChild(viewByDateText);

    const viewByDateButtonsDiv = document.createElement('div');
    viewByDateButtonsDiv.setAttribute('id', 'view-by-date-buttons-div');
    viewByDateDiv.appendChild(viewByDateButtonsDiv);

    const viewByDateButtonAll = document.createElement('button');
    viewByDateButtonAll.setAttribute('id', 'view-by-date-button-all');
    viewByDateButtonAll.textContent = "All";
    viewByDateButtonsDiv.appendChild(viewByDateButtonAll);

    const viewByDateButtonToday = document.createElement('button');
    viewByDateButtonToday.setAttribute('id', 'view-by-date-button-today');
    viewByDateButtonToday.textContent = "Today";
    viewByDateButtonsDiv.appendChild(viewByDateButtonToday);

    const viewByDateButtonWeek = document.createElement('button');
    viewByDateButtonWeek.setAttribute('id', 'view-by-date-button-week');
    viewByDateButtonWeek.textContent = "7 Days";
    viewByDateButtonsDiv.appendChild(viewByDateButtonWeek);

    return viewByDateDiv;
};

function buildNewTaskForm() {
    const newTaskFormDiv = document.createElement('div');
    newTaskFormDiv.setAttribute('id', 'new-task-form-div');

    const newTaskForm = document.createElement('form');
    newTaskForm.setAttribute('id', 'new-task-form');
    newTaskFormDiv.appendChild(newTaskForm);

    const newTaskFormNameDiv = document.createElement('div');
    newTaskFormNameDiv.setAttribute('id', 'new-task-form-name-div');
    newTaskFormNameDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormNameDiv);

    const newTaskFormNameLabel = document.createElement('label');
    newTaskFormNameLabel.setAttribute('id', 'new-task-form-name-label');
    newTaskFormNameLabel.setAttribute('for', 'new-task-form-name-input');
    newTaskFormNameLabel.textContent = "Task Name:"
    newTaskFormNameDiv.appendChild(newTaskFormNameLabel);
    const newTaskFormNameInput = document.createElement('input');
    newTaskFormNameInput.setAttribute('id', 'new-task-form-name-input');
    newTaskFormNameInput.setAttribute('type', 'text');
    newTaskFormNameInput.setAttribute('name', 'new-task-form-name-input');
    newTaskFormNameDiv.appendChild(newTaskFormNameInput);

    const newTaskFormDescriptionDiv = document.createElement('div');
    newTaskFormDescriptionDiv.setAttribute('id', 'new-task-form-description-div');
    newTaskFormDescriptionDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormDescriptionDiv);

    const newTaskFormDescriptionLabel = document.createElement('label');
    newTaskFormDescriptionLabel.setAttribute('id', 'new-task-form-description-label');
    newTaskFormDescriptionLabel.setAttribute('for', 'new-task-form-description-input');
    newTaskFormDescriptionLabel.textContent = "Description:"
    newTaskFormDescriptionDiv.appendChild(newTaskFormDescriptionLabel);
    const newTaskFormDescriptionInput = document.createElement('input');
    newTaskFormDescriptionInput.setAttribute('id', 'new-task-form-description-input');
    newTaskFormDescriptionInput.setAttribute('type', 'text');
    newTaskFormDescriptionInput.setAttribute('name', 'new-task-form-description-input');
    newTaskFormDescriptionDiv.appendChild(newTaskFormDescriptionInput);

    const newTaskFormDueDiv = document.createElement('div');
    newTaskFormDueDiv.setAttribute('id', 'new-task-form-due-div');
    newTaskFormDueDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormDueDiv);

    const newTaskFormDueLabel = document.createElement('label');
    newTaskFormDueLabel.setAttribute('id', 'new-task-form-due-label');
    newTaskFormDueLabel.setAttribute('for', 'new-task-form-due-input');
    newTaskFormDueLabel.textContent = "Due:"
    newTaskFormDueDiv.appendChild(newTaskFormDueLabel);
    const newTaskFormDueInput = document.createElement('input');
    newTaskFormDueInput.setAttribute('id', 'new-task-form-due-input');
    newTaskFormDueInput.setAttribute('type', 'date');
    newTaskFormDueInput.setAttribute('name', 'new-task-form-due-input');
    newTaskFormDueDiv.appendChild(newTaskFormDueInput);

    const newTaskFormProjectDiv = document.createElement('div');
    newTaskFormProjectDiv.setAttribute('id', 'new-task-form-project-div');
    newTaskFormProjectDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormProjectDiv);

    const newTaskFormProjectLabel = document.createElement('label');
    newTaskFormProjectLabel.setAttribute('id', 'new-task-form-project-label');
    newTaskFormProjectLabel.setAttribute('for', 'new-task-form-project-input');
    newTaskFormProjectLabel.textContent = "Project:"
    newTaskFormProjectDiv.appendChild(newTaskFormProjectLabel);
    const newTaskFormProjectInput = document.createElement('select');
    newTaskFormProjectInput.setAttribute('id', 'new-task-form-project-input');
    newTaskFormProjectInput.setAttribute('type', 'select');
    newTaskFormProjectInput.setAttribute('name', 'new-task-form-project-input');
    projectList.forEach(projectName => {
        const projectListOption = buildProjectListOptions(projectName);
        newTaskFormProjectInput.appendChild(projectListOption);
    });
    newTaskFormProjectDiv.appendChild(newTaskFormProjectInput);

    const newTaskFormPriorityDiv = document.createElement('div');
    newTaskFormPriorityDiv.setAttribute('id', 'new-task-form-priority-div');
    newTaskFormPriorityDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormPriorityDiv);

    const newTaskFormPriorityTextDiv = document.createElement('div');
    newTaskFormPriorityTextDiv.setAttribute('id', 'new-task-form-priority-text-div');
    newTaskFormPriorityDiv.appendChild(newTaskFormPriorityTextDiv);
    const newTaskFormPriorityText = document.createElement('h2');
    newTaskFormPriorityText.textContent = "Priority Level:";
    newTaskFormPriorityTextDiv.appendChild(newTaskFormPriorityText);

    const newTaskFormPriorityRadioDiv = document.createElement('div');
    newTaskFormPriorityRadioDiv.setAttribute('id', 'new-task-form-priority-radio-div');
    newTaskFormPriorityDiv.appendChild(newTaskFormPriorityRadioDiv);

    const newTaskFormPriorityLowDiv = document.createElement('div');
    newTaskFormPriorityLowDiv.classList.add('radio-div');
    newTaskFormPriorityRadioDiv.appendChild(newTaskFormPriorityLowDiv);

    const newTaskFormPriorityLabelLow = document.createElement('label');
    newTaskFormPriorityLabelLow.classList.add('container');
    newTaskFormPriorityLabelLow.setAttribute('id', 'new-task-form-priority-label-low');
    newTaskFormPriorityLabelLow.setAttribute('for', 'new-task-form-priority-radio-low');
    newTaskFormPriorityLabelLow.textContent = "Low"
    newTaskFormPriorityLowDiv.appendChild(newTaskFormPriorityLabelLow);
    const newTaskFormPriorityInputLow = document.createElement('input');
    newTaskFormPriorityInputLow.setAttribute('id', 'new-task-form-priority-radio-low');
    newTaskFormPriorityInputLow.setAttribute('type', 'radio');
    newTaskFormPriorityInputLow.setAttribute('name', 'new-task-form-priority-radio');
    newTaskFormPriorityInputLow.setAttribute('value', 'low');
    newTaskFormPriorityInputLow.classList.add('priority-radio');
    const newTaskFormPriorityInputLowCustomRadio = document.createElement('span');
    newTaskFormPriorityInputLowCustomRadio.classList.add('checkmark');
    newTaskFormPriorityLabelLow.appendChild(newTaskFormPriorityInputLow);
    newTaskFormPriorityLabelLow.appendChild(newTaskFormPriorityInputLowCustomRadio);

    const newTaskFormPriorityMediumDiv = document.createElement('div');
    newTaskFormPriorityMediumDiv.classList.add('radio-div');
    newTaskFormPriorityRadioDiv.appendChild(newTaskFormPriorityMediumDiv);

    const newTaskFormPriorityLabelMedium = document.createElement('label');
    newTaskFormPriorityLabelMedium.classList.add('container');
    newTaskFormPriorityLabelMedium.setAttribute('id', 'new-task-form-priority-label-medium');
    newTaskFormPriorityLabelMedium.setAttribute('for', 'new-task-form-priority-radio-medium');
    newTaskFormPriorityLabelMedium.textContent = "Medium"
    newTaskFormPriorityMediumDiv.appendChild(newTaskFormPriorityLabelMedium);
    const newTaskFormPriorityInputMedium = document.createElement('input');
    newTaskFormPriorityInputMedium.setAttribute('id', 'new-task-form-priority-radio-medium');
    newTaskFormPriorityInputMedium.setAttribute('type', 'radio');
    newTaskFormPriorityInputMedium.setAttribute('name', 'new-task-form-priority-radio');
    newTaskFormPriorityInputMedium.setAttribute('value', 'medium');
    newTaskFormPriorityInputMedium.classList.add('priority-radio');
    const newTaskFormPriorityInputMediumCustomRadio = document.createElement('span');
    newTaskFormPriorityInputMediumCustomRadio.classList.add('checkmark');
    newTaskFormPriorityLabelMedium.appendChild(newTaskFormPriorityInputMedium);
    newTaskFormPriorityLabelMedium.appendChild(newTaskFormPriorityInputMediumCustomRadio);

    const newTaskFormPriorityHighDiv = document.createElement('div');
    newTaskFormPriorityHighDiv.classList.add('radio-div');
    newTaskFormPriorityRadioDiv.appendChild(newTaskFormPriorityHighDiv);

    const newTaskFormPriorityLabelHigh = document.createElement('label');
    newTaskFormPriorityLabelHigh.classList.add('container');
    newTaskFormPriorityLabelHigh.setAttribute('id', 'new-task-form-priority-label-high');
    newTaskFormPriorityLabelHigh.setAttribute('for', 'new-task-form-priority-radio-high');
    newTaskFormPriorityLabelHigh.textContent = "High"
    newTaskFormPriorityHighDiv.appendChild(newTaskFormPriorityLabelHigh);
    const newTaskFormPriorityInputHigh = document.createElement('input');
    newTaskFormPriorityInputHigh.setAttribute('id', 'new-task-form-priority-radio-high');
    newTaskFormPriorityInputHigh.setAttribute('type', 'radio');
    newTaskFormPriorityInputHigh.setAttribute('name', 'new-task-form-priority-radio');
    newTaskFormPriorityInputHigh.setAttribute('value', 'high');
    newTaskFormPriorityInputHigh.classList.add('priority-radio');
    const newTaskFormPriorityInputHighCustomRadio = document.createElement('span');
    newTaskFormPriorityInputHighCustomRadio.classList.add('checkmark');
    newTaskFormPriorityLabelHigh.appendChild(newTaskFormPriorityInputHigh);
    newTaskFormPriorityLabelHigh.appendChild(newTaskFormPriorityInputHighCustomRadio);

    const newTaskFormNotesDiv = document.createElement('div');
    newTaskFormNotesDiv.setAttribute('id', 'new-task-form-notes-div');
    newTaskFormNotesDiv.classList.add('new-task-form-inner-divs');
    newTaskForm.appendChild(newTaskFormNotesDiv);

    const newTaskFormNotesLabel = document.createElement('label');
    newTaskFormNotesLabel.setAttribute('id', 'new-task-form-notes-label');
    newTaskFormNotesLabel.setAttribute('for', 'new-task-form-notes-input');
    newTaskFormNotesLabel.textContent = "Notes:"
    newTaskFormNotesDiv.appendChild(newTaskFormNotesLabel);
    const newTaskFormNotesInput = document.createElement('textarea');
    newTaskFormNotesInput.setAttribute('id', 'new-task-form-notes-input');
    newTaskFormNotesInput.setAttribute('name', 'new-task-form-notes-input');
    newTaskFormNotesDiv.appendChild(newTaskFormNotesInput);

    const newTaskFormButtonsDiv = document.createElement('div');
    newTaskFormButtonsDiv.setAttribute('id', 'new-task-form-buttons-div');
    newTaskForm.appendChild(newTaskFormButtonsDiv);

    const newTaskFormSubmitButton = document.createElement('button');
    newTaskFormSubmitButton.setAttribute('type', 'button');
    newTaskFormSubmitButton.setAttribute('id', 'new-task-form-submit-button');
    newTaskFormSubmitButton.textContent = "Submit";
    newTaskFormButtonsDiv.appendChild(newTaskFormSubmitButton);
    newTaskFormSubmitButton.addEventListener('click', () => {
        const checkedRadioList = document.querySelectorAll('.priority-radio');
        let checkedRadio
        checkedRadioList.forEach(radio => {
            if (radio.checked) {
                checkedRadio = radio;
            }
        });
        console.log(newTaskFormDueInput.value);
        createTask( 
            newTaskFormNameInput.value,
            newTaskFormDescriptionInput.value,
            newTaskFormDueInput.value,
            newTaskFormProjectInput.value,
            checkedRadio.value,
            newTaskFormNotesInput.value
        );
        buildUI(document.querySelector('#project-menu-list-select').value);
        console.log(document.querySelector('#project-menu-list-select').value);
        newTaskForm.reset();
        newTaskFormDiv.setAttribute('style', 'display: none;');
    });

    const newTaskFormCancelButton = document.createElement('button');
    newTaskFormCancelButton.setAttribute('type', 'button');
    newTaskFormCancelButton.setAttribute('id', 'new-task-form-cancel-button');
    newTaskFormCancelButton.textContent = "Cancel";
    newTaskFormButtonsDiv.appendChild(newTaskFormCancelButton);
    newTaskFormCancelButton.addEventListener('click', () => {
        newTaskForm.reset();
        newTaskFormDiv.setAttribute('style', 'display: none;');
    });

    return newTaskFormDiv;
};

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
        createdTask.addEventListener('click', () => {
            expandTask(task);
        });

        const checkBox = document.createElement('input');
        checkBox.type = "checkbox";
        checkBox.value = task.name;
        checkBox.setAttribute('id', `${task.name}-input`)
        checkBox.addEventListener('click', () => {
            changeTaskStatus(task.name)
            document.querySelector('#task-view-div').remove();
            document.body.appendChild(buildTaskView(projectName));
        });

        const createdTaskInnerDiv = document.createElement('div');
        createdTaskInnerDiv.classList.add('created-task-inner-div');
        createdTaskInnerDiv.addEventListener('click', () => {
            const detailsDiv = document.querySelector(`#${task.name}-li + .created-task-details-div`);
            if (detailsDiv.getAttribute('style') === "display: grid;") {
                detailsDiv.setAttribute('style', 'display: none;');
            } else {
                detailsDiv.setAttribute('style', 'display: grid;');
            }
        });

        const label = document.createElement('label');
        label.setAttribute('id', `${task.name}-label`);
        label.textContent = task.name;

        const createdTaskDueDiv = document.createElement('div');
        createdTaskDueDiv.classList.add('created-task-due-div');
        createdTaskDueDiv.textContent = `- ${task.formattedDue}`;

        const createdTaskDetailsDiv = document.createElement('div');
        createdTaskDetailsDiv.classList.add('created-task-details-div');

        const createdTaskDescriptionDiv = document.createElement('div');
        createdTaskDescriptionDiv.classList.add('created-task-description-div');
        const createdTaskDescriptionSpan = document.createElement('span');
        createdTaskDescriptionSpan.classList.add('created-task-description-span');
        createdTaskDescriptionSpan.textContent = "Description:";
        createdTaskDescriptionDiv.appendChild(createdTaskDescriptionSpan);
        const createdTaskDescriptionContent = document.createElement('p');
        createdTaskDescriptionContent.textContent = task.description;
        createdTaskDescriptionSpan.appendChild(createdTaskDescriptionContent);
        createdTaskDetailsDiv.appendChild(createdTaskDescriptionDiv);

        const createdTaskProjectDiv = document.createElement('div');
        createdTaskProjectDiv.classList.add('created-task-project-div');
        const createdTaskProjectSpan = document.createElement('span');
        createdTaskProjectSpan.textContent = "Project:";
        createdTaskProjectDiv.appendChild(createdTaskProjectSpan);
        const createdTaskProjectName = document.createElement('p');
        createdTaskProjectName.textContent = task.project;
        createdTaskProjectSpan.appendChild(createdTaskProjectName);
        createdTaskDetailsDiv.appendChild(createdTaskProjectDiv);

        const createdTaskPriorityDiv = document.createElement('div');
        createdTaskPriorityDiv.classList.add('created-task-priority-div');
        const createdTaskPrioritySpan = document.createElement('span');
        createdTaskPrioritySpan.classList.add('created-task-priority-span');
        createdTaskPrioritySpan.textContent = "Priority:";
        createdTaskPriorityDiv.appendChild(createdTaskPrioritySpan);
        const createdTaskPriorityContent = document.createElement('p');
        createdTaskPriorityContent.textContent = task.priority;
        createdTaskPrioritySpan.appendChild(createdTaskPriorityContent);
        createdTaskDetailsDiv.appendChild(createdTaskPriorityDiv);

        const createdTaskNotesDiv = document.createElement('div');
        createdTaskNotesDiv.classList.add('created-task-notes-div');
        const createdTaskNotesSpan = document.createElement('span');
        createdTaskNotesSpan.classList.add('created-task-notes-span');
        createdTaskNotesSpan.textContent = "Notes:";
        createdTaskNotesDiv.appendChild(createdTaskNotesSpan);
        const createdTaskNotesContent = document.createElement('p');
        createdTaskNotesContent.textContent = task.notes;
        createdTaskNotesSpan.appendChild(createdTaskNotesContent);
        createdTaskDetailsDiv.appendChild(createdTaskNotesDiv);

        createdTask.appendChild(checkBox);
        createdTask.appendChild(createdTaskInnerDiv);
        createdTaskInnerDiv.appendChild(label);
        createdTaskInnerDiv.appendChild(createdTaskDueDiv);

        if (task.complete === true) {
            checkBox.setAttribute('checked', 'checked');
        }
        
        displayedTasksUL.appendChild(createdTask);
        displayedTasksUL.appendChild(createdTaskDetailsDiv);
    });

    return displayedTasksDiv;
};

//****************************************************************************** */
function getDisplayedTaskList(projectName) {
    const displayedTaskList = buildDisplayedTaskList(projectName);

    return displayedTaskList;
}

function expandTask(task) {
    
}

//****************************************************************************** */
export {
    buildUI
}