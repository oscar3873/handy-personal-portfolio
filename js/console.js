const consoleTextArray = [
    'soy un programador universitario con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles.',
    'tengo un perfil "full-stack", lo que significa que puedo trabajar en todas las áreas de un proyecto de software.',
    'Desde la planificación y el diseño hasta la implementación y el mantenimiento.'
  ];
const consoleElem = document.querySelector('.console');
const prompt = 'C:\\oscar-vargas\\portafolio> ';

let index = 0;
let delay = 0;
let textIndex = 0;

function animateConsole() {

if (textIndex >= consoleTextArray.length) {
    textIndex = 0;
}

if (textIndex < consoleTextArray.length) {
    const consoleText = consoleTextArray[textIndex];
    if (index <= consoleText.length) {
    const char = consoleText.charAt(index);
    if (char === '\n') {
        delay = 1200 + Math.random() * 500;
    } else {
        delay = Math.random() * 80;
    }

    setTimeout(() => {
        consoleElem.innerHTML = prompt + consoleText.slice(0, index) + '<span class="blink">|</span>';
        index++;
        animateConsole();
    }, delay);
    } else {
    setTimeout(() => {
        consoleElem.style.animation = 'delete 0.5s forwards';
        setTimeout(() => {
        consoleElem.style.animation = 'type 2s forwards';
        index = 0;
        textIndex++;
        animateConsole();
        }, 600);
    }, 2000); // Tiempo de espera antes de borrar y escribir el siguiente texto del arreglo
    }
}
}

animateConsole();
