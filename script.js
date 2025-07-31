// ===================
// Mobile Drawer Toggle
// ===================

function toggleSidebar() {
  const sidebar = document.getElementById('mobile-sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

// Optional: Allow closing sidebar with Escape key
document.addEventListener('keyup', function(e){
  if(e.key === "Escape"){
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if(sidebar.classList.contains('open')){
      toggleSidebar();
    }
  }
});




// ===================
// Carousel Functionality
// ===================

let currentSlide = 0;
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const banner = document.querySelector('.banner');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function goToSlide(index) {
  showSlide(index);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => goToSlide(i));
});

let slideInterval = setInterval(nextSlide, 5000);

banner.addEventListener('mouseenter', () => clearInterval(slideInterval));
banner.addEventListener('mouseleave', () => {
  slideInterval = setInterval(nextSlide, 5000);
});

banner.addEventListener('mouseenter', () => {
  nextBtn.style.opacity = '1';
  prevBtn.style.opacity = '1';
});
banner.addEventListener('mouseleave', () => {
  nextBtn.style.opacity = '0';
  prevBtn.style.opacity = '0';
});

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




// LOGOS CAROUSEL




