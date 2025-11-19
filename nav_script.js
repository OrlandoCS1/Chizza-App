
const apartados = ['Chizza','Home', 'Perfil', 'Menu', 'Config', 'Estatus', 'Orden'];
const iconos = ['fa-solid fa-pizza-slice','bi bi-house-door-fill', 'bi bi-person-fill', 'bi bi-fork-knife', 'bi bi-gear-fill', 'bi bi-envelope-fill', 'bi bi-plus-square'];



const barraNav = document.querySelector('.barra_navegacion');



iconos.forEach((item, index) => {
    let button = document.createElement('div');
    button.className = 'button_nav';

    button.innerHTML = `
        <i class = "${item}"></i>
        <p>${apartados[index]}</p>
    `;

    barraNav.appendChild(button);
});


