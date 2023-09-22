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
const currenttime = document.querySelector('.currenttime');
const durationtime = document.querySelector('.durationtime');


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

play.addEventListener ('click', playPause);

function playPause () {
    play.classList.toggle ('pause');
  } 



  
  //play.addEventListener("click", pausePlay);
  //pause.addEventListener("click", pausePlay);
  
  //song.addEventListener("ended", nextsong);
  
  //function nextsong() {
    //songIndex++;
    //if (songIndex > songs.length - 1) {
      //songIndex = 0;
    //}
  
    //song.src = songs[songIndex];
    //thumbnail.src = thumbnails[songIndex];
    //background.src = backgrounds[songIndex];
  
    //artist.textContent = artists[songIndex];
    //songtitle.textContent = songtitles[songIndex];
  
    //playing = true;
    //pausePlay();
  //}
  
  //next.addEventListener("click", nextsong);
  
  //function prevsong() {
    //songIndex--;
    //if (songIndex < 0) {
      //songIndex = songs.length - 1;
    //}
  
    //song.src = songs[songIndex];
    //thumbnail.src = thumbnails[songIndex];
    //background.src = backgrounds[songIndex];
  
    //artist.textContent = artists[songIndex];
    //songtitle.textContent = songtitles[songIndex];
  
    //playing = true;
    //pausePlay();
  //}
  
  //prev.addEventListener("click", prevsong);
  
  //function progressValue() {
   // progress.max = song.durationtime;
   // progress.value = song.currenttime;
  
    //currenttime.textContent = formatTime(song.currenttime);
    //durationtime.textContent = formatTime(song.durationtime);
  //}
  
  //setinterval(progressValue, 500);
  
  //function formatTime(sec) {
  //  let minutes = Math.floor(sec / 60);
  //  let seconds = Math.floor(sec - minutes * 60);
   // if (seconds < 10) {
   //   seconds = `0${seconds}`;
    //}
    //return `${minutes}:${seconds}`;
  //}
  
  //function changeProgress() {
    //song.currenttime = progress.value;
  //}
  
  //progress.addEventListener("click", changeProgress);
  