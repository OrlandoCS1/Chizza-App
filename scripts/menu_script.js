class MenuItem {
    constructor(nombre, precio, imagen, tiempo, categoria, descripcion){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.tiempo = tiempo;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }
}

const items = [
    new MenuItem('Pepperoni', 129.00, '/assets/menu/pizzas/pepperoni.jpg', '15 - 20', 'pizzas', "Pizza horneada a 205° con láminas de pepperoni, especias italianas y queso mozzarella derretido."),
    new MenuItem('Hawaiana', 139.00, '/assets/menu/pizzas/hawaian.jpg', '20 - 25', 'pizzas', "Masa artesanal cubierta con jamón premium, piña dulce y mozzarella dorado al horno."),
    new MenuItem('Margarita', 149.00, '/assets/menu/pizzas/margarita.jpg', '15 - 20', 'pizzas', "Clásica combinación de salsa de tomate, mozzarella fresca y hojas de albahaca aromática."),
    new MenuItem('Mexicana', 129.00, '/assets/menu/pizzas/mexican.jpg', '30 - 35', 'pizzas', "Una mezcla intensa de chorizo, jalapeños, cebolla y queso, con un toque auténtico mexicano."),
    new MenuItem('Italiana', 169.00, '/assets/menu/pizzas/margariiina.jpg', '20 - 25', 'pizzas', "Ingredientes mediterráneos: tomate fresco, aceitunas negras, albahaca y mozzarella gratinado."),
    new MenuItem('Bolgnesa', 149.00, '/assets/menu/pizzas/bolognesa.jpg', '15 - 20', 'pizzas', "Pizza cubierta con salsa boloñesa casera, carne molida especiada y queso mozzarella fundido."),

    new MenuItem('Fetuccini', 259.00, '/assets/menu/pastas/fetu.jpg', '15 - 20', 'pastas', "Pasta ancha en salsa cremosa ligera, preparada al momento y servida con queso parmesano."),
    new MenuItem('Al Forno', 279.00, '/assets/menu/pastas/forno.jpg', '20 - 25', 'pastas', "Fettuccini gratinado al horno con salsa rosada, mozzarella y un toque de especias italianas."),
    new MenuItem('Primavera', 289.00, '/assets/menu/pastas/Primavera.jpg', '15 - 20', 'pastas', "Pasta con vegetales frescos salteados, aceite de oliva y hierbas aromáticas."),
    new MenuItem('BBQ', 279.00, '/assets/menu/pastas/BBQ.jpg', '30 - 35', 'pastas', "Pasta bañada en salsa BBQ casera con trozos de pollo tierno y notas ahumadas."),
    new MenuItem('Alfredo', 269.00, '/assets/menu/pastas/Alfredo.jpg', '20 - 25', 'pastas', "Clásica salsa Alfredo hecha con mantequilla, crema fresca y parmesano recién rallado."),
    new MenuItem('Cepillini', 289.00, '/assets/menu/pastas/cepi.jpg', '15 - 20', 'pastas', "Pasta fina con salsa de tomate especiada, queso parmesano y un toque mediterráneo."),

    new MenuItem('Formaggio', 249.00, '/assets/menu/platillos/form.jpg', '20 - 23', 'platillos', "Delicada preparación con mezcla de quesos italianos, gratinados hasta obtener una textura cremosa."),
    new MenuItem('Carpiano', 239.00, '/assets/menu/platillos/carpi.jpg', '20 - 25', 'platillos', "Platillo con pasta corta en salsa suave acompañada de especias y vegetales frescos."),
    new MenuItem('Filetto', 249.00, '/assets/menu/platillos/fielto.jpg', '30 - 35', 'platillos', "Filete tierno a la plancha con reducción de vino y guarnición de vegetales salteados."),
    new MenuItem('Insalate', 229.00, '/assets/menu/platillos/ensalada.jpg', '30 - 35', 'platillos', "Ensalada fresca con lechugas mixtas, tomate cherry, aceitunas y vinagreta italiana."),
    new MenuItem('Panne', 269.00, '/assets/menu/platillos/panne.jpg', '25 - 30', 'platillos', "Pasta horneada con salsa cremosa, queso derretido y especias tradicionales."),
    new MenuItem('Calamari', 249.00, '/assets/menu/platillos/calamari.jpg', '15 - 20', 'platillos', "Calamares frescos salteados con hierbas, limón y un toque de aceite de oliva."),

    new MenuItem('Limonada', 29.00, '/assets/menu/bebidas/limonada.jpg', '1 - 2', 'bebidas', "Limonada fresca preparada con jugo natural, azúcar ligera y hielo triturado."),
    new MenuItem('Naranjada', 39.00, '/assets/menu/bebidas/naranjada.jpg', '1 - 2', 'bebidas', "Bebida cítrica y refrescante hecha con naranja exprimida al momento."),
    new MenuItem('Toronjada', 39.00, '/assets/menu/bebidas/toronjada.jpg', '1 - 2', 'bebidas', "Refresco natural de toronja con balance perfecto entre ácido y dulce."),
    new MenuItem('Vino Rosi', 69.00, '/assets/menu/bebidas/vino_rosao.jpg', '2 - 3', 'bebidas', "Vino rosado suave, de aroma frutal y sabor delicado."),
    new MenuItem('Vino tinto', 69.00, '/assets/menu/bebidas/vino_tinto.jpg', '2 - 3', 'bebidas', "Vino tinto de cuerpo medio, ideal para acompañar pastas y platillos italianos."),
    new MenuItem('Chanpagne', 149.00, '/assets/menu/bebidas/chanpagne.png', '1 - 2', 'bebidas', "Burbujas finas, sabor suave y elegante — ideal para celebraciones."),

    new MenuItem('Tiramisu', 89.00, '/assets/menu/postres/tiramisu.jpg', '5 - 10', 'postres', "Clásico italiano con capas de mascarpone, café espresso y cocoa espolvoreada."),
    new MenuItem('Budin', 99.00, '/assets/menu/postres/budin.jpg', '6 - 7', 'postres', "Budín suave y dulce con notas de vainilla, perfecto para acompañar café."),
    new MenuItem('Tartalia', 79.00, '/assets/menu/postres/tar.jpg', '1 - 3', 'postres', "Tarta ligera con base crujiente y centro dulce."),
    new MenuItem('Platano', 89.00, '/assets/menu/postres/plata.jpg', '2 - 4', 'postres', "Rodajas de plátano caramelizado con un toque de canela."),
    new MenuItem('Panna', 69.00, '/assets/menu/postres/panna_cotta.jpg', '1 - 3', 'postres', "Postre cremoso tipo panna cotta con aroma a vainilla."),
    new MenuItem('Cioccolato', 119.00, '/assets/menu/postres/cio.jpg', '1 - 4', 'postres', "Postre intenso de chocolate con textura suave y sabor profundo.")
];

const categorias = ['pizzas', 'pastas', 'platillos', 'bebidas', 'postres'];


const menuView = document.querySelector(".menu_view");

let limit = 0;

let counter = 0;

for(cate of categorias){
   let box_categoria = document.createElement('div');
   box_categoria.className = cate;
   menuView.appendChild(box_categoria);



    for(item of items){
        //console.log('Entrando al bloque de código');
      if(item.categoria == categorias[counter]){
            if(limit <= 3){
        
            let producto = document.createElement('div');
                    producto.className = 'card';
                    
                    producto.innerHTML = `
                        
                        <img src = "${item.imagen}" class = "img_card">
                         <div class = "data_card">
                         <p class = "nombre_card"> ${item.nombre} </p>
                         <p class = "descripcion_card"> ${item.descripcion}</p>
                         <p class = "tiempo_card"> ${item.tiempo} min</p>
                         <div class = "important_card">
                         <p class = "precio_card"> $ ${item.precio} </p>
                         <div class = "agrega_card">+</div>
                         </div>
                        </div>
                    `;
                
                    

            box_categoria.appendChild(producto);
            
             }
             limit++
            //console.log('Entrando al bloque de código de las cards');

      }
       
    }
    limit = 0;

   console.log(box_categoria.className);
    counter ++;
    console.log('Elemento ' + counter)

   
}

const menuBar = document.querySelector('.menu_bar');




//const tiles = [pizzaTile, pastaTile, platilloTile, bebidaTile, postreTile];
const tiles = ['#pizza_tile', '#pasta_tile', '#platillos_tile', '#bebidas_tile', '#postres_tile'];
const views = ['.pizzas', '.pastas', '.platillos', '.bebidas', '.postres'];

let i = 0;

tiles.forEach((selector, index) => {
    let tile = document.querySelector(selector);
    let view = document.querySelector(views[index]);

    console.log('view seleccionada ' + view.className)
 
    tile.addEventListener('click', () => {

        //console.log('View seleccionada' + view);
        tile.style.boxShadow = "0 3px 10px #eb4c03ff";
        tile.style.backgroundColor = "#f64c00";
        tile.style.color = "white";
        tile.style.border = "none";

        // CAMBIAR DE VIEW 


        view.style.display = "flex";
        view.style.flexDirection = "row";

        view.style.gap = "1.66%";

        let viewsHijas = [...menuView.children].filter((_,i) => i !== index);

        viewsHijas.forEach(viewHija =>{
            viewHija.style.display = "none";
        });
         


        
        let hijos = [...menuBar.children].filter((_,i) => i !== index);
        


        console.log('Indice seleccionado' + index);
        
        hijos.forEach(hijo => {
            hijo.style.color = "black";
            hijo.style.backgroundColor = "white"
            hijo.style.boxShadow = "none";
            hijo.style.border = "1px solid #acb2b9"
        });

        // CAMBIAR DE VIEW 

        
        
    });
    
})




