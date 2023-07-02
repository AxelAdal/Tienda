let Marvel = [
    {
        nombre: "Spiderman No Way Home",
        Precio: "Q200.00",
        Franquicia:"Marvel",
        descripcion: "Funko Pop Spiderman No Way Home Sin Mascara",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/spider-man-No-way-1.png",
        existencia: true
    },
    {
        nombre: "Marvel What If…? Zolavision",
        Precio: "Q189.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/zolavision.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP Marvel #1058 Infinity Killmonger",
        Precio: "Q314.65",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Infinity%20Killmonger.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko Pop Jumbo Marvel Spiderman Traje Negro Y Dorado #921",
        Precio: "Q479.90",
        Franquicia:"Marvel",
        descripcion: "Coleccionables y Juguetes",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Spiderman%20Traje%20Negro%20Y%20Dorado%20%23921.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko Pop Deluxe Marvel Avengers Infinity War Guardians Ship Star Lord #1021",
        Precio: "Q329.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Star%20Lord.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko Pop Marvel Thor Love And Thunder Gorr #1043",
        Precio: "Q149.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Thunder%20Gorr%20%231043.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko Pop Marvel Poison Spiderman #966",
        Precio: "Q169.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Poison%20Spiderman.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #1023 Avengers Infinity War Guardians Ship Drax",
        Precio: "Q193.20",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Ship%20Drax.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #1033 Doctor Strange In The Multiverse Of Madness Captain Carter",
        Precio: "Q159.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/Captain%20Carter.jpg",
        existencia: true
    },
    {
        nombre: "Figura De Accion Funko POP #971 What If? Queen General Romanda",
        Precio: "Q159.90",
        Franquicia:"Marvel",
        descripcion: "Figuras Coleccionables",
        img: "https://raw.githubusercontent.com/AxelAdal/Tienda/main/img/img-marvel/S3-%20POP%204.jpg",
        existencia: true
    }
]
const contenedorProductos = document.getElementById('cajasmarvel');
    contenedorProductos.classList.add('cajasmarvel');
    
    Marvel.forEach((producto, index) => {
      const divProducto = document.createElement('div');
      divProducto.classList.add('producto');
      divProducto.id = 'producto-' + index; // Asignar un ID único basado en el índice
    
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

      btnMostrar.classList.add('btn');
    
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