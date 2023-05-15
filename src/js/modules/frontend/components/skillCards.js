import { technologiesBack, technologiesFront } from "../../shared/main.js";

const FRONTEND_THEME = "frontend-theme";
const BACKEND_THEME = "backend-theme";

const skills = document.querySelector(".skill-cards");

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

export function mostrarIconos(tema) {
    skills.innerHTML = "";
    const tecnologias =
      tema === FRONTEND_THEME ? technologiesFront : technologiesBack;
  
    tecnologias.forEach((tecnologia) => {
      const card = crearCard(tecnologia);
      skills.appendChild(card);
    });
}
