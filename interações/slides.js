let slides = document.querySelectorAll('.slide-container');
let slidesArray = Array.from(slides); // criando array a partir do NodeList "slides"
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

// Adiciona um novo slide a cada 9 segundos
setInterval(() => {
  const newSlide = document.createElement('div');
  newSlide.classList.add('slide-container');
  slides[0].parentNode.appendChild(newSlide);
  slidesArray.push(newSlide);
}, 9000);

setInterval(next, 9000);