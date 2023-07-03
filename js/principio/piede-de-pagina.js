function abajo(){
    let componentes =
    `<div class="textos">
    <h2>FunkiLand</h2>
    <h4> 
      Una tienda de muestra que implementa de todo <br>
      lo que se pueda, una beta que cresera poco a poco <br>
      al paso del tiempo
    </h4>
    
    <p><a href="#header">¡Compra Ya!</a></p>
    
    </div>
    
    <div class="imgss">    
      <div class="btn-caja">
    
      <a class="bas" href="./index.html"><button class="button1"></button></a>
        <a class="bas" href="https://github.com/AxelAdal"><button class="button2"></button></a>
        <a class="bas" href="https://www.instagram.com/adallopez64/"><button class="button3"></button></a>
    
    </div>

    <img class="slogan" src="./img/img-rellenos/logo.png" alt="">
    
    </div>`;

  let hasta_abajo = document.getElementById("pie");

  hasta_abajo.innerHTML = componentes;

}

abajo();
