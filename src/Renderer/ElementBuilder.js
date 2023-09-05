const resolveStyleType = (ele, k, v) => {
    switch (k) {
        case ('justifyContent'):
            ele.style.justifyContent = v;
            break;
        default:
            return;
    }
    return ele;
}

const buildElement = (
    type,
    attributes,
    innerText = '',
    children = [],
    styles = {}
) => { 
    let element = document.createElement(type);
    for (const [k, v] of Object.entries(attributes)) {
        element.setAttribute(`${k}`, v);
    }
    if (innerText) {
        element.innerText = innerText;
    }
    if (children.length !== 0) {
        children.forEach((child) => { 
            element.appendChild(child);
        })
    }
    if (Object.keys(styles).length !== 0) {
        for (const [k, v] of Object.entries(styles)) {
            const newElement = resolveStyleType(element, k, v);
            element = newElement;
        }
    }
    return element;
}

export {buildElement};