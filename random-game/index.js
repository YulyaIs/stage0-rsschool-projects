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
const list = document.querySelectorAll('.list')

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;
let snake = [];
let setIntervalId;
let score = 0;

//let result = localStorage.getItem('results') ? false : localStorage.getItem('savedResults');


//let highScore = localStorage.getItem('high-score') || 0;
//highScore_.innerText = `High score: ${highScore}`;

let res = localStorage.getItem('list') || [];
list.innerText = `Score: ${res}`;
console.log(list)

const newFood = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;

}

const handleGameOver = () => {
    clearInterval(setIntervalId)
    alert('Game Over: Press OK to replay...');
    location.reload();
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

       // localStorage.setItem('score', score);


       // highScore = score >= highScore ? score : highScore;
       // localStorage.setItem('high-score', highScore);
        score_.innerText = `Score: ${score}`;
       // highScore_.innerText = `High score: ${highScore}`;
        localStorage.setItem('list', score);

    }


    for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = snake[i - 1];
    }

    snake[0] = [snakeX, snakeY];

    snakeX += velocityX;
    snakeY += velocityY;

    if(snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for ( let i = 0; i < snake.length; i++) {
    htmlMarkup += `<div class="headsnake" style="grid-area: ${snake[i][0]} / ${snake[i][1]}"></div>`;
    }
    gameBoard.innerHTML = htmlMarkup;

   

    result.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
    });
  
    overlay.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
      });

      closeBtn.addEventListener('click', () => {
        resultsModal.classList.toggle('active');
      });
}



newFood();

setIntervalId = setInterval(initGame, 125);

document.addEventListener('keydown', changeDirection)

