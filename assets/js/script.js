jQuery(document).ready(function ($) {
  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');// easeInOutExpo=courbe d'acceleration 0=definition de la hauteur jusqu'à laquelle remonter, 1000=duration, 
    return false;
  });
});

function passageDeLaSouris(element) {
  element.setAttribute('src', 'assets/img/photoProfil.jpg');
  }
  //Affecte l'image de départ lorsque la souris ne survole plus l'élément
  function departDeLaSouris(element) {
  element.setAttribute('src', 'assets/img/face_co.png');
  }  