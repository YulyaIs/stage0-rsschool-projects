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
    thisSlider(sliderIndex);
}

function prevSlider() {
    sliderIndex--;
    if (sliderIndex < 0) {
        sliderIndex = sliderImg.length -1;
    } 


    rollSlider();
    thisSlider(sliderIndex);

}

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderIndex * sliderWidth}px)`;
}

function thisSlider(index) {
     sliderButtons.forEach(item => item.classList.remove('active'));
    sliderButtons[index].classList.add('active');
}

sliderButtons.forEach((button, index) => {
     button.addEventListener('click', () => {
         sliderIndex = index;
         rollSlider();
         thisSlider(sliderIndex);
     })
 })

// tab

const itemstab = document.querySelectorAll('.items-tab');
const buttontab = document.querySelectorAll('.tabbutton');
let tabname;


buttontab.forEach(item => {
    item.addEventListener('click', selectbuttontab)
});

function selectbuttontab() {
    buttontab.forEach(item => {
        item.classList.remove('active');
    });

    this.classList.add('active');
    tabname = this.getAttribute('data-tab');
    selectitemstab(tabname);

    function selectitemstab(tabname) {
        itemstab.forEach(item => {
            item.classList.contains(tabname)? item.classList.add('active') : item.classList.remove('active');
        });        
        
    }
};

