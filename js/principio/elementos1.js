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
            </ul>
          </li>
          <li><a href='#pie'>About</a></li>
        </ul>
      </nav>

      <h1 class="titulo">Funkoweb</h1>

      <img class="pato" src="./img/img-rellenos/XOsX.gif" alt="">

      <input type="text" id="searchInput" name="text" class="input" placeholder="Buscando...">
      <div id="results"></div>

    </div>`;

  let hasta_arriba = document.getElementById("header");

  hasta_arriba.innerHTML = componentes;

}

arriba();
/*<button class="btn" type="button">
      <strong>Carrito</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>
    
      <div id="glow">
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </button> */