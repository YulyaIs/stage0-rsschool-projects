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
const form = document.querySelector('.form-register');
const authicon = document.querySelector('.icon-auth')


form.addEventListener('submit', (event) => {
  event.preventDefault();
});


  register.addEventListener('click', () => {
    modal.classList.toggle('active');
});

  close.addEventListener('click', () => {
    modal.classList.toggle('active');
});

  overlay.addEventListener('click', () => {
    modal.classList.toggle('active');
});

  buttoncard.addEventListener('click', () => {
    modal.classList.toggle('active');
  });


  form.addEventListener('submit', () => {
    modal.classList.toggle('active');

  });


  form.addEventListener('submit', () => {
      icon.classList.toggle('none');
    }) 

  form.addEventListener('submit', () => {      
    authicon.classList.toggle('active');

    const elem = document.getElementsByClassName('iniciali');
    elem[0].innerHTML = "YI"

  });

  //let randomcard = getRandomcard(16, 1000000000);
  //function getRandomcard(min, max) {
   // min = Math.ceil(16);
   // max = Math.floor(10000000000);
   // return Math.floor(Math.random() * (max - min)) + min;
  //}
   // console.log(randomcard)

    //let source = 'Yulya Ishim';
    //let iniciali = source.split(' ');

    //let result = iniciali[1][0] + '.' + iniciali[2][0] + '.';
    //let result = `${iniciali[1][0]}. ${iniciali[2][0]}.`;
    //console.log(result);

 //profile

 const boxprofile1 = document.querySelector('.box-profile1');
 const logout = document.querySelector('.logout');
 const menuprofile = document.querySelector('.menu-profile');

const toggleboxprofile1 = () => {
  boxprofile1.classList.toggle('active');
}

authicon.addEventListener('click', e => {
  e.stopPropagation();

  toggleboxprofile1();
});

document.addEventListener('click', e => {

  let target = e.target;
  let its_boxprofile1 = target === boxprofile1 || boxprofile1.contains(target);
  let its_authicon = target === authicon;
  let boxprofile1_is_active = boxprofile1.classList.contains('active');
  
  if (!its_boxprofile1 && !its_authicon && boxprofile1_is_active) {
    toggleboxprofile1();
  }
});

logout.addEventListener('click', () => {
  boxprofile1.classList.toggle('active');
}); 

logout.addEventListener('click', () => {
  authicon.classList.toggle('active');
});

logout.addEventListener('click', () => {
  icon.classList.toggle('none')
})




//localstorage

//const form = document.querySelector('.form-register');
 const name = document.querySelector('#firstname');
 const lname = document.querySelector('#lastname');
 const email = document.querySelector('#email');
 const password = document.querySelector('#password');
 const btnregister = document.querySelector('.button-register');
 const iconauth = document.querySelector('.icon-auth');

  const user1 = {name: 'Yulya', lname: 'Ishim', email: 'lulu@mail.ru', password: '12345678'} 
 // const user2 = {name: 'Lida', lname: 'Ivanova', email: 'kuku@mail.ru', password: '23456789'}
 // const user3 = {name: 'Mila', lname: 'Petrova', email: 'dudu@mail.ru', password: '34567890'}

 // const users = [user1, user2, user3]
 const users = [user1]
 

  localStorage.setItem('users', JSON.stringify(users));

  const savedusers = JSON.parse(localStorage.getItem('users')); 


// modal login

const modal1 = document.querySelector('.modal1');
const close1 = document.querySelector('.button-close1');
const overlay1 = document.querySelector('.overlay1');
const login = document.querySelector('.login');
const buttoncard1 = document.querySelector('.button-card1');
const registerlogin = document.querySelector('.register-login');
const registerlogin1 = document.querySelector('.register-login1');
const buybtn = document.querySelectorAll('.button-first-book');
const form1 = document.querySelector('.form-login');


  login.addEventListener('click', () => {
    modal1.classList.toggle('active');
});

  close1.addEventListener('click', () => {
    modal1.classList.toggle('active');
});

  overlay1.addEventListener('click', () => {
    modal1.classList.toggle('active');
});

  buttoncard1.addEventListener('click', () => {
    modal1.classList.toggle('active');
  });

  registerlogin.addEventListener('click', () => {
    modal1.classList.toggle('active');
  });
 
  for( let i = 0; i < buybtn.length; i++) {
    const btn = buybtn[i];
  btn.addEventListener('click', (e) => {
  modal1.classList.toggle('active');

})};

form1.addEventListener('submit', (event) => {
  event.preventDefault();
});

form1.addEventListener('submit', () => {
  modal1.classList.toggle('active');

});

form1.addEventListener('submit', () => {
  icon.classList.toggle('none');
}) 

form1.addEventListener('submit', () => {      
authicon.classList.toggle('active');

const elem = document.getElementsByClassName('iniciali');
elem[0].innerHTML = "YI"

});



 
//function auth () {
  //if (email.value === 'lulu@mail.ru' && password.value === '12345678')
  //alert ('Welcome');
  //else if (name === 'Lida', lname === 'Ivanova', email === 'kuku@mail.ru', password === '23456789')
  //alert ('Welcome');
  //else if (name === 'Mila', lname === 'Petrova', email === 'dudu@mail.ru', password === '34567890')
  //alert ('Welcome');
  //else {
  //alert ('Uncorrect');
  //}}

 
//}
//})

//modal buy card

const modal2 = document.querySelector('.modal2');
const overlay2 = document.querySelector('.overlay2');
const close2 = document.querySelector('.button-close2');
const form2 = document.querySelector('.form-card');
const btncard = document.querySelector('.button-buy')


close2.addEventListener('click', () => {
  modal2.classList.toggle('active');
});

overlay2.addEventListener('click', () => {
  modal2.classList.toggle('active');
});

btncard.addEventListener('click', (event) => {
  event.preventDefault();
});

btncard.addEventListener('click', () => {
  modal2.classList.toggle('active');
console.log(submit)
});


for( let i = 0; i < buybtn.length; i++) {
  const btn = buybtn[i];
btn.addEventListener('click', (e) => {
modal2.classList.toggle('active');
})};




