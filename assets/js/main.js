const slideElements = document.querySelectorAll(".slide");

slideElements.forEach((slide) => {
  slide.addEventListener("click", () => {
    slideElements.forEach((s) => s.classList.remove("active"));
    slide.classList.add("active");
  });
});


/* COUNTERS */
const counters = document.querySelectorAll('.counter');

const animateNumbers = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.querySelector('.counter-number').innerText;
    const increment = target / 100;

    if (count < target) {
      counter.querySelector('.counter-number').innerText = Math.ceil(count + increment);
      setTimeout(animateNumbers, 1000);
    }
  });
};

const checkScroll = () => {
  const triggers = document.querySelectorAll('.counter');
  const windowHeight = window.innerHeight;

  triggers.forEach((trigger) => {
    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop < windowHeight) {
      animateNumbers();
    }
  });
};

window.addEventListener('scroll', checkScroll);

ScrollReveal().reveal('.container-year', {
  delay: 200,
  distance: '50px',
  interval: 200,
  reset: true
});




//TIMELINE 
let circleItems = document.querySelectorAll('.circle');

circleItems.forEach(circle => {
  let content = circle.parentNode;
  let pTags = content.querySelectorAll('p');
  let imageContainer = content.querySelector('.timeline-image-container'); // Selecciona el contenedor de la imagen
  let icon = circle.querySelector('.fa'); // Selecciona el icono dentro del círculo

  const showContent = () => {
    pTags.forEach(p => {
      p.classList.remove('hide-content');
    });
    if (imageContainer) {
      imageContainer.classList.remove('hide-content'); // Muestra el contenedor de la imagen
      let imageContainerPTags = imageContainer.querySelectorAll('p');
      imageContainerPTags.forEach(p => p.classList.remove('hide-content')); // Muestra los párrafos dentro del contenedor de la imagen
    }
    content.classList.remove('hide-box-shadow'); 
    circle.style.borderColor = "#d76e14";  // Cambia el color del borde del círculo
    if (icon) icon.style.color = "#d76e14";  // Cambia el color del icono
  };

  const hideContent = () => {
    pTags.forEach(p => {
      p.classList.add('hide-content');
    });
    if (imageContainer) {
      imageContainer.classList.add('hide-content'); // Oculta el contenedor de la imagen
      let imageContainerPTags = imageContainer.querySelectorAll('p');
      imageContainerPTags.forEach(p => p.classList.add('hide-content')); // Oculta los párrafos dentro del contenedor de la imagen
    }
    content.classList.add('hide-box-shadow');
    circle.style.borderColor = "grey";  // Cambia el color del borde del círculo a gris
    if (icon) icon.style.color = "grey";  // Cambia el color del icono a gris
  };

  circle.addEventListener('mouseover', showContent);
  circle.addEventListener('mouseout', hideContent);
});




  // Función para verificar si un elemento está visible en la ventana
  function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Función para agregar la clase de animación cuando el elemento está visible
  function addAnimationClass() {
    var elements = document.querySelectorAll('.fadeInLeft');

    elements.forEach(function (element) {
      if (isElementVisible(element)) {
        element.classList.add('animate');
      }
    });
  }

  // Detectar cuando se hace scroll y llamar a la función para agregar la clase de animación
  window.addEventListener('scroll', addAnimationClass);


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
          pinColor = 'red';
          break;
        case 'constructor-checkbox':
          pinColor = 'blue';
          break;
        case 'operator-checkbox':
          pinColor = 'green';
          break;
        // Agrega más casos según sea necesario para otros tipos de checkbox
      }
      return pinColor;
    }
  });
  



  // Inicializa el mapa
  
  var map = L.map('map').setView([-33.4372, -70.6506], 3);
  console.log(map);
  
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  

