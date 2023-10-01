const imgcard = document.querySelector('.imgcard');
const images = document.querySelector('.images');
const input = document.querySelector('.input');
const search = document.querySelector('.search-box')
const key = `b1YRF4ytLir8hPR_szjquDquc1vfHMxSlaTnn1leFPM`
const btnmore = document.querySelector('.more');
const lupa = document.querySelector('.search');
const close = document.querySelector('.close');

const per_page = 30;
const keyword = '';
const page = 1;


window.onload = () => {
  fetchData()
}



function fetchData () {   
   const url1 = `https://api.unsplash.com/search/photos/?query=images&page=${page}&per_page=${per_page}&client_id=${key}`;
    fetch(url1)
   .then((responsive) => responsive.json())
   .then((data1) => {
   
    const results1 = data1.results;

    if(page === 1) {
        images.innerHTML = '';
    }

    results1.map((result) => {
        const img = document.createElement('img');
        img.src = result.urls.small;
        img.alt = result.alt_description;

        images.appendChild(img);
   })

    })};
      

async function getData () {
    const keyword = input.value;
    const url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=${per_page}&client_id=${key}`;
    const res = await fetch(url);
    const data = await res.json();

    const results = data.results;

    if(page === 1) {
        images.innerHTML = '';
    }

    results.map((result) => {
       // const imgWrapper = document.createElement('div');
        //imgWrapper.classList.add('imgcard');
        const img = document.createElement('img');
        img.src = result.urls.small;
        img.alt = result.alt_description;

        images.appendChild(img);
        //imgcard.appendChild(imgWrapper);

}); 

}

search.addEventListener('submit', (e) => {
   e.preventDefault();
   const page = 1;

   getData ();
})


//btnmore.addEventListener('click', (e) => {
  //  if(page >1)
    //btnmore

    //getData ();
//})


