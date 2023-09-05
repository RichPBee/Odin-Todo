import { createTodoObj } from "../Data/Todos";
import { buildElement } from "../Renderer/ElementBuilder";
import { updateAppBody } from "../Renderer/EventHandler";
import { structurise } from "../Renderer/Renderer";
import { buildButton } from "./Button";

const handleCancel = () => {
    updateAppBody('main-view', 'todo-form');
}

const handleSubmit = () => { 
    if (document.getElementById('todo-form')) {
        const formVals = document.querySelectorAll('.todo-form-input');
        createTodoObj(
            formVals[0].value,
            formVals[1].value,
            formVals[2].value,
            formVals[3].value,
            formVals[4].value,
        );
        updateAppBody('main-view', 'todo-form');
    }
}

const buildForm = () => {
    const form = buildElement('form', {
        id: 'todo-form'
    })

    const formInputs = buildFormInputs();
    const formButtons = buildFormButtons();
    return(
        [form,
            formInputs,
            formButtons
        ]
    )
}

const buildFormButtons = () => {
    const buttonContainer = buildElement('div', {
        id: 'todo-form-btn-container'
    });

    const cancelButton = buildButton({
        id: 'todo-form-cancel-btn',
        class: 'todo-form-btn',
        type: 'button'
    }, 'cancel', handleCancel);

    const submitButton = buildButton({
        id: 'todo-form-submit-btn',
        class: 'todo-form-btn',
        type: 'button'
    }, 'submit', handleSubmit);

    return (
        [buttonContainer,
            cancelButton,
            submitButton
        ])
}

const buildFormInputs = () => {
    const inputContainer = buildElement('div', {
        id: 'todo-input-container'
    });
    
    const titleInput = buildElement('input', {
        id: 'todo-title-input',
        class: 'todo-form-input',
        type: 'text',
        placeholder: 'Title*: '
    })

    const descInput = buildElement('input', {
        id: 'todo-desc-input',
        class: 'todo-form-input',
        type: 'text',
        placeholder: 'Description*: '
    })

    const dateInput = buildElement('input', {
        id: 'todo-date-input',
        class: 'todo-form-input',
        type: 'text',
        placeholder: 'Due Date*: '
    })

    const notesInput = buildElement('input', {
        id: 'todo-notes-input',
        class: 'todo-form-input',
        type: 'text',
        placeholder: 'Notes: '
    })

    const projectInput = buildElement('input', {
        id: 'todo-project-input',
        class: 'todo-form-input',
        type: 'text',
        placeholder: 'Project: '
    })

    return (
    [inputContainer,
        titleInput,
        descInput,
        dateInput,
        notesInput,
        projectInput,     
    ])
    ;
}

const buildTodoForm = () => {
    const formContainer = buildElement('div', {
        id: 'todo-form-container'
    });

    const form = buildForm();

    return structurise(
        [formContainer,
            form,
        ]
    )
}

export {buildTodoForm};