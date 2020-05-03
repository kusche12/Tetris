var canvas;
var canvasContext;

window.onload = () => {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    setInterval(() => {
        moveEverything();
        drawEverything();
    }, 1000 / framesPerSecond);

}

function drawEverything() {
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function moveEverything() {
    //console.log('move blocks');
}