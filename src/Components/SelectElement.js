import { buildElement } from "../Renderer/ElementBuilder"

const buildSelect = (attributes, callback, options) => { 

    const slct = buildElement('select', {
      attributes});
      slct.addEventListener('change', callback)
    
    const structArray = [slct]

    options.forEach((option) => { 
        const opt = buildElement('option', {
            value: option.value
        }, option.innerText);
        structArray.push(opt)
    });

    return structurise(structArray);
}

export {buildSelect};