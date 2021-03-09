//Función que recibe un parámeto de píxeles.
function irArriba(pxPantalla) {
  window.addEventListener("scroll", () => {
    var scroll = document.documentElement.scrollTop;
    var botonArriba = document.getElementById("btnarriba");

    if (scroll > pxPantalla) {
      botonArriba.style.right = 20 + "px";
    } else {
      botonArriba.style.right = -100 + "px";
    }
  });
}
irArriba(150);

//Funcion que abre el acordeon en Wordpress.
function openAcordeon(){
  const acordion = document.getElementsByClassName('contentBx');
  for(i = 0; i< acordion.length; i++){
    acordion[i].addEventListener('click', function(){
      this.classList.toggle('active')
    })
  }
}

openAcordeon();