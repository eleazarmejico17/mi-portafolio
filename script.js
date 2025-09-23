// script.js

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    // Mostrar/ocultar menú con animación
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("animate-slideDown");

    // Cambiar ícono (hamburguesa <-> X)
    if (menuIcon.classList.contains("fa-bars")) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
  });
});

// Agregamos animación con Tailwind + keyframes
tailwind.config = {
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.3s ease-out",
      },
    },
  },
};
