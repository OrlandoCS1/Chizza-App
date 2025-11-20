


let optionNav = document.querySelectorAll('.optn_nav .option_container');


const apartados = ['Home', 'Perfil', 'Menu', 'Config', 'Estatus', 'Orden'];

optionNav.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = "#eb4c03ff";
        item.style.color = "white";

         let itemsHijos = [...optionNav].filter((_,i) => i !== index);

         itemsHijos.forEach(element => {
            element.style.backgroundColor = "white";
            element.style.color = "rgb(112, 112, 112)";
         });

    });
});