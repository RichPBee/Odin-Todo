import { todoArray } from '../Data/Todos';
import { buildElement } from '../Renderer/ElementBuilder';
import { removeElement, structurise } from '../Renderer/Renderer';
import { buildButton } from './Button';

const getTodoItemId = (todoObj) => { 
    return `todo-${todoObj.title}-${todoObj.todoId}`;
}

const buildTodoButtons = (todoObj) => {
    const todoButtons = buildElement('div', {
        id: `todo-item-btn-section-${todoObj.todoId}`,
        class: 'todo-item-btn-section'
    });
    
    const editBtnId = `edit-todo-${todoObj.todoId}`;
    const editTodo = buildButton({
        id: editBtnId,
        class: 'edit-todo-btn',
        class: 'todo-item-btn'
    }, 'Edit', () => { 
        console.log(editBtnId);
    });

    const expandBtnId = `expand-todo-${todoObj.todoId}`;
    const expandTodo = buildButton({
        id: expandBtnId,
        class: 'expand-todo-btn',
        class: 'todo-item-btn'
    }, 'Expand', () => { 
        console.log(expandBtnId);
    });

    const deleteBtnId = `delete-todo-${todoObj.todoId}`;
    const deleteTodo = buildButton({
        id: deleteBtnId,
        class: 'delete-todo-btn',
        class: 'todo-item-btn'
    }, 'Delete', () => { 
        removeElement(getTodoItemId(todoObj));
    });

    const markBtnId = `mark-todo-${todoObj.todoId}`;
    const markComplete = buildButton({
        id: markBtnId,
        class: 'mark-todo-btn',
        class: 'todo-item-btn'
    }, 'Complete', () => {
        todoObj.isComplete = true;
    });

    return (
        [todoButtons,
            editTodo,
            expandTodo,
            deleteTodo,
            markComplete
        ])
}

const buildTodoDetails = (todoObj) => {
    const todoDetails = buildElement('div', {
        id: `todo-details-${todoObj.todoId}`,
        class: 'todo-details'
    });

    const todoTitle = buildElement('h4', {
        id: `todo-title-${todoObj.todoId}`,
        class: 'todo-title'
    }, todoObj.title);

    const todoInfo = buildElement('div', {
        id: `todo-info-${todoObj.todoId}`,
        class: 'todo-info'
    })

    const dueDate = buildElement('p', {
        id: `todo-dueDate-${todoObj.todoId}`,
        class: 'todo-detail-text'
    }, todoObj.dueDate);

    const todoProject = buildElement('p', {
        id: `todo-project-${todoObj.todoId}`,
        class: 'todo-detail-text'
    }, todoObj.project);

    return (
        [todoDetails,
            todoTitle,
                [todoInfo,
                    dueDate,
                    todoProject
                ]
        ]
    )
}

const buildTodoComponent = (todoObj) => {
    const todo = buildElement('div', {
        id: `todo-${todoObj.title}-${todoObj.todoId}`,
        class: 'todo-item'
    })


    const doneIndicator = buildElement('div', {
        class: todoObj.isComplete ? 'todo-done-true' : 'todo-done-false'
    });

    const todoDetails = buildTodoDetails(todoObj);

    const todoButtons = buildTodoButtons(todoObj);
    
    return structurise(
        [todo,
            doneIndicator,
            todoDetails,
            todoButtons
        ])
}

const buildTodoSection = () => {
    const todoSection = buildElement('div', {
        id: 'todo-section'
    })
    const structArray = [todoSection]
    todoArray.reverse().forEach((todo) => { 
        structArray.push(buildTodoComponent(todo));
    })
    return structurise(structArray);
}

export {buildTodoSection}