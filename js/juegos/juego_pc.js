// Variables globales
var paddleA = document.getElementById('paddleA');
var paddleB = document.getElementById('paddleB');
var ball = document.getElementById('ball');
var game = document.getElementById('game');
var gameWidth = game.offsetWidth;
var gameHeight = game.offsetHeight;
var paddleAHeight = paddleA.offsetHeight;
var paddleBHeight = paddleB.offsetHeight;
var paddleAUp = false;
var paddleADown = false;
var paddleBUp = false;
var paddleBDown = false;
//Velocidad
var ballSpeedX = 5;
var ballSpeedY = 5;
var ballPosX = gameWidth / 2 - ball.offsetWidth / 2;
var ballPosY = gameHeight / 2 - ball.offsetHeight / 2;
var interval;

// Actualizar posición de los elementos en el juego
function updateGame() {
  // Actualizar posición de las paletas
  if (paddleAUp && paddleA.offsetTop >= 0) {
    paddleA.style.top = paddleA.offsetTop - 5 + 'px';
  }
  if (paddleADown && paddleA.offsetTop + paddleAHeight <= gameHeight) {
    paddleA.style.top = paddleA.offsetTop + 5 + 'px';
  }
  if (paddleBUp && paddleB.offsetTop >= 0) {
    paddleB.style.top = paddleB.offsetTop - 5 + 'px';
  }
  if (paddleBDown && paddleB.offsetTop + paddleBHeight <= gameHeight) {
    paddleB.style.top = paddleB.offsetTop + 5 + 'px';
  }

  // Actualizar posición de la pelota
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;
  ball.style.left = ballPosX + 'px';
  ball.style.top = ballPosY + 'px';

  // Colisión con los bordes superiores e inferiores
  if (ballPosY <= 0 || ballPosY >= gameHeight - ball.offsetHeight) {
    ballSpeedY *= -1;
  }

  // Colisión con las paletas
  if (ballPosX <= paddleA.offsetWidth && ballPosY + ball.offsetHeight >= paddleA.offsetTop && ballPosY <= paddleA.offsetTop + paddleA.offsetHeight) {
    ballSpeedX *= -1;
  }
  if (ballPosX + ball.offsetWidth >= gameWidth - paddleB.offsetWidth && ballPosY + ball.offsetHeight >= paddleB.offsetTop && ballPosY <= paddleB.offsetTop + paddleB.offsetHeight) {
    ballSpeedX *= -1;
  }

  // Verificar si se anotó un punto
  if (ballPosX < 0 || ballPosX > gameWidth - ball.offsetWidth) {
    clearInterval(interval); // Detener el juego
    resetGame(); // Reiniciar el juego
  }
}


function resetGame() {

  ballPosX = gameWidth / 2 - ball.offsetWidth / 2;
  ballPosY = gameHeight / 2 - ball.offsetHeight / 2;
  ball.style.left = ballPosX + 'px';
  ball.style.top = ballPosY + 'px';

  // Restablecer dirección de la pelota
  ballSpeedX = Math.random() > 0.5 ? 3 : -3;
  ballSpeedY = Math.random() > 0.5 ? 3 : -3;


  setTimeout(startGame, 2000);
}

// Iniciar el juego
function startGame() {
  interval = setInterval(updateGame, 10);
}

// Manejadores de eventos del teclado
document.addEventListener('keydown', function(event) {
  if (event.key === 'w') {
    paddleAUp = true;
  }
  if (event.key === 's') {
    paddleADown = true;
  }
  if (event.key === 'ArrowUp') {
    paddleBUp = true;
  }
  if (event.key === 'ArrowDown') {
    paddleBDown = true;
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'w') {
    paddleAUp = false;
  }
  if (event.key === 's') {
    paddleADown = false;
  }
  if (event.key === 'ArrowUp') {
    paddleBUp = false;
  }
  if (event.key === 'ArrowDown') {
    paddleBDown = false;
  }
});


startGame();