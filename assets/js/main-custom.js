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
  $('#developer-checkbox').change(function() {
    if(this.checked) {
      $('.developer-pin').removeClass('hidden');
    } else {
      $('.developer-pin').addClass('hidden');
    }
  });
  
  $('#constructor-checkbox').change(function() {
    if(this.checked) {
      $('.constructor-pin').removeClass('hidden');
    } else {
      $('.constructor-pin').addClass('hidden');
    }
  });

  $('#operator-checkbox').change(function() {
    if(this.checked) {
      $('.operator-pin').removeClass('hidden');
    } else {
      $('.operator-pin').addClass('hidden');
    }
  });
});

$(document).ready(function() {
  $('.round-checkbox').change(function() {
    if (this.checked) {
      $(this).addClass('checked');
      var checkboxId = $(this).attr('id');
      var pinColor = getPinColor(checkboxId);
      $(this).css('border-color', pinColor);
      $(this).css('background-color', pinColor);
    } else {
      $(this).removeClass('checked');
      $(this).css('border-color', '#ccc');
      $(this).css('background-color', 'transparent');
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
});



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


var carousel = document.querySelector('#team-carousel')
var bsCarousel = new bootstrap.Carousel(carousel, {
  interval: 2500
})
