/*
module.exports = {
    grid: function () {
        canvasContext.fillStyle = 'gray';
        for (let i = 0; i < canvas.width; i += 30) {
            canvasContext.fillRect(i, 0, 1/2, canvas.height);
        }
        for (let j = 0; j < canvas.height; j += 30) {
            canvasContext.fillRect(0, j, canvas.width, 1/2);
        }
    },
    rect: function (posX, posY, width, height, color) {
        canvasContext.fillStyle = color;
        canvasContext.fillRect(posX, posY, width, height);
    },
    lshape: function () {
        drawRect(0, 0, BLOCKSIZE * 4, BLOCKSIZE, 'teal')
    },
    rshape: function () {
        drawRect(0, 0, BLOCKSIZE, BLOCKSIZE * 2, 'orange');
        drawRect(0, BLOCKSIZE, BLOCKSIZE * 4, BLOCKSIZE, 'orange');
    },
    squareshape: function () {
        drawRect(0, 0, BLOCKSIZE * 2, BLOCKSIZE * 2, 'yellow');
    },
    sshape: function () {
        drawRect(BLOCKSIZE, 0, BLOCKSIZE * 2, BLOCKSIZE, 'green');
        drawRect(0, BLOCKSIZE, BLOCKSIZE * 2, BLOCKSIZE, 'green');
    },
    tshape: function () {
        drawRect(BLOCKSIZE, 0, BLOCKSIZE, BLOCKSIZE, 'purple');
        drawRect(0, BLOCKSIZE, BLOCKSIZE * 3, BLOCKSIZE, 'purple');
    },
    zshape: function () {
        drawRect(0, 0, BLOCKSIZE * 2, BLOCKSIZE, 'red');
        drawRect(BLOCKSIZE, BLOCKSIZE, BLOCKSIZE * 2, BLOCKSIZE, 'red');
    }
}
*/

export function grid() {
    canvasContext.fillStyle = 'gray';
    for (let i = 0; i < canvas.width; i += 30) {
        canvasContext.fillRect(i, 0, 1/2, canvas.height);
    }
    for (let j = 0; j < canvas.height; j += 30) {
        canvasContext.fillRect(0, j, canvas.width, 1/2);
    }
}

export function rect(posX, posY, width, height, color) {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(posX, posY, width, height);
}