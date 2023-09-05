import {structurise} from '../Renderer/Renderer';
import { buildElement } from '../Renderer/ElementBuilder';
import {buildHeader} from './Header';
import {buildProjectsSection} from './Projects';
import {buildTodoSection} from './Todo';

const buildApp = () => { 
    const app = buildElement('div', {
        id: 'app'
    });
    
    const appBody = buildElement('div', {
        id: 'app-body'
    });
    
    const projectsSection = buildProjectsSection();
    const todoSection = buildTodoSection();
    
    const appHeader = buildHeader();

    return structurise(
        [app,
            appHeader,
            [appBody,
                projectsSection,
                todoSection
            ]
        ]
    )
}

export {buildApp}