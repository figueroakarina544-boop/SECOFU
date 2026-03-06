const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Seleccionamos el offcanvas y todos los enlaces dentro
const offcanvasElement = document.getElementById('offcanvasNavbar');
const offcanvasLinks = offcanvasElement.querySelectorAll('.nav-link');

// Creamos una instancia de Bootstrap Offcanvas
const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

// Cerramos el offcanvas al tocar cualquier link
offcanvasLinks.forEach(link => {
  link.addEventListener('click', () => {
    bsOffcanvas.hide();
  });
});

// codigo para que los controles desaparezcan
const track = document.querySelector('.carousel-track');
const logos = Array.from(track.children);

let speed = 1;
let position = 0;

// Duplicar logos para efecto infinito
logos.forEach(logo => {
  const clone = logo.cloneNode(true);
  track.appendChild(clone);
});

function animateCarousel() {
  position -= speed;
  if (Math.abs(position) >= track.scrollWidth / 2) {
    position = 0;
  }
  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();




// testimonios
const testItems = document.querySelectorAll('.test-item');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showTestimonial(index) {
  testItems.forEach((item, i) => {
    item.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testItems.length;
  showTestimonial(currentIndex);
}

// Cambio automático cada 5 segundos
setInterval(nextTestimonial, 5000);

// Cambio manual con dots
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentIndex = parseInt(dot.getAttribute('data-index'));
    showTestimonial(currentIndex);
  });
});

// Inicial
showTestimonial(currentIndex);


/////
/*     JS ULTRA PREMIUM ACORDEÓN   */
/* =============================== */
const toggles = document.querySelectorAll('.accordion-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', e => {
    e.preventDefault();
    const card = toggle.closest('.accordion-card');
    const wrapper = card.querySelector('.answer-wrapper');
    const isActive = card.classList.contains('active');

    // Cerrar todas las demás cards
    document.querySelectorAll('.accordion-card').forEach(c => {
      if (c !== card) {
        c.classList.remove('active');
        const w = c.querySelector('.answer-wrapper');
        w.style.height = '0';
      }
    });

    if (!isActive) {
      // Abrir esta card: ajustar altura al contenido
      card.classList.add('active');
      const contentHeight = wrapper.querySelector('.answer').scrollHeight;
      wrapper.style.height = contentHeight + 'px';
    } else {
      // Cerrar
      card.classList.remove('active');
      wrapper.style.height = '0';
    }
  });
});
// Detecta cuando el header está visible y activa animación
const faqHeader = document.querySelector('.faq-header-glass');

function animateFAQHeader() {
  const top = faqHeader.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight - 100) {
    faqHeader.classList.add('visible');
    window.removeEventListener('scroll', animateFAQHeader);
  }
}

window.addEventListener('scroll', animateFAQHeader);
animateFAQHeader(); // Ejecutar al cargar por si ya está visible