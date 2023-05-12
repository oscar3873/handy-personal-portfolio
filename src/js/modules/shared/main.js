import { body, themeSwitcher, skillButtons, applyTheme } from '../frontend/theme.js';

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
});
