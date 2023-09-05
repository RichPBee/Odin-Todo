import { projectsArray } from "../Data/Projects";
import { sortTodoByProject, todoArray } from "../Data/Todos";
import { buildElement } from "../Renderer/ElementBuilder";
import { structurise, updateSection } from "../Renderer/Renderer";
import { buildButton } from "./Button";
import { buildTodoComponent } from "./Todo";

const createAllTab = () => { 
    const tab = buildButton({
        id: 'all-tab-btn',
        class: 'tab-btn'
    }, 'All', () => { 
        const allTodos = todoArray;
        const components = [];
        allTodos.forEach((todo) => {
            components.push(buildTodoComponent(todo))
        });
        updateSection('todo-section', components);
    });

    return tab
}

const createProjectTab = (projectObj) => { 
    const tab = buildButton({
        id: `${projectObj.name}-tab-btn`,
        class: 'tab-btn'
    }, `${projectObj.name}`, () => { 
        const sortedTodos = sortTodoByProject(projectObj.name);
        const components = [];
        sortedTodos.forEach((todo) => { 
            components.push(buildTodoComponent(todo));
        });
        updateSection('todo-section', components);
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

export {buildProjectsSection, createProjectTab}