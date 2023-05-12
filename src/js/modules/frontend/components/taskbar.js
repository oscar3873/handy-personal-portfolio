import { technologiesBack, technologiesFront } from '../../shared/main.js';

const iconos = document.querySelector('.barra-tareas-iconos');
export const skillButtons = document.querySelectorAll('.skill-button');

function crearIcono(nombreTecnologia, tema) {
    const icono = document.createElement('div');
    icono.className = 'barra-tareas-icono';
    icono.classList.add(tema)
    icono.style.backgroundImage = `url(images/${nombreTecnologia}.svg)`; // Asumiendo que los iconos están en una carpeta llamada "images"
    return icono;
}

function mostrarIconos(tema) {
    iconos.innerHTML = '';

    const tecnologias = tema === 'frontend-theme' ? technologiesFront : technologiesBack;
    
    tecnologias.forEach((tecnologia) => {
        const icono = crearIcono(tecnologia, tema);
        iconos.appendChild(icono);
    });
}

skillButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
        const tema = button.innerHTML === 'Front-end' ? 'frontend-theme' : 'backend-theme';
        mostrarIconos(tema);
    });
});

// Consulta el tema actual en el localStorage y muestra los íconos correspondientes
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem("currentTheme");
    if (savedTheme) {
        mostrarIconos(savedTheme);
    } else {
        mostrarIconos('frontend-theme'); // Si no hay tema guardado, muestra el tema frontend por defecto
    }
});
