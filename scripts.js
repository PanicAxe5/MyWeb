
//MOVIMIENTO DEL CARRUSEL
let posicion=0;
const carruselItems=document.querySelector('.carrusel-items');
const buttons= document.querySelectorAll('.carrusel-items button');
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');
const anchoBoton = buttons[0].offsetWidth + 10;

next.addEventListener('click', () => {
  if (posicion < buttons.length - 1) {
    posicion++;
    moverCarrusel();
  }
});

prev.addEventListener('click', () => {
    if (posicion > 0) {
        posicion--;
        moverCarrusel();
    }
});


function moverCarrusel() {
  const desplazamiento = -posicion * anchoBoton;
  carruselItems.style.transform = `translateX(${desplazamiento}px)`;
}


//DESPLIEGUE DE IMAGENES

