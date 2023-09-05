import { structurise, clearSection, removeElement} from "../Renderer/Renderer";
import { buildElement } from "../Renderer/ElementBuilder";
import { buildButton } from "./Button";
import { updateAppBody } from "../Renderer/EventHandler";
import { findCompleteTodos } from "../Data/Todos";

const handleAddTodo = () => {
        //let tempNodes = [];
        //const childNodes = appBody.childNodes;
        //childNodes.forEach((node) => {
        //    tempNodes.push(node);
        //})
        updateAppBody('todo-form');
}   

const handleDeleteCompleted = () => {
    const completed = findCompleteTodos();
    completed.forEach((todoObj) => { 
        const eleId = `todo-${todoObj.title}-${todoObj.todoId}`
        removeElement(eleId);
    })
}

const handleCreateProject = () => { 
    updateAppBody('project-form');
}

const handleManageProjects = () => {

}

const buildSearchSortSection = () => {
    const searchSortSection = buildElement('div', {
        id: "search-sort-section"
    });

    const searchBar = buildElement('input', {
        id: "search-bar"
    })
    
    const searchBarContainer = buildElement('div' , {
        id: "search-bar-container"
   },);

    const sortButtonSection = buildElement('div', {
        id: 'sort-button-section'
    });

    const sortButton = buildButton({
        id: "sort-todos-btn"
    }, `Sort: `);

    const selectProjectButton = buildButton({
        id: "select-project-btn"
    }, `Project: `);   

    return (
        [searchSortSection,
            [
                searchBarContainer,
                    searchBar
            ],
            [
                sortButtonSection,
                    sortButton,
                    selectProjectButton
            ]
        ]);
};

const buildButtonSection = () => { 
    const buttonSection = buildElement('div', {
        id: "header-btns-section"
    });

    const addTodo = buildButton({
        id: "add-todo-btn",
        class: "header-btn-rhs"
    },
    "Add Todo",
    handleAddTodo);

    const createProject = buildButton({
        id: "create-project-btn",
        class: "header-btn-rhs"
    },
    "New Project",
    handleCreateProject);

    const manageProjects = buildButton({
        id: "manage-projects-btn",
        class: "header-btn-rhs"
    },
    "Manage Projects",
    handleManageProjects);

    //this button will need to trigger warning prompt.
    const deleteCompleted = buildButton({
        id: "delete-completed-btn",
        class: "header-btn-rhs"
    },
    "Delete Completed",
    handleDeleteCompleted);

    return (
        [buttonSection,
            addTodo,
            deleteCompleted,
            createProject,
            manageProjects,
        ]);
}

const buildHeader = () => { 
    const header = buildElement('div', {
        id: "app-header"
    });

    const searchSortSection = buildSearchSortSection();
    const buttonSection = buildButtonSection();

    return structurise(
    [header,
        searchSortSection, 
        buttonSection,        
    ]);
}

export {buildHeader};