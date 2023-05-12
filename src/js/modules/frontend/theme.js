export const body = document.body;
export const themeSwitcher = document.getElementById('theme-switcher');
export const skillButtons = document.querySelectorAll('.skill-button');
export const navLinks = document.querySelectorAll('.nav-link');

export function applyTheme(theme, isDarkMode) {
  body.classList.remove('frontend-theme', 'backend-theme', 'dark-mode');

  if (isDarkMode) {
    body.classList.add('dark-mode');
    theme = theme.replace('-dark', '');
  }

  body.classList.add(theme);

  // Actualiza los colores de los enlaces y botones
  navLinks.forEach((navLink) => navLink.style.color = '');
  skillButtons.forEach((skillButton) => {
    skillButton.style.backgroundColor = '';
    skillButton.style.color = '';
  });

  localStorage.setItem("currentTheme", theme);
  localStorage.setItem("darkMode", isDarkMode ? "true" : "false");
}
