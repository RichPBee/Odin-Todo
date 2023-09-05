import { createNewProject } from "../Data/Projects";
import { buildElement } from "../Renderer/ElementBuilder";
import { updateAppBody } from "../Renderer/EventHandler";
import { structurise } from "../Renderer/Renderer";
import { buildButton } from "./Button";

const handleCancel = () => {
    updateAppBody('main-view', 'project-form');
}

const handleSubmit = () => { 
    if (document.getElementById('project-form')) {
        const formVals = document.querySelectorAll('.project-form-input');
        createNewProject(
            formVals[0].value,
            formVals[1].value,
            formVals[2].value,
            formVals[3].value
        );
        updateAppBody('main-view', 'project-form');
    }
}

const buildForm = () => {
    const form = buildElement('form', {
        id: 'project-form'
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
        id: 'project-form-btn-container'
    });

    const cancelButton = buildButton({
        id: 'project-form-cancel-btn',
        class: 'project-form-btn',
        type: 'button'
    }, 'cancel', handleCancel);

    const submitButton = buildButton({
        id: 'project-form-submit-btn',
        class: 'project-form-btn',
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
        id: 'project-input-container'
    });
    
    const nameInput = buildElement('input', {
        id: 'project-title-input',
        class: 'project-form-input',
        type: 'text',
    })

    const descInput = buildElement('input', {
        id: 'project-desc-input',
        class: 'project-form-input',
        type: 'text',
    })

    const dateInput = buildElement('input', {
        id: 'project-date-input',
        class: 'project-form-input',
        type: 'text',
    })

    const notesInput = buildElement('input', {
        id: 'project-notes-input',
        class: 'project-form-input',
        type: 'text',
    })

    return (
    [inputContainer,
        nameInput,
        descInput,
        dateInput,
        notesInput,    
    ])
    ;
}

const buildProjectForm = () => {
    const formContainer = buildElement('div', {
        id: 'project-form-container'
    });

    const form = buildForm();

    return structurise(
        [formContainer,
            form,
        ]
    )
}

export {buildProjectForm};