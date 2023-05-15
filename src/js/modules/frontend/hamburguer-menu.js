const hamburguer_name = 'hamburger-menu';
const nav_name = 'nav';
const hamburguerMenu = document.getElementById(hamburguer_name);
const nav = document.querySelector(nav_name);

hamburguerMenu.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  hamburguerMenu.classList.toggle('active');
  hamburguerMenu.classList.toggle('open');
  const navPosition = nav.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({ top: navPosition, behavior: 'smooth' });
});