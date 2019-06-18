export const dinoCoordinates = {
    'x' : 25,
    'y' : 539,
    'initialY' : 539, //Need to be equal to the y value
    'jumpheight' : 200,
};

export const dinoSpriteCoordinates = {
    'x' : 280,
    'y' : 185,
};


export function dinoJump() {
    dinoCoordinates.y = dinoCoordinates.y - 8;
    if (dinoCoordinates.y < dinoCoordinates.initialY - dinoCoordinates.jumpheight){
        setTimeout(dinoJumpBack, 30)
    }
    else {
        window.requestAnimationFrame(()=> {dinoJump()});
    }
}


function dinoJumpBack() {
    dinoCoordinates.y = dinoCoordinates.y +8;
    if (dinoCoordinates.y < dinoCoordinates.initialY) {
        window.requestAnimationFrame(()=> {dinoJumpBack()});
    } else {
        dinoCoordinates.y = dinoCoordinates.initialY;
    }
}

const dinoTempo = {
    'speed' : 3, //higher the speed is, slower the dino walks
    'frame' : 0,
};

export function dinoMove() {
    dinoTempo.frame = dinoTempo.frame +1;
    if (dinoTempo.frame <= dinoTempo.speed) {
        dinoSpriteCoordinates.x = 280;
    } else if (dinoTempo.frame > dinoTempo.speed && dinoTempo.frame <= dinoTempo.speed*2) {
        dinoSpriteCoordinates.x = 400;
    } else {
        dinoSpriteCoordinates.x = 520;
    }
    if (dinoTempo.frame > dinoTempo.speed*3) {
        dinoTempo.frame = 0;
    }
}