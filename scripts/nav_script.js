


let optionNav = document.querySelectorAll('.optn_nav .option_container');


const apartados = ['Home', 'Perfil', 'Menu'];

optionNav.forEach((item, index) => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = "#eb4c03ff";
        item.style.color = "white";
        let ventana = document.querySelector(index);
        ventana.style.display = "flex";

         let itemsHijos = [...optionNav].filter((_,i) => i !== index);
         let ventanasHijas = [...apartados] .filter((_,i) => i !== index);

         ventanasHijas.forEach(element => {
            element.style.display = "none";
         })

         itemsHijos.forEach(element => {
            element.style.backgroundColor = "white";
            element.style.color = "rgb(112, 112, 112)";
         });

    });
});