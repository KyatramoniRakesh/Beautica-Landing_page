// ===================
// Mobile Drawer Toggle
// ===================

function toggleDrawer() {
  const sidebar = document.getElementById('side-bar');
  sidebar.classList.toggle('open');
}

// Submenu items map for better scalability
const submenuItems = {
  trend: ['Trending 1', 'Trending 2', 'Trending 3'],
  makeup: ['Lipstick', 'Foundation', 'Eyeshadow'],
  accessories: ['Brushes', 'Sponges', 'Bags'],
  demo: ['Demo Page 1', 'Demo Page 2'],
  pages: ['About Us', 'FAQ', 'Contact'],
  theme: ['Theme 1', 'Theme 2', 'Contact'],
  fragrance: ['Perfume', 'Body Mist', 'Essential Oils']
};

function openSubMenu(menu) {
  const submenu = document.getElementById('submenu');
  const submenuTitle = document.getElementById('submenu-title');
  const submenuContent = document.getElementById('submenu-content');

  submenu.classList.add('open');
  submenuTitle.textContent = menu.toUpperCase();

  const items = submenuItems[menu] || [];
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
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Next Slide
function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

// Previous Slide
function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Go to specific slide via dot
function goToSlide(index) {
  showSlide(index);
}

// Event Listeners
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Pause auto-slide on hover
banner.addEventListener('mouseenter', () => clearInterval(slideInterval));
banner.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

// Show/hide arrows on hover
banner.addEventListener('mouseenter', () => {
  nextBtn.style.opacity = '1';
  prevBtn.style.opacity = '1';
});
banner.addEventListener('mouseleave', () => {
  nextBtn.style.opacity = '0';
  prevBtn.style.opacity = '0';
});

// Initialize
showSlide(0);


// ===================
// Follow-Carousel Functionality
// ===================



const followImgs = document.querySelector(".follow-imgs");
const followPrev = document.querySelector(".follow-prev");
const followNext = document.querySelector(".follow-next");
const images = followImgs.querySelectorAll("img");

const totalImages = images.length;

let followPosition = 0;
const followMoveBy = 180;

followNext.addEventListener("click", () => {
    followPosition -= followMoveBy;

    if (Math.abs(followPosition) >= followMoveBy * totalImages) {
        followPosition = 0;
    }

    followImgs.style.transform = `translateX(${followPosition}px)`;
});

followPrev.addEventListener("click", () => {
    followPosition += followMoveBy;

    if (followPosition > 0) {
        followPosition = -followMoveBy * (totalImages - 1);
    }

    followImgs.style.transform = `translateX(${followPosition}px)`;
});













