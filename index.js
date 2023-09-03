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

// modal register

const register = document.querySelector('.register');
const modal = document.querySelector('.modal');
const close = document.querySelector('.button-close');
const overlay = document.querySelector('.overlay');
const buttoncard = document.querySelector('.button-card');


  register.addEventListener('click', () => {
    modal.classList.toggle('active');
})

  close.addEventListener('click', () => {
    modal.classList.toggle('active');
})

  overlay.addEventListener('click', () => {
    modal.classList.toggle('active');
})

  buttoncard.addEventListener('click', () => {
    modal.classList.toggle('active');
  })


//localstorage

const form = document.querySelector('.form-register');
 const name = document.querySelector('#firstname');
 const lname = document.querySelector('#lastname');
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const btnregister = document.querySelector('.button-register');

let users = {};


function User (name, lname, email, password) {
  this.name = name;
  this.lname = lname;
  this.email = email;
  this.password = password;
} 


function createid (users) {
  return Object.keys(users).length;

}
btnregister.addEventListener('click', (event) => {
event.preventDefault();
  
  const nameuser = name.value;
  const lnameuser = lname.value;
  const emailuser = email.value;
  const passworduser = password.value;

  const user = new User(nameuser, lnameuser, emailuser, passworduser);

  const userid = 'user' + createid(users);
  users[userid] = user;

  let usermas = Object.values(users);

  localStorage.setItem('usermas', JSON.stringify(usermas));


})


