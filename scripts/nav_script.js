let optionNav = document.querySelectorAll('.optn_nav .option_container');
const apartados = ['.home', '.profile', '.menu'];

optionNav.forEach((item, index) => {
    item.addEventListener('click', () => {


        const ventana = document.querySelector(apartados[index]);


        if(ventana.className == "menu" || ventana.className == "home"){
            ventana.style.display = "flex";
        } else {
         ventana.style.display = "block";
        }


        item.style.backgroundColor = "#eb4c03ff";
        item.style.color = "white";

        apartados.forEach((selector, i) => {
            if (i !== index) {
                document.querySelector(selector).style.display = "none";
            }
        });

        optionNav.forEach((btn, i) => {
            if (i !== index) {
                btn.style.backgroundColor = "white";
                btn.style.color = "rgb(112, 112, 112)";
            }
        });

    });
});
