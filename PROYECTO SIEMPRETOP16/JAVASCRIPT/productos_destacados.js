const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const cerrar = document.querySelector(".modal-close");
const imagenes = document.querySelectorAll(".producto-destacado");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
