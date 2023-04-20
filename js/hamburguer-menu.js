const hamburguer_name = 'hamburger-menu';
const nav_name = 'nav';
const hamburguerMenu = document.getElementById(hamburguer_name);
const nav = document.querySelector(nav_name);

hamburguerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  nav.classList.toggle('nav-animate');
});
