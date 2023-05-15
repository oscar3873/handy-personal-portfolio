document.addEventListener('DOMContentLoaded', (event) => {

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

// Comienza a observar todos los elementos con la clase fade-in
// Comienza a observar todos los elementos con la clase fade-in
document.querySelectorAll('.fade-in').forEach((element, index) => {
    // Agregamos un delay basado en el índice del elemento de 0.5 segundos
    let delay = index * 0.8;
    element.style.transitionDelay = `${delay}s`;
    observer.observe(element);
  });
  

});
