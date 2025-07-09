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

const galeria = document.querySelector(".galeria-productos");

productos.forEach(producto => {
  const card = document.createElement("div");
  card.classList.add("producto-card");

  card.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
  `;

  galeria.appendChild(card);
});

