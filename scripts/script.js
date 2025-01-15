let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
})

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateSlider() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
    updateSlider();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

// Auto Slide (optional)
setInterval(() => {
    next.click();
}, 7000);

const appSlider = document.querySelector('.app-slider');
const appSlides = document.querySelectorAll('.app-slide');
const appPrev = document.getElementById('app-prev');
const appNext = document.getElementById('app-next');
const appDots = document.querySelectorAll('.app-dot');

let appCurrentIndex = 0;

function updateAppSlider(index) {
    appSlider.style.transform = `translateX(-${index * 100}%)`;
    appDots.forEach(dot => dot.classList.remove('active'));
    appDots[index].classList.add('active');
}

appPrev.addEventListener('click', () => {
    appCurrentIndex = (appCurrentIndex - 1 + appSlides.length) % appSlides.length;
    updateAppSlider(appCurrentIndex);
});

appNext.addEventListener('click', () => {
    appCurrentIndex = (appCurrentIndex + 1) % appSlides.length;
    updateAppSlider(appCurrentIndex);
});

appDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        appCurrentIndex = index;
        updateAppSlider(appCurrentIndex);
    });
});

setInterval(() => {
    appNext.click();
}, 5000);

const sliderContainer = document.getElementById('slider-container');
const projectTitle = document.getElementById('project-title');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let interval;

// Start slider
function startSlider() {
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 4000);
}

// Pause slider
function pauseSlider() {
  clearInterval(interval);
}

// Resume slider
function resumeSlider() {
  startSlider();
}

// Update slider position and title
function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  projectTitle.textContent = slides[currentSlide].dataset.title;
}

// Show modal
function showModal(image) {
  modal.classList.add('active');
  modalTitle.textContent = image.dataset.title;
  modalDescription.textContent = image.dataset.description;
}

// Hide modal
modal.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Initialize slider
startSlider();
updateSlider();