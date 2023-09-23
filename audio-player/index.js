const background = document.querySelector('.artist-background');
const song = document.querySelector('.song');
const thumbnail = document.querySelector('.thumbnail');
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const artist = document.querySelector('.artist');
const songtitle = document.querySelector('.song-title');
const prev = document.querySelector('.prevsong');
const next = document.querySelector('.nextsong');
const progress = document.querySelector('.progress');
const current = document.querySelector('.current-time');
const durationtime = document.querySelector('.duration-time');
const slider = document.querySelector('.slider')

//const background = document.getElementById('artist-background');
//const song = document.getElementById('song');
//const thumbnail = document.getElementById('thumbnail');
//const play = document.getElementById('play');
//const pause = document.getElementById('pause');
//const artist = document.getElementById('artist');
//const songtitle = document.getElementById('song-title');
//const prev = document.getElementById('prevsong');
//const next = document.getElementById('nextsong');
//const progress = document.getElementById('progress');
//const currenttime = document.getElementById('currenttime');
//const durationtime = document.getElementById('durationtime');

let songIndex = 0;

let backgrounds = [
    "./assets/img/Imagine-Dragons.jpg",
    "./assets/img/The_score1.jpg",
    "./assets/img/Elvis_Presley1.jpg"
]

let songs = [ 
    "./assets/audio/Imagine Dragons - Believer.mp3",
    "./assets/audio/The Score - Glory.mp3",
    "./assets/audio/Elvis Presley ft. Junkie XL - A Little Less Conversation.mp3",
];

let thumbnails = [
    "./assets/img/Imagine-Dragons1.jpg",
    "./assets/img/The_score.jpg",
    "./assets/img/Elvis_Presley.jpg",
]; 
    
let artists = ["Imagine Dragone", "The Score", "Elvis Presley"];

let songtitles = ["Believer", "Glory", "A Little Less Conversation"];

let playing = true;
//let audio = newaudio;

play.addEventListener ('click', playPause);
//pause.addEventListener ('click', playPause);

//function playPause () {
   // play.classList.toggle ('pause');
  //} 

function playPause () {
  if (playing) {
    play.classList.toggle ('pause');

  song.play();
  playing = false;
} else {
    play.classList.remove ('pause');

  song.pause();
  playing = true;
}
}

  
  //play.addEventListener("click", pausePlay);
  
  song.addEventListener("ended", nextsong);
  
  function nextsong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = backgrounds[songIndex];
  
    artist.textContent = artists[songIndex];
    songtitle.textContent = songtitles[songIndex];
  
    playing = true;
    playPause();

  }
  
  next.addEventListener("click", nextsong);
  
  function prevsong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
  
    song.src = songs[songIndex];
    thumbnail.src = thumbnails[songIndex];
    background.src = backgrounds[songIndex];
  
    artist.textContent = artists[songIndex];
    songtitle.textContent = songtitles[songIndex];
  
    playing = true;
    playPause();
  }
  
  prev.addEventListener("click", prevsong);


  song.addEventListener('loadedmetadata', (event) => {


    song.ontimeupdate = function () {
      let ct = song.currenttime;
      current.innerHTML = timeformat.ct;
    }

    let duration = song.duration;
    prog = Math.floor((ct * 100) / duration);   

    function timeformat(ct) {
      let minutes = Math.floor(ct / 60);
      let seconds = Math.floor(ct % 60);
      if (seconds < 10) {
        seconds = '0'+ seconds;
      }
      return minutes + ':' + seconds;
     
      }

    // currenttime.innerHTML = '00:00';

    //function progressValue() {
      //slider.max = song.duration;
      //slider.value = song.currenttime;
    
     //currenttime.textContent = formatTime(song.currenttime);
     //durationtime.textContent = formatTime(song.duration);
    //}     console.log(song.duration)

    
    //setInterval(progressValue, 500);

  }
//currenttime.innerHTML = '00:00';

//durationtime.innerHTML = '00:00';
  
  
  //setTimeout(() => {
    
  // slider.max = song.duration;
  // durationtime.innerHTML = formatTime(song.duration);
  //}, 300)

  //function formatTime(sec) {
    //let minutes = Math.floor(sec / 60);
    //let seconds = Math.floor(sec - minutes * 60);
    //if (seconds < 10) {
    //  seconds = `0${seconds}`;
    //}
    //return `${minutes}:${seconds}`;
  //}

  //setInterval(() => {

    //slider.value = song.currenttime;
    //currenttime.innerHTML = formatTime(song.currenttime);
//}, 500);

//function formatTime(sec) {
  //let minutes = Math.floor(sec / 60);
  //let seconds = Math.floor(sec - minutes * 60);
  //if (seconds < 10) {
    //seconds = `0${seconds}`;
  //}
  //return `${minutes}:${seconds}`;
//}
  
//});










  //function progressValue () {

    //slider.max = song.duration;
    //slider.value = song.currentTime;
    //console.log(song.duration)

    //let {current, duration} = song;

    //isNaN (duration) ? (duration = 0) : current;
    //isNaN (current) ? (current = 0) : duration;

    //currenttime.innerHTML = formatTime(song.currenttime);
   // durationtime.innerHTML = formatTime(song.duration);

  //}
  //song.addEventListener('timeupdate', progressvalue);
  //currenttime.innerHTML = '00:00';
  
  //setTimeout(() => {
    
   // slider.max = song.duration;
    //durationtime.innerHTML = formatTime(song.duration);
  
    //currenttime.textContent = formatTime(song.currenttime);
   // durationtime.textContent = formatTime(song.durationtime);
  //}, 300)
  
  //song.addEventListener('loadaddata', () => {
   // slider.max = song.duration;
   //let minutes = Math.floor(song.duration / 60);
    //let seconds = Math.floor(song.duration % 60);
    //if (seconds < 10) {
     // seconds = `0${seconds}`;
    //}
   // durationtime.innerHTML = `${minutes} : ${seconds}`;
 //});

 //slider.value = song.current;
  //let curminutes = Math.floor(song.current / 60);
  //let curseconds = Math.floor(song.current % 60);
  //if (curseconds < 10) {
  //  curseconds = `0${curseconds}`;
  //}
  //currenttime.innerHTML = `${curminutes} : ${curseconds}`;
//};

    //setInterval(() => {

    //slider.value = song.currenttime;
    //currenttime.innerHTML = formatTime(song.currenttime);
    //console.log(song.currenttime)
//}, 500)
  

  //function changeslider() {
 //   song.currenttime = slider.value;
 // }
  
 // slider.addEventListener("click", changeslider);
  )