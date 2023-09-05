const projectsArray = [];

const createNewProject = (
    name, 
    desc, 
    endDate, 
//    priority, 
    notes = "",
    id = 0,
    todos = []
) => 
{ 
    const projectObj = { 
    name: name,
    desc: desc,
    endDate, endDate,
//    priority: priority,
    notes: notes,
    id: id,
    todos: todos
    };
    projectsArray.push(projectObj);
    projectObj.id = (projectsArray.length - 1);
    return projectObj;
};

export {createNewProject, projectsArray};