document.querySelector(".skill-button[data-skill='frontend']").addEventListener("click", changeTheme);
document.querySelector(".skill-button[data-skill='backend']").addEventListener("click", changeTheme);

function changeTheme() {
  // Obtén todos los elementos con la clase "theme-element"
  const themeElements = document.querySelectorAll(".theme-element");

  // Agrega la clase "falling" a todos los elementos
  themeElements.forEach((element) => {
    element.classList.add("falling");
  });

  // Cambia el tema (aquí es donde debes agregar tu lógica de cambio de tema actual)

  // Después de un tiempo (por ejemplo, 500 ms), agrega la clase "rising" a todos los elementos
  setTimeout(() => {
    themeElements.forEach((element) => {
      element.classList.remove("falling");
      element.classList.add("rising");
    });

    // Después de otro tiempo (por ejemplo, 500 ms), elimina la clase "rising"
    setTimeout(() => {
      themeElements.forEach((element) => {
        element.classList.remove("rising");
      });
    }, 500);
  }, 500);
}
