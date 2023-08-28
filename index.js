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


// profile

  
const icon = document.querySelector('.icon');
const boxprofile = document.querySelector('.box-profile');

const toggleboxprofile = () => {
  boxprofile.classList.toggle('active');
}

icon.addEventListener('click', e => {
  e.stopPropagation();

  toggleboxprofile();
});

document.addEventListener('click', e => {

  let target = e.target;
  let its_boxprofile = target === boxprofile || boxprofile.contains(target);
  let its_icon = target === icon;
  let boxprofile_is_active = boxprofile.classList.contains('active');
  
  if (!its_boxprofile && !its_icon && boxprofile_is_active) {
    toggleboxprofile();
  }
})





//icon.addEventListener('click', () => {
  //   boxprofile.classList.toggle('hidden');
//})

//window.addEventListener('click', (event) => {
  //if(event.target.classList.contains('.box-profile')) {
   //boxprofile.classList.toggle('hidden');
//} console.log('hidden')
//}
//)
//