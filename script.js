// ===================
// Mobile Drawer Toggle
// ===================
function toggleDrawer() {
  const sidebar = document.getElementById('side-bar');
  sidebar.classList.toggle('open');
}

function openSubMenu(menu) {
  const submenu = document.getElementById('submenu');
  const submenuTitle = document.getElementById('submenu-title');
  const submenuContent = document.getElementById('submenu-content');

  submenu.classList.add('open');
  submenuTitle.textContent = menu.toUpperCase();

  let items = [];

  switch (menu) {
    case 'trend':
      items = ['Trending 1', 'Trending 2', 'Trending 3'];
      break;
    case 'makeup':
      items = ['Lipstick', 'Foundation', 'Eyeshadow'];
      break;
    case 'accessories':
      items = ['Brushes', 'Sponges', 'Bags'];
      break;
    case 'demo':
      items = ['Demo Page 1', 'Demo Page 2'];
      break;
    case 'pages':
      items = ['About Us', 'FAQ', 'Contact'];
      break;
    case 'theme':
      items = ['Theme 1', 'Theme 2', 'Contact'];
      break;
    case 'fragrance':
      items = ['Perfume', 'Body Mist', 'Essential Oils'];
      break;
  }

  submenuContent.innerHTML = items.map(item => `<li>${item}</li>`).join('');
}

function closeSubMenu() {
  document.getElementById('submenu').classList.remove('open');
}


// ===================
// Carousel Functionality
// ===================

let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const banner = document.querySelector('.banner');

// Show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
  });
  slides[index].classList.add('active');
  dots[index].classList.add('active');
  currentSlide = index;
}

// Next & Prev Functions
function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Dot Navigation
function goToSlide(index) {
  showSlide(index);
}

// Button Event Listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Auto-Slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on mouse enter, resume on leave
banner.addEventListener('mouseenter', () => clearInterval(slideInterval));
banner.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Show arrows on hover
banner.addEventListener('mouseenter', () => {
  nextBtn.style.opacity = '1';
  prevBtn.style.opacity = '1';
});
banner.addEventListener('mouseleave', () => {
  nextBtn.style.opacity = '0';
  prevBtn.style.opacity = '0';
});

// Initialize first slide
showSlide(0);
