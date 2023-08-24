const slider = document.querySelector('.slider');
const sliderLine = document.querySelector('.slider-line');
const sliderButtons = document.querySelectorAll('.slider-button1');
const sliderImg = document.querySelectorAll('.slider-img');

let sliderIndex = 0;
let sliderWidth = slider.offsetWidth;

function nextSlide () {
    sliderIndex++;
    if (sliderIndex >= sliderImg.length) {
        sliderIndex = 0;
    } 

    rollSlider();
    thisSlide(sliderIndex);
}

function prevSlider() {
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = sliderImg.length -1;
    } 


    rollSlider();
    thisSlide(sliderIndex);

}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderIndex * sliderWidth}px)`;
}

function thisSlide(index) {
     sliderButtons.forEach(item => item.classList.remove('active'));
    sliderButtons[index].classList.add('active');
}

sliderButtons.forEach((button, index) => {
     button.addEventListener('click', () => {
         sliderIndex = index;
         rollSlider();
         thisSlide(sliderIndex);
     })
 })

