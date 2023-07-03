function mostrarEnGrande(producto) {
    const contenedorModal = document.createElement('div');
    contenedorModal.classList.add('modal');

    const modalContenido = document.createElement('div');
    modalContenido.classList.add('modal-contenido');

    const btnCerrar = document.createElement('span');
    btnCerrar.classList.add('cerrar-modal');
    btnCerrar.innerHTML = '&times;';
    btnCerrar.addEventListener('click', () => {
        contenedorModal.remove();
    });
    modalContenido.appendChild(btnCerrar);

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
    `;
    modalContenido.appendChild(textoModal);

    contenedorModal.appendChild(modalContenido);
    document.body.appendChild(contenedorModal);
}