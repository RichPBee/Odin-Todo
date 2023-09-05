import { loadApp } from './Renderer/EventHandler';

window.onload = (event) => {
    const mainContainer = document.getElementById('content');
    loadApp(mainContainer);
}