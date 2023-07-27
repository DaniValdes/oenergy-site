document.addEventListener('DOMContentLoaded', (event) => {

  /* COUNTERS */
  const counters = document.querySelectorAll('.counter');
  
  const animateNumbers = (counter, index) => {
    const target = +counter.getAttribute('data-target');
    const countElement = counter.querySelector('.counter-number');
    let count = +countElement.innerText.replace(' Mwp', '');
  
    if (count < target) {
      count++;
      countElement.innerText = (index === 0 || index === 2) ? `${count} Mwp` : count;
      setTimeout(() => animateNumbers(counter, index), 10);
    }
  };
  
  const checkScroll = () => {
    const triggers = Array.from(document.querySelectorAll('.counter'));
    const windowHeight = window.innerHeight;
  
    triggers.forEach((trigger, index) => {
      const triggerTop = trigger.getBoundingClientRect().top;
  
      if (triggerTop < windowHeight) {
        animateNumbers(trigger, index);
      }
    });
  };
  
  window.addEventListener('scroll', checkScroll);
  
  
  //MAPA

  $(document).ready(function() {
    $('.pin-gris').css('color', '#ccc');
  });

  $('.custom-checkbox').click(function(e) {
    if (!$(e.target).is('input')) {
        var checkbox = $(this).find('input');
        checkbox.prop('checked', !checkbox.prop('checked'));
        checkbox.trigger('change');
    }
});

$('.round-checkbox').change(function() {
    var parentDivId = $(this).parent().attr('id');
    var pinColor = getPinColor(parentDivId);
    var pinClass = '.' + parentDivId.split('-')[0] + '-pin';
    var icon = $(this).next();
  
    if(this.checked) {
        $(pinClass).removeClass('hidden');
        icon.css('color', pinColor);
    } else {
        $(pinClass).addClass('hidden');
        icon.css('color', '#ccc');
    }
});

function getPinColor(checkboxId) {
    var pinColor = '';
    switch (checkboxId) {
        case 'developer-checkbox':
            pinColor = '#223169';
            break;
        case 'constructor-checkbox':
            pinColor = '#333';
            break;
        case 'operator-checkbox':
            pinColor = '#d76e14';
            break;
        // Agrega más casos según sea necesario para otros tipos de checkbox
    }
    return pinColor;
}

  
  


  
  // Obtener la resolución de pantalla
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  
  // Mostrar la resolución en la consola
  console.log("Resolución de pantalla: " + screenWidth + "x" + screenHeight);
  
  
     // Obtener todos los contenedores de iconos
     const iconContainers = document.querySelectorAll('.icon-container-que-hacemos');
  
     // Función para ajustar la posición del tooltip
     function adjustTooltipPosition(tooltip) {
         const iconContainer = tooltip.parentElement;
         const iconRect = iconContainer.getBoundingClientRect();
         const tooltipRect = tooltip.getBoundingClientRect();
  
         // Calcular la posición del tooltip en relación al icono
         const left = iconRect.left + (iconRect.width / 2) - (tooltipRect.width / 2);
  
         // Ajustar la posición del tooltip
         tooltip.style.left = `${left}px`;
     }
  
     // Ajustar la posición de los tooltips al cargar la página
     window.addEventListener('load', () => {
         const tooltips = document.querySelectorAll('.tooltip-que-hacemos');
         tooltips.forEach(tooltip => adjustTooltipPosition(tooltip));
     });
  
     // Ajustar la posición de los tooltips al redimensionar la ventana
     window.addEventListener('resize', () => {
         const tooltips = document.querySelectorAll('.tooltip-que-hacemos');
         tooltips.forEach(tooltip => adjustTooltipPosition(tooltip));
     });
  
  
  
     $(document).ready(function() {
      // Manejo de clics en los enlaces de anclaje en la misma página
      $('a').click(function(event){
          var href = $.attr(this, 'href');
          
          // Verifica si el enlace es a una ancla en la misma página
          if (href.startsWith('#')) {
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: $(href).offset().top - 50 // reemplaza 50 con la altura de tu navbar
              }, 500);
          }
      });
  
      // Manejo de desplazamiento a una ancla al cargar la página
      if(window.location.hash) {
          setTimeout(function() {
              $('html, body').animate({
                  scrollTop: $(window.location.hash).offset().top - 50 // reemplaza 50 con la altura de tu navbar
              }, 500);
          }, 0);
      }
  });
  
  try {
    var carousel = document.querySelector('#team-carousel')
    var bsCarousel = new bootstrap.Carousel(carousel, {
      interval: 1600,
      keyboard: true
    })
  } catch(error) {
    console.error("Hubo un problema al inicializar el carrusel: ", error);
  }
  



  /* CONTACTANOS */
  
  var popup = document.getElementById("contactFormPopup");
  var btn = document.getElementById("openFormButton");
  var span = document.getElementById("closePopup");
  
  console.log(popup); // Deberías ver el elemento del popup en la consola si se ha seleccionado correctamente
  console.log(btn);   // Deberías ver el elemento del botón en la consola si se ha seleccionado correctamente
  
  btn.onclick = function() {
    console.log("Botón presionado"); // Este mensaje debería aparecer en la consola cuando se presione el botón
    popup.style.display = "block";
  }
  
  span.onclick = function() {
    console.log("Popup cerrado"); // Este mensaje debería aparecer en la consola cuando se cierre el popup
    popup.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == popup) {
      console.log("Hiciste clic fuera del popup"); // Este mensaje debería aparecer en la consola cuando se haga clic fuera del popup
      popup.style.display = "none";
    }
  }

});


    // Función para cerrar el menú desplegable del navbar cuando se presiona un botón
    function cerrarMenu() {
      $('.navbar-toggler').trigger('click');
  }


  //EFECTOS
// Crear una nueva instancia del observer
let observer = new IntersectionObserver((entries, observer) => {
  // Para cada elemento "observado"
  entries.forEach(entry => {
      // Si el elemento está en la vista
      if(entry.isIntersecting){
          // Añadir la clase para la animación
          entry.target.classList.add(entry.target.dataset.animation);
          // Dejar de observar el elemento después de que la animación se ha ejecutado
          observer.unobserve(entry.target);
      }
  });
});

// Observar todos los elementos que queremos animar
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});
