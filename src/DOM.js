import './style.css';
import { projectList } from './index.js';

function buildUI() {
    clearBody();
    buildHeader();
    buildMenu();
    //build task view area
    //build footer
};

function clearBody() {
    while (document.body.firstChild) {
        document.body.removeChild(document.body.firstChild);
    }
};

function buildHeader() {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header-div');

    const headerText = document.createElement('h1');
    headerText.setAttribute('id', 'header-text');
    headerText.textContent = "Task Master";

    headerDiv.appendChild(headerText);
    document.body.appendChild(headerDiv);
}

function buildMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('id', 'menu-div');
    buildProjectMenu(menuDiv);
};

function buildProjectMenu(menuDiv) {
    const projectMenuDiv = document.createElement('div');
    projectMenuDiv.setAttribute('id', 'project-menu-div');

    const projectMenuListDiv = document.createElement('div');
    projectMenuListDiv.setAttribute('id', 'project-menu-list-div');

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

    const createNewProjectBtnDiv = document.createElement('div');
    createNewProjectBtnDiv.setAttribute('id', 'create-new-project-button-div');
    
    const createNewProjectBtn = document.createElement('button');
    createNewProjectBtn.setAttribute('type', 'button');
    createNewProjectBtn.setAttribute('id', 'create-new-project-button');
    createNewProjectBtn.textContent = "New Project";

    projectMenuDiv.appendChild(projectMenuListForm);
    projectMenuListForm.appendChild(projectMenuListLabel);
    projectMenuListForm.appendChild(projectMenuListSelect);

    createNewProjectBtnDiv.appendChild(createNewProjectBtn);
    projectMenuDiv.appendChild(createNewProjectBtnDiv);

    menuDiv.appendChild(projectMenuDiv);

    document.body.appendChild(menuDiv);
};

function buildProjectListOptions(projectName, projectMenuListSelect) {
    const projectListOption = document.createElement('option');
    projectListOption.setAttribute('value', projectName);
    projectListOption.textContent = projectName;
    projectMenuListSelect.appendChild(projectListOption);
}

export {
    buildUI
}