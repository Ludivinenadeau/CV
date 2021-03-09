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

  $( function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#timeline" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
      return false;
    });
  } );

  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbar')
  const bsCollapse = new bootstrap.Collapse(menuToggle)
  navLinks.forEach((l) => {
      l.addEventListener('click', () => { bsCollapse.toggle() })
  })