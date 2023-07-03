function bienvenida(){
    let componentes9 =
    `
<div class="todo">
    <div class="todo2">
      <div class="imagen">
        <img src="./img/img-rellenos/orejon-removebg-preview.png" alt="">
      </div>
      <div class="textointo">
        <h1>¡Colecciona a lo Grande</h1>
        <h4>
            En sus marcas, listos… ¡a coleccionar!<br>
            <br>
            Tenemos variedad y calidad
          </h4>
      </div>
    </div>
</div>`;

  let textos = document.getElementById("luego");

  textos.innerHTML = componentes9;

}
bienvenida();