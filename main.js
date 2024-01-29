import { items } from "./modules/items.js";
import { mostrarPrecio } from "./modules/mostrarPrecio.js";
//import{mensaje} from  "./modules/alert.js";

const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    const item = items[menu.value];
    if (item) {
        mostrarPrecio(item.src, item.alt, item.nombreItem, item.precioItem);
    } else {
        alert("Debes Seleccionar una opción valida del menú");
    }
});
