// Animación de corazones elegantes
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");

  // posición aleatoria en la pantalla
  corazon.style.left = Math.random() * 100 + "vw";

  // tamaño aleatorio
  const size = Math.random() * 20 + 15;
  corazon.style.width = size + "px";
  corazon.style.height = size + "px";

  // duración de caída aleatoria
  corazon.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 8000);
}

// Más corazones: cada 300ms
setInterval(crearCorazon, 300);
