import { buildElement } from "../Renderer/ElementBuilder"

const buildButton = (attributes, innerText, callback) => { 
    const btn = buildElement('button', attributes, innerText);
    btn.addEventListener('click', callback);
    return btn;
}

export {buildButton};