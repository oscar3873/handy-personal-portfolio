// const consoleTextArray = [
//     'soy un programador universitario con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles.',
//     'tengo un perfil "full-stack", lo que significa que puedo trabajar en todas las áreas de un proyecto de software.',
//   ];

const consoleTextArray = [
    "este portafolio se esta construyendo...",
    "asi que por favor, regresa pronto."
]

const consoleElem = document.querySelector('.console');
const prompt = 'C:\\oscar-vargas\\portafolio> ';

let index = 0;
let textIndex = 0;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const escribir = async () => {
if (textIndex >= consoleTextArray.length) {
    textIndex = 0;
}

const consoleText = consoleTextArray[textIndex];

while (index <= consoleText.length) {
    const char = consoleText.charAt(index);
    const delay = (char === '\n') ? (3000 + Math.random() * 700) : (Math.random() * 100);
    await sleep(delay);

    consoleElem.innerHTML = prompt + consoleText.slice(0, index) + '<span class="blink" style="color: white;">|</span>';
    index++;
}

await sleep(4000);
index = consoleText.length;
await borrar();
};

const borrar = async () => {
while (index >= 0) {
    const delay = 0.5 * 50;
    await sleep(delay);

    consoleElem.innerHTML = prompt + consoleTextArray[textIndex].slice(0, index) + '<span class="blink" style="color: white;">|</span>';
    index--;
}

// Restablece el índice de inicio de escritura a 0 antes de comenzar a escribir el siguiente texto en el arreglo.
index = 0;

textIndex++;
await escribir();
};

escribir();
