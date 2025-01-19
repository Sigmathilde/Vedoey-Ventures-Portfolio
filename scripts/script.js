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

