document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const btnSiguiente = document.getElementById("btnSiguiente");
      if (btnSiguiente) {
        btnSiguiente.classList.remove("hidden");
        btnSiguiente.classList.add("visible");
      }
    }, 10000); // Esperar 10 segundos
  });
  