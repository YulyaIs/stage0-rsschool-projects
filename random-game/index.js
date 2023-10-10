const game = document.getElementById('game');
const ctx = game.getContext('2d');

const bird = new Image ();
const bcg = new Image ();
const pipetop = new Image ();
const pipebot = new Image ();
const land = new Image ();
const gap = 90;
const xposition = 10;
const yposition = 150;

bird.src = "./assets/img/bird.png";
bcg.src = "./assets/img/bcg.png";
pipetop.src = "./assets/img/pipetop.png";
pipebot.src = "./assets/img/pipebottom.png";
land.src = "./assets/img/land.png";

function draw () {
    ctx.drawImage (bcg, 0, 0);

    ctx.drawImage (pipetop, 100, 0);

    ctx.drawImage (pipebot, 100, 0 + pipetop.height + gap);

    ctx.drawImage (land, 0, game.height - land.height);

    ctx.drawImage (bird, xposition, yposition, 40, 40);
}

window.onload = draw;