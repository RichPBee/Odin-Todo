import { createProjectTab } from "../Components/Projects";
import { createNewProject, getProjectNames, projectsArray } from "./Projects";

const todoArray = [];

const checkProjectName = (todoProj) => { 
    const projectNames = getProjectNames();
    if (!projectNames.includes(todoProj)) {
        createNewProject(todoProj);
        createProjectTab(projectsArray[projectsArray.length - 1]);
    }
}

const sortTodoArray = () => {
    let asccending = true;
    todoArray.forEach((todo, i) => { 
        if (i !== 0 && todo.todoId < todoArray[i-1].todoId) {
            asccending = false;
        }
    })
    
    if ((todoArray[0].todoId < todoArray[1].todoId) && asccending) {
        return todoArray;
    }
    
    todoArray.forEach((todo, i) => { 
        if (i !== 0 && (todo.todoId < todoArray[i-1].todoId )) {
            todoArray.splice(i, 1);
            todoArray.splice(i - 1, 0, todo);
            resortTodoArray()
        }
        else if (todo.todoId === 0) { 
            todoArray.unshift(todo);
            resortTodoArray();
        }
    })
}

const resetTodoIds = () => {
    todoArray.forEach((todo, i ) => { 
        todo.todoId = i;
    })
    return todoArray;
}

const sortTodoByProject = (projectName) => { 
    const sortedTodos = [];
    todoArray.forEach((todo) => { 
        if (todo.project === projectName) {sortedTodos.push(todo)};
    });
    return sortedTodos;
}

const findCompleteTodos = () => { 
    const completed = [];
    todoArray.forEach((todo) => {
        if (todo.isComplete) {
            completed.push(todo);
        }
    })

    return completed;
}

const createTodoObj = (
    title, 
    desc, 
    dueDate, 
//    priority, 
    notes = "", 
    project = "",
    todoId = 0,
    isComplete = false,
) => 
{ 
    const todoObj = { 
    title: title,
    desc: desc,
    dueDate: dueDate,
//    priority: priority,
    notes: notes,
    project: project,
    todoId: todoId,
    isComplete: isComplete
    };
    todoArray.push(todoObj);
    todoObj.todoId = (todoArray.length - 1);
    checkProjectName(todoObj.project);
    return todoObj;
};

export {createTodoObj, findCompleteTodos, sortTodoByProject, todoArray};
