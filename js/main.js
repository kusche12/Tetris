//import {rect, grid } from './makeshape'
var canvas;
var canvasContext;
var BLOCKSIZE;


window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    BLOCKSIZE = canvas.width / 10;
    var framesPerSecond = 30;
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

}

function drawEverything() {
    /*
    rect(0, 0, canvas.width, canvas.height, 'black');
    draw.zshape();
    grid();
    */

}

function moveEverything() {
    //console.log('move blocks');
}

