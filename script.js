// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slideshow-dots');

slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot';
  dot.addEventListener('click', () => currentSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlides() {
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

// Auto-advance every 4.5 seconds
setInterval(showSlides, 4500);
showSlides(); // Initial display

// Lightbox
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const src = item.getAttribute('data-src');
    lightboxImg.src = src;
    lightbox.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    lightbox.classList.remove('active');
  }
});
