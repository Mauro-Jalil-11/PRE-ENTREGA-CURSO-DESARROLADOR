const productos = [
  {
    id: 1,
    nombre: "Baño de crema extranutritivo",
    imagen: "IMAGENES/producto_1.png",
    descripcion: "Nutre, repara y da brillo. Reduce frizz, fortalece y suaviza el cabello dañado, dejándolo más sano, fuerte y fácil de peinar."
  },
  {
    id: 2,
    nombre: "Bálsamo",
    imagen: "IMAGENES/producto_2.png",
    descripcion: "Hidrata, suaviza y fortalece. Penetra la fibra capilar, reduce el daño y mejora la textura para un cabello más flexible y cuidado."
  },
  {
    id: 3,
    nombre: "Shampoo cremoso",
    imagen: "IMAGENES/producto_3.png",
    descripcion: "Define rizos, limpia suavemente y evita el daño. Mejora la forma, textura y salud del rizo sin resecar ni apelmazar el cabello."
  },
  {
    id: 4,
    nombre: "Shampoo ácido",
    imagen: "IMAGENES/producto_4.png",
    descripcion: "Protege el color, da brillo y suavidad. Neutraliza químicos, equilibra el pH y repara los efectos del tinte en cabellos teñidos."
  }
];

function mostrarProductos() {
  const contenedor = document.querySelector(".galeria-productos");
  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <button class="btn-guardar" data-id="${producto.id}">Guardar producto</button>
    `;

    contenedor.appendChild(card);
  });
}

function mostrarFavoritos() {
  const favoritos = JSON.parse(localStorage.getItem("productosGuardados")) || [];
  const contenedor = document.querySelector(".galeria-favoritos");
  contenedor.innerHTML = "";

  favoritos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("producto-card");

    card.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <button class="btn-quitar" data-id="${producto.id}">Quitar de favoritos</button>
    `;

    contenedor.appendChild(card);
  });

  
  document.getElementById("contador-favoritos").textContent = `(${favoritos.length})`;
}

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-guardar")) {
    const idProducto = parseInt(e.target.dataset.id);
    const productoSeleccionado = productos.find(p => p.id === idProducto);

    let guardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];
    const yaGuardado = guardados.some(p => p.id === productoSeleccionado.id);

    if (!yaGuardado) {
      guardados.push(productoSeleccionado);
      localStorage.setItem("productosGuardados", JSON.stringify(guardados));
      mostrarFavoritos();
    }
  }
});

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("btn-quitar")) {
    const idProducto = parseInt(e.target.dataset.id);
    let guardados = JSON.parse(localStorage.getItem("productosGuardados")) || [];

    guardados = guardados.filter(p => p.id !== idProducto);
    localStorage.setItem("productosGuardados", JSON.stringify(guardados));
    mostrarFavoritos();
  }
});

document.getElementById("vaciar-favoritos").addEventListener("click", () => {
  localStorage.removeItem("productosGuardados");
  mostrarFavoritos();
});

mostrarProductos();
mostrarFavoritos();







