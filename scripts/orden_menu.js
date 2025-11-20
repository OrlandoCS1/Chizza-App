class Orden{
    constructor(articulo, precio, extra, cantidad, img){
        this.articulo = articulo,
        this.precio = precio,
        this.extra = extra,
        this.cantidad = cantidad,
        this.img = img
    }
}


const itemsOrden = [
    new Orden('Pepperoni', 129.00, 'Extra queso', 2, '/assets/menu/pizzas/pepperoni.jpg'),
    new Orden('Limonada', 29.00, 'Extra hielos', 1, '/assets/menu/bebidas/limonada.jpg'),
];

const menuOrden = document.querySelector('.menu_orden');

itemsOrden.forEach((item, index) => {
    let tabItem = document.createElement('div');
    tabItem.className = "tab_item";
    tabItem.innerHTML = `
            

                <img src = "${item.img}" class = "tab_item_img">
                
                <div class = "tab_content">
                    <div class = "labels_tab">
                        <p class = "item_label"> ${item.articulo}</p>

                        <p class = "extra_label"> ${item.extra} </p>

                        <p class = "precio_label"> $ ${item.precio} </p>
                    </div>
                    <div class = "agregar_buttons_orden"> 
                        <p class = "restar_icono">-</p>
                            <p class = "cantidad_acumulada">${item.cantidad}</p>
                        <p class = "sumar-icono">+</p>
                    </div>
                </div>
            
         `;
        
         menuOrden.appendChild(tabItem);

});

let totalOrden = document.querySelector('.total_cantidad');
let counterTotal = 0;
itemsOrden.forEach((item) => {
     counterTotal += item.precio * item.cantidad;
}); 

console.log('el total es: ' + counterTotal);

totalOrden.textContent = '$' + counterTotal + '.00';

