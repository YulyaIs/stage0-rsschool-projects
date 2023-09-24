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

let songIndex = 0;

let backgrounds = [
    "./assets/img/Imagine-Dragons.jpg",
    "./assets/img/The_score1.jpg",
    "./assets/img/the_score3.jpg",
    "./assets/img/imagine_dragons2.jpg",
    "./assets/img/Elvis_Presley1.jpg",
]

let songs = [ 
    "./assets/audio/Imagine Dragons - Believer.mp3",
    "./assets/audio/The Score - Glory.mp3",
    "./assets/audio/The Score - The Fear.mp3",
    "./assets/audio/Imagine Dragons - I'm So Sorry.mp3",
    "./assets/audio/Elvis Presley ft. Junkie XL - A Little Less Conversation.mp3",
];

let thumbnails = [
    "./assets/img/Imagine-Dragons1.jpg",
    "./assets/img/The_score.jpg",
    "./assets/img/the_score2.jpg",
    "./assets/img/imagine_dragons1.jpg",
    "./assets/img/Elvis_Presley.jpg",
]; 
    
let artists = ["Imagine Dragone", "The Score", "The Score", "Imagine Dragons", "Elvis Presley"];

let songtitles = ["Believer", "Glory", "The Fear", "I'm So Sorry", "A Little Less Conversation"];

let playing = true;

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


  //song.addEventListener('loadedmetadata', (event) => {
    // current.innerHTML = '00:00';

    function progressValue() {
      slider.max = song.duration;
      slider.value = song.currentTime;
    
     current.textContent = formatTime(song.currentTime);
     durationtime.textContent = formatTime(song.duration);
    }     console.log(song.duration)

    
    setInterval(progressValue, 500);


  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  
 
   function changeslider() {
   song.currentTime = slider.value;
 }
  
  progress.addEventListener("click", changeslider);

  