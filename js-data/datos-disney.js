let disney   = [
    {
        nombre: "Funko Pop Disney: Blanca Nieves Collectible Figure",
        Precio: "Q289.00",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/BlancaN.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop Disney: Merida Collectible Vinyl Figure",
        Precio: "Q239.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/Merida.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Train: Disney 100 - Mickey in Steamboat Car, Mickey Mouse, Amazon Exclusive",
        Precio: "Q219.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/Mickeycar.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Disney: Walt Disney World 50th Anniversary - Aloha Mickey",
        Precio: "Q189.90",
        Franquicia: "Disney",
        descripcion: "Coleccionables y Juguetes",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/mickey50ani.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Disney Classics: Mickey and Friends - Pluto",
        Precio: "Q189.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/Pluto.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Disney: Disney 100 - Aurora",
        Precio: "Q179.46",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/aurora.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! VHS Cover: Disney - Monsters, Inc., Boo with Hard Hat, Amazon Exclusive",
        Precio: "Q309.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/boo.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Jumbo: Disney Villains - 10 Maleficent Dragon",
        Precio: "Q419.18",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/Malefica.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Art Cover: Disney 100 - Oswald The Lucky Rabbit",
        Precio: "Q339.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/Oswald%20The%20Lucky%20Rabbit.jpg",
        existencia: true
    },
    {
        nombre: "Funko Pop! Disney: Dumbo in Bubble Bath #1195",
        Precio: "Q209.90",
        Franquicia: "Disney",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-disney/dumbo.jpg",
        existencia: true
    },
]
const contenedorProductos = document.getElementById('cajasDisney');
    contenedorProductos.classList.add('cajasDisney');

    disney.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        const divNombre = document.createElement('div');
        divNombre.classList.add('nombre');
        divNombre.textContent = producto.nombre;
        divProducto.appendChild(divNombre);

        const divPrecio = document.createElement('div');
        divPrecio.classList.add('precio');
        divPrecio.textContent = 'Precio: ' + producto.Precio;
        divProducto.appendChild(divPrecio);

        const divDescripcion = document.createElement('div');
        divDescripcion.classList.add('descripcion');
        divDescripcion.textContent = producto.descripcion;
        divProducto.appendChild(divDescripcion);

        const divFranquicia = document.createElement('div');
        divFranquicia.classList.add('franquicia');
        divFranquicia.textContent = 'Franquicia: ' + producto.franquicia;
        divProducto.appendChild(divFranquicia);

        const imagen = document.createElement('img');
        imagen.classList.add('imagen');
        imagen.src = producto.img;
        divProducto.appendChild(imagen);

        contenedorProductos.appendChild(divProducto);
    });