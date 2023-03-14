// Detectar el desplazamiento del usuario
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Si el usuario se desplaza hacia abajo más de 20px, mostrar el botón
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("boton-regresar-arriba").style.display = "block";
  } else {
    document.getElementById("boton-regresar-arriba").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
  console.log("enlazado")
}