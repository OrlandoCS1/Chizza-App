const menuGrid = document.getElementById("menuGrid");
const tiles2 = document.querySelectorAll(".main_menu_tile");

// 🔥 Clase que se agregará al tile seleccionado
const CLASS_ACTIVA = "tile_activa";

function crearCard(item) {
    const card = document.createElement("div");
    card.className = "card_main";

    card.innerHTML = `
        <img src="${item.imagen}">
        <div class="data_card_main">
            <p class="nombre_card_main">${item.nombre}</p>
            <p class="descripcion_card_main">${item.descripcion}</p>
            <p class="tiempo_card_main">${item.tiempo} min</p>

            <div class="important_card_main">
                <p class="precio_card_main">$${item.precio}</p>
                <div class="agrega_card_main">+</div>
            </div>
        </div>
    `;

    menuGrid.appendChild(card);
}

function cargarCategoria(categoria, tileSeleccionado = null) {
    // Limpiar cards actuales
    menuGrid.innerHTML = "";

    // Activar visualmente el tile seleccionado
    tiles2.forEach(t => t.classList.remove(CLASS_ACTIVA));
    if (tileSeleccionado) tileSeleccionado.classList.add(CLASS_ACTIVA);

    // Filtrar y renderizar
    const filtrados = items.filter(p => p.categoria === categoria);
    filtrados.forEach(item => crearCard(item));
}

// 👉 Evento para cada tile
tiles2.forEach(tile => {
    tile.addEventListener("click", () => {
        const categoria = tile.dataset.cat;
        cargarCategoria(categoria, tile);
    });
});

// 👉 Al cargar la página: seleccionar automáticamente "pizzas"
window.addEventListener("DOMContentLoaded", () => {
    const primerTile = document.querySelector('.main_menu_tile[data-cat="pizzas"]');
    if (primerTile) {
        cargarCategoria("pizzas", primerTile);
    }
});
