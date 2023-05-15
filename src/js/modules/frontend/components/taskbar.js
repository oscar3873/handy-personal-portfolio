import { technologiesBack, technologiesFront } from "../../shared/main.js";

const FRONTEND_THEME = "frontend-theme";
const BACKEND_THEME = "backend-theme";

const skills = document.querySelector(".skill-cards");
export const skillButtons = document.querySelectorAll(".skill-button");

function crearCard(nombreTecnologia) {
  const card = document.createElement("div");
  card.className = "skill-card box fade-in";

  const cardHeader = document.createElement("div");
  cardHeader.className = "skill-card-header";

  const cardBody = document.createElement("div");
  cardBody.className = "skill-card-body";

  const icon = document.createElement("img");
  icon.src = `assets/images/${nombreTecnologia}.svg`;
  icon.alt = nombreTecnologia;
  icon.className = "skill-icon";

  const titulo = document.createElement("h4");
  titulo.textContent = nombreTecnologia;

  const parrafo = document.createElement("p");
  parrafo.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima molestias fuga dicta dolorem,
    sed illo.`;

  cardHeader.appendChild(icon);
  cardHeader.appendChild(titulo);

  cardBody.appendChild(parrafo);

  card.appendChild(cardHeader);
  card.appendChild(cardBody);

  return card;
}

function mostrarIconos(tema) {
    skills.innerHTML = "";
    const tecnologias =
      tema === FRONTEND_THEME ? technologiesFront : technologiesBack;
  
    tecnologias.forEach((tecnologia) => {
      const card = crearCard(tecnologia);
      skills.appendChild(card);
    });
  
    // Observar los nuevos elementos
    document.querySelectorAll('.fade-in').forEach((element, index) => {
      let delay = index * 0.5;
      element.style.transitionDelay = `${delay}s`;
      observer.observe(element);
    });
  }
  
  // Configuración del observador
  let options = {
    root: null, // El viewport
    rootMargin: "0px",
    threshold: 0, // Cuánto del elemento debe estar en la ventana para activar el observador
  };
  
  // Función de callback que se llama cuando un elemento entra o sale de la ventana
  let callback = (entries, observer) => {
    entries.forEach(entry => {
      // Si el elemento está en la ventana
      if (entry.isIntersecting) {
        // Quita la clase fade-in, lo que inicia la animación
        entry.target.classList.remove('fade-in');
        // Deja de observar el elemento
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Crea el observador con la configuración y callback
  let observer = new IntersectionObserver(callback, options);


skillButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tema =
    button.textContent.trim().toLowerCase() === "front-end" ? FRONTEND_THEME : BACKEND_THEME;
    mostrarIconos(tema);
  });
});

// Consulta el tema actual en el localStorage y muestra los íconos correspondientes
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("currentTheme");
  if (savedTheme) {
    mostrarIconos(savedTheme);
  } else {
    mostrarIconos(FRONTEND_THEME); // Si no hay tema guardado, muestra el tema frontend por defecto
  }
});