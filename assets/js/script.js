// Efecto para el Header
document.addEventListener('scroll', function () {
  const header = document.querySelector('.sticky-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.remove('hidden');
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
    header.classList.add('hidden');
  }
});

// Efecto de escritura
document.addEventListener('DOMContentLoaded', function () {
  const text = '"Hello World!"';
  let index = 0;
  const speed = 100; // Velocidad en milisegundos
  const delayBetweenLoops = 4000; // 4 segundos de pausa entre repeticiones

  function typeWriter() {
    const titleElement = document.getElementById('typewriter');

    if (index < text.length) {
      titleElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      titleElement.style.borderRight = 'none'; // Eliminar el cursor al final del texto

      // Reiniciar el efecto de escritura después de 4 segundos
      setTimeout(function () {
        index = 0;
        titleElement.textContent = ''; // Limpiar el contenido
        titleElement.style.borderRight = '2px solid'; // Restaurar el cursor
        typeWriter(); // Iniciar nuevamente el efecto
      }, delayBetweenLoops);
    }
  }

  typeWriter();
});

// efecto fade skills
document.addEventListener('DOMContentLoaded', function () {
  const skillsElements = document.querySelectorAll('.skills');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(
          () => {
            entry.target.classList.add('animate');
          },
          index * 200 + 200
        ); // Incremento de 200ms para cada div, comenzando desde 200ms
        observer.unobserve(entry.target); // Dejar de observar después de animar
      }
    });
  });

  skillsElements.forEach((el) => {
    observer.observe(el);
  });
});

// Header
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');

  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('open');
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      navMenu.classList.remove('open');
    });
  });

  // Cerrar el menú al hacer clic fuera de él
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove('open');
    }
  });
});
