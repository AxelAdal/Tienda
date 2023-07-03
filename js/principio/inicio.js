function carrusel(){
    let imgs =
    `<div class="carousel">
    <div class="carousel-container">
    <img class="carousel-image" src="https://elduendemall.com/blog/wp-content/uploads/2020/02/Funkos-Imagen.jpg" alt="Imagen 1">
    <img class="carousel-image" src="https://i.blogs.es/07308e/wp4528997/1366_2000.jpeg" alt="Imagen 2">
    <img class="carousel-image" src="https://i2.wp.com/padresfrikis.com/wp-content/uploads/2019/04/funko-pop-origen-cuantos.jpg?fit=740%2C555&ssl=1" alt="Imagen 3">
    <img class="carousel-image" src="https://eloutput.com/wp-content/uploads/2021/12/cuantos-funkos.jpg" alt="Imagen 1">
    <img class="carousel-image" src="https://img.unocero.com/2019/11/funko-pop-geek-barato-1024x576.jpg" alt="Imagen 2">
    <img class="carousel-image" src="https://i.blogs.es/e1cd0c/funko-min/840_560.jpg" alt="Imagen 3">
    <img class="carousel-image" src="https://cdn.shopify.com/s/files/1/0190/5436/2724/articles/portada_blog.jpg?v=1588519466&width=2000" alt="Imagen 1">
    <img class="carousel-image" src="https://i.blogs.es/94eb2d/funko-1/1366_2000.jpeg" alt="Imagen 3">
    <img class="carousel-image" src="https://peruretail.sfo3.cdn.digitaloceanspaces.com/wp-content/uploads/Funko-Pop.jpg" alt="Imagen 1">
    <img class="carousel-image" src="https://images.unsplash.com/photo-1607203694607-2fde6bb0724c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9wJTIwZnVua298ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="Imagen 3">
    <img class="carousel-image" src="https://www.madridhappypeople.com/wp-content/uploads/2021/09/exposicion-funko.jpg" alt="">
    <img class="carousel-image" src="https://hips.hearstapps.com/hmg-prod/images/captura-de-pantalla-2021-03-16-a-las-15-52-32-1615906625.jpg" alt="">
    </div>
    <a class="carousel-prev" href="#"><</a>
    <a class="carousel-next" href="#">></a>
    </div>`;

  let medio = document.getElementById("inicio2");

  medio.innerHTML = imgs;

}
carrusel();


const carouselContainer = document.querySelector('.carousel-container');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let translateValue = 0;
const step = 100;
let intervalId;
let currentSlide = 0;
const totalSlides = carouselContainer.childElementCount;

// Función para mover el carrusel al siguiente slide
function moveToNextSlide() {
  if (currentSlide < totalSlides - 1) {
    translateValue -= step;
    carouselContainer.style.transform = `translateX(${translateValue}%)`;
    currentSlide++;
  } else {
    resetCarousel();
  }
}

// Función para mover el carrusel al slide anterior
function moveToPrevSlide() {
  if (currentSlide > 0) {
    translateValue += step;
    carouselContainer.style.transform = `translateX(${translateValue}%)`;
    currentSlide--;
  } else {
    resetCarousel();
  }
}

// Función para reiniciar el carrusel
function resetCarousel() {
  translateValue = 0;
  carouselContainer.style.transform = `translateX(${translateValue}%)`;
  currentSlide = 0;
}

// Función para iniciar el temporizador del carrusel
function startCarouselTimer() {
  intervalId = setInterval(moveToNextSlide, 3000); // Cambiar imagen cada 3 segundos
}

// Función para detener el temporizador del carrusel
function stopCarouselTimer() {
  clearInterval(intervalId);
}

// Iniciar el temporizador del carrusel al cargar la página
startCarouselTimer();

// Reiniciar el temporizador del carrusel después de un intervalo de tiempo
function restartCarouselTimer() {
  stopCarouselTimer();
  startCarouselTimer();
}

// Agregar evento al contenedor del carrusel para reiniciar el temporizador cuando se interactúa con él
carouselContainer.addEventListener('mouseenter', stopCarouselTimer);
carouselContainer.addEventListener('mouseleave', restartCarouselTimer);
