function arriba(){
    let componentes =
    `<div class="cabeza">
           
    <nav id='menu'>
        <input type='checkbox' id='responsive-menu' onclick='updatemenu()'><label></label>
        <ul>
          <li><a href='./index.html'>Home</a></li>
          <li><a class='dropdown-arrow'>Products</a>
            <ul class='sub-menus'>
              <li><a href='./index2.html'>DC</a></li>
              <li><a href='./index3.html'>Marvel</a></li>
              <li><a href='./index4.html'>Disney</a></li>
              <li><a href=''>Ofertas</a></li>
            </ul>
          </li>
          <li><a href='#pie'>About</a></li>
        </ul>
      </nav>

      <h1 class="titulo">Funkoweb</h1>

      <img class="pato" src="./img/img-rellenos/XOsX.gif" alt="">

      <input type="text" autocomplete="off" name="text" class="input" placeholder="Busqueda">
    </div>`;

  let hasta_arriba = document.getElementById("header");

  hasta_arriba.innerHTML = componentes;

}

arriba();