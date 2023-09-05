import { projectsArray } from "../Data/Projects";
import { buildElement } from "../Renderer/ElementBuilder";
import { structurise } from "../Renderer/Renderer";
import { buildButton } from "./Button";

const createAllTab = () => { 
    const tab = buildButton({
        id: 'all-tab-btn',
        class: 'tab-btn'
    }, 'All', () => { 
        console.log('all-tab-btn');
    });

    return tab
}

const createProjectTab = (projectObj) => { 
    const tab = buildButton({
        id: `${projectObj.name}-tab-btn`,
        class: 'tab-btn'
    }, `${projectObj.name}`, () => { 
        console.log(`${projectObj.name}-tab-btn`);
    })

    return tab
}

const buildProjectsSection = () => { 
    const projectsSection = buildElement('div', {
        id: 'projects-section'
    });
    const allTab = createAllTab();
    const structArray = [projectsSection, allTab];
    console.log(projectsArray);
    projectsArray.reverse().forEach((project) => { 
        structArray.push(createProjectTab(project))
    })

    return structurise(structArray)
}

export {buildProjectsSection}