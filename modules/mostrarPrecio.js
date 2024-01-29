export function mostrarPrecio(src, alt, nombreItem, precioItem) {
    let item = document.getElementById("item");
    item.innerHTML = "";
    const card = document.createElement("div")
    card.className = "card";

    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    const container = document.createElement("div");
    container.className = "container";

    const nombre = document.createElement("h4");
    nombre.textContent = nombreItem;

    const precio = document.createElement("p");
    precio.textContent = `precio: $ ${precioItem} COP`;

    container.appendChild(nombre);
    container.appendChild(precio);
    card.appendChild(img);
    card.appendChild(container);
    item.appendChild(card);
}
