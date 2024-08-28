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
