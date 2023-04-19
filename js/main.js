let currentTheme = 'frontend-theme';
let darkMode = false;

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcher = document.getElementById('theme-switcher');
  const skillButtons = document.querySelectorAll('.skill-button');

  function applyTheme(theme, isDarkMode) {
    const body = document.body;
    body.classList.remove('frontend-theme', 'backend-theme', 'dark-mode');
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
      theme = theme.replace('-dark', '');
    }

    body.classList.add(theme);

    // Actualiza los colores de los enlaces y botones
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((navLink) => navLink.style.color = '');
    skillButtons.forEach((skillButton) => {
      skillButton.style.backgroundColor = '';
      skillButton.style.color = '';
    });

    localStorage.setItem("currentTheme", theme);
    localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
  }

  skillButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const skill = event.target.dataset.skill;
      currentTheme = `${skill}-theme`;
      applyTheme(currentTheme, darkMode);
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
});
