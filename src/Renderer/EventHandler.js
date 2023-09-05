import { buildApp } from '../Components/App.js';
import { buildProjectForm } from '../Components/ProjectForm.js';
import { buildProjectsSection } from '../Components/Projects.js';
import { buildTodoSection } from '../Components/Todo.js';
import { buildTodoForm } from '../Components/TodoForm.js';
import { appendSections, clearSection, structurise } from './Renderer.js';

const loadApp = (mainContainer) => { 
    const app = buildApp();
    appendSections(mainContainer, app)
}

const updateAppBody = (id, prevId = '') => {
    const pageId = !prevId ? prevId = 'app-body' : `app-body-${prevId}`;
    const appBody = document.getElementById(pageId);
    const structArray = [appBody]
    clearSection(appBody);
    switch (id) {
        case 'main-view':
            appBody.setAttribute('id', 'app-body');
            structArray.push(buildProjectsSection(), buildTodoSection())
            break;
        case 'todo-form':
            appBody.setAttribute('id', 'app-body-todo-form')
            structArray.push(buildTodoForm());
            break;
        case 'project-form':
            appBody.setAttribute('id', 'app-body-project-form');
            structArray.push(buildProjectForm());
            break;
    }

    structurise(structArray);
}

export {loadApp, updateAppBody};