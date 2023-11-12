const score_ = document.querySelector ('.score');
const highScore_ = document.querySelector ('.high-score');
const gameBoard = document.querySelector ('.game-board');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const resultsModal = document.querySelector('.results-modal');
const controls = document.querySelectorAll('.controls button');
const result = document.querySelector('.results');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const list = document.querySelectorAll('.list');
const playBtn = document.querySelector('.playbtn');
const game = document.querySelector('.game');
const start = document.querySelector('.start');
const end = document.querySelector('.end');
const replay = document.querySelector('.replay');

let startgame = new Audio();
startgame.volume = 0.6;
let eatfood = new Audio();
eatfood.volume = 0.7;
let gameover = new Audio();
gameover.volume = 0.6;
let fail = new Audio();
fail.volume = 0.7;

startgame.src = "./assets/mp3/start1.mp3";
gameover.src = "./assets/mp3/gameover.mp3";
eatfood.src = "./assets/mp3/eat1.mp3";
fail.src = "./assets/mp3/udar1.mp3";


let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;
let snake = [];
let setIntervalId;
let score = 0;



//let scoreres = localStorage.getItem('score') || 0;
//score_.innerText = `Score: ${scoreres}`;



const newFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}


const handleGameOver = () => {
    clearInterval(setIntervalId)
    alert('Game Over: Press OK to replay...');
  //  end.classList.toggle('active');
   // game.classList.toggle('active');
    location.reload();
    gameover.play();

}


const changeDirection = (e) => {
    if(e.key === 'ArrowUp') {
        velocityX = -1;
        velocityY = 0;    
    }
    else if (e.key === 'ArrowDown') {
        velocityX = 1;
        velocityY = 0; 
    }
    else if (e.key === 'ArrowLeft') {
        velocityX = 0;
        velocityY = -1; 
    }
    else if (e.key === 'ArrowRight') {
        velocityX = 0;
        velocityY = 1; 
    }

}

controls.forEach(key => {
    key.addEventListener('click', () => changeDirection({ key: key.dataset.key}));
    
});

const initGame = () => {
    if(gameOver) return handleGameOver();
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX} / ${foodY}"></div>`;

    if(snakeX === foodX && snakeY === foodY) {
        newFood();
        snake.push([foodX, foodY]);
        score ++;
        eatfood.play();


       
        

    localStorage.setItem('score'(localStorage.getItem('score') || ``) + `${score}`);
        

       // highScore = score >= highScore ? score : highScore;
       // localStorage.setItem('score', score);
        score_.innerText = `Score: ${score}`;
        li.innerText = `Score: ${score}`;

    }


    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = snake[i - 1];
    }

    snake[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
        gameover.play();
    }

    for ( let i = 0; i < snake.length; i++) {
    htmlMarkup += `<div class="headsnake" style="grid-area: ${snake[i][0]} / ${snake[i][1]}"></div>`;
    }
    gameBoard.innerHTML = htmlMarkup;

    playBtn.addEventListener('click', () => {
        game.classList.toggle('active');
      });

    playBtn.addEventListener('click', () => {
        start.classList.toggle('active');
        startgame.play();
      });

    result.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
    });
  
    overlay.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
      });

      closeBtn.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
      });

     // replay.addEventListener('click', () => {
       // start.classList.remove('active');
      //});

      //replay.addEventListener('click', () => {
      //  game.classList.remove('active');
      //});

      //replay.addEventListener('click', () => {
       // end.classList.remove('active');
      //});
//


}



newFood();

setIntervalId = setInterval(initGame, 125);

document.addEventListener('keydown', changeDirection)

