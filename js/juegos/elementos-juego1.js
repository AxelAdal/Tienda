function pc(){
    let componentes =
    `
    <div id="game">
    <div id="paddleA"></div>
    <div id="paddleB"></div>
    <div id="ball"></div>
  </div>
  `;

  let hasta_arriba = document.getElementById("juego-pc");

  hasta_arriba.innerHTML = componentes;

}

pc();