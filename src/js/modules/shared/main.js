import { body, themeSwitcher, skillButtons, applyTheme } from '../frontend/theme.js';
import { mostrarIconos } from "../frontend/components/skillCards.js";
import { observeElements } from "../frontend/components/scroll_animation.js";

const FRONTEND_THEME = "frontend-theme";
const BACKEND_THEME = "backend-theme";

let currentTheme = 'frontend-theme';
let darkMode = false;
export let technologiesFront = ['React', 'Angular', 'HTML', 'CSS', 'Bootstrap', 'Figma', 'Material-UI'];
export let technologiesBack = ['NodeJS', 'Express', 'MongoDB', 'MySQL', 'Django', 'SpringBoot'];

document.addEventListener('DOMContentLoaded', function () {
  function onSkillButtonClick(event) {
    const skill = event.target.dataset.skill;
    currentTheme = `${skill}-theme`;
    applyTheme(currentTheme, darkMode);
    
  }

  skillButtons.forEach((button) => {
    button.addEventListener('click', onSkillButtonClick);
    button.addEventListener("click", () => {
      const tema =
        button.textContent.trim().toLowerCase() === "front-end" ? FRONTEND_THEME : BACKEND_THEME;
      mostrarIconos(tema);
      observeElements();
    });
  });

  themeSwitcher.addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme(currentTheme, darkMode);
  });

  // Carga el tema guardado en localStorage (si existe) o utiliza el tema predeterminado
  const savedTheme = localStorage.getItem("currentTheme");
  if (savedTheme) {
    currentTheme = savedTheme;
  }

  // Carga el estado del modo oscuro guardado en localStorage (si existe)
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode) {
    darkMode = savedDarkMode === "true";
  }

  applyTheme(currentTheme, darkMode);
  mostrarIconos(currentTheme);
  observeElements();
});

//Animaciones
const subtitle = document.querySelector('.presentation-subtitle');

function animateSubtitle() {
  subtitle.classList.add('animate');
}

// Activamos la animación cuando el elemento está en el viewport
window.addEventListener('scroll', () => {
  const elementPosition = subtitle.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (elementPosition < screenHeight * 0.8) {
    animateSubtitle();
  }
});
