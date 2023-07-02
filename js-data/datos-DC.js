let coleDC   = [
    {
        nombre: "Figura De Accion Funko POP #1236 DC Comics Peacemaker Eagly",
        Precio: "Q159.90",
        descripcion: "Figuras Coleccionables ",
        franquicia: "DC",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Peacemaker%20Eagly.png",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #438 DC Comics Juntice League Starfire",
        Precio: "Q169.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/League%20Starfire.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP Heroes DC #412 Bane Glow Exclusive",
        Precio: "Q159.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Bane%20Glow.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #1234 DC Comics Black Adam Cyclone",
        Precio: "Q159.90",
        franquicia: "DC",
        descripcion: "Coleccionables y Juguetes",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Cyclone.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #1233 DC Comics Peacemaker En Ropa Interior",
        Precio: "Q159.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/peacemaker.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #435 DC Justice League Black Orchid Edicion Especial Dia De La Tierra",
        Precio: "Q107.46",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Orchid.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #431 Heroes Wonder Woman Flaspoint",
        Precio: "Q159.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Wonder%20Woman%20Flaspoint.jpeg",
        existencia: true
    },
    {
        nombre: "The Suicide Squad Harley Quinn Damaged Dress Funko Pop",
        Precio: "Q102.18",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Harley%20Quinn.jpg",
        existencia: true
    },
    {
        nombre: "Comprar Funko POP Batman (Michael Keaton) 1339 DC Comics The Flash",
        Precio: "Q159.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Batman.jpg",
        existencia: true
    },
    {
        nombre: "Funko POP! Movies: DC Justice League Superman Toy Figure",
        Precio: "Q114.90",
        franquicia: "DC",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-DC/Superman.jpg",
        existencia: true
    },
]
const contenedorProductos = document.getElementById('cajasDC');
    contenedorProductos.classList.add('cajasDC');

    coleDC.forEach(producto => {
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

        const btnMostrar = document.createElement('button');
        btnMostrar.textContent = 'Ver Producto';
        btnMostrar.addEventListener('click', () => mostrarEnGrande(producto));
        divProducto.appendChild(btnMostrar);

        contenedorProductos.appendChild(divProducto);
    });

    function mostrarEnGrande(producto) {
        const contenedorModal = document.createElement('div');
        contenedorModal.classList.add('modal');

        const modalContenido = document.createElement('div');
        modalContenido.classList.add('modal-contenido');

        const imagenModal = document.createElement('img');
        imagenModal.classList.add('imagen-modal');
        imagenModal.src = producto.img;
        modalContenido.appendChild(imagenModal);

        const textoModal = document.createElement('div');
        textoModal.classList.add('texto-modal');
        textoModal.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p><strong>Precio:</strong> ${producto.Precio}</p>
            <p><strong>Descripción:</strong> ${producto.descripcion}</p>
            <p><strong>Franquicia:</strong> ${producto.franquicia}</p>
        `;
        modalContenido.appendChild(textoModal);

        contenedorModal.appendChild(modalContenido);
        document.body.appendChild(contenedorModal);

        contenedorModal.addEventListener('click', () => {
            contenedorModal.remove();
        });
}