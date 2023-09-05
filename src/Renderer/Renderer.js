import { buildTodoComponent } from "../Components/Todo";

const structurise = (componentArray) => { 
    const parentElement = componentArray[0];
    componentArray.forEach((component, i) => {
        if (i !== 0) {
            if (typeof component === 'object' && Array.isArray(component)) {
                appendSections(parentElement, component[0]);
                structurise(component);
            }
            else {
                appendSections(parentElement, component);
            }
        }
    })
    return parentElement;
}

const appendSections = (parentSection, ...childSections) => { 
    childSections.forEach((section) => { 
        if (Array.isArray(section)) {
            section.forEach((s) => {
                parentSection.appendChild(s);
            })
        } else {
            parentSection.appendChild(section)
        }   
    })
};

const clearSection = (section) => {
    section.innerHTML = '';
};

const removeElement = (eleId) => { 
    const ele = document.getElementById(eleId);
    ele.parentNode.removeChild(ele);
}

const updateSection = (parentId, newSection) => { 
    if (document.getElementById(parentId)) {
        const parentEle = document.getElementById(parentId);
        parentEle.innerHTML = '';
        structurise([parentEle].concat(newSection))
    }
}

const restoreSection = (section, prevState) => {
    section.innerHTML = '';
    if (Array.isArray(prevState)) {
        prevState.forEach((state) => { 
            appendSections(section, state)
        })
    }
    else {
        appendSections(section, prevState);
    }
}

export {appendSections, structurise, clearSection, removeElement, updateSection};