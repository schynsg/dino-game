const groundCoordinates = {
    'x' : 0,
    'y' : 678,
};

const cloudsCoordinates = {
    'x' : 0,
    'y' : 100,
};

const dinoCoordinates = {
    'x' : 25,
    'y' : 539,
    'initialY' : 539, //Need to be equal to the y value
    'jumpheight' : 150,
};

const dinoSpriteCoordinates = {
    'x' : 280,
    'y' : 185,
}

const game = {
    'canvas' : document.getElementById('game'),
    'ctx' : null,
    'spriteSrc' : "./resources/sprite.png",
    'sprite' : new Image(),
    init () {
        this.ctx = this.canvas.getContext('2d');
        this.sprite.src = this.spriteSrc;
        this.draw();
    },
    draw() {
        this.sprite.addEventListener('load', ()=> {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.sprite, 0, 361, 1000, 680, 0, 0, 1000, 680);
            this.ctx.drawImage(this.sprite, 0, 0, 1348, 173, groundCoordinates.x, groundCoordinates.y, 1348, 173);
            this.ctx.drawImage(this.sprite, 0, 1041, 1000, 162, cloudsCoordinates.x, cloudsCoordinates.y, 1041, 162);
            this.ctx.drawImage(this.sprite, dinoSpriteCoordinates.x, dinoSpriteCoordinates.y, 120, 139, dinoCoordinates.x, dinoCoordinates.y, 120, 139);
        })
        window.requestAnimationFrame(()=> {animation.move()});
    },
};

onkeypress = function(e){
    if(e.charCode == 32){
        dinoJump();
    }
}

game.init()


function dinoJump() {
    dinoCoordinates.y = dinoCoordinates.y - 8;
    if (dinoCoordinates.y < dinoCoordinates.initialY - dinoCoordinates.jumpheight){
        dinoJumpBack();
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

const groundSpeed = 3.7; //higher the speed is, speeder the ground goes


const animation = {
    move(){
        groundCoordinates.x = groundCoordinates.x - groundSpeed;
        if (groundCoordinates.x <= -300){
            groundCoordinates.x = 0;
        }
        cloudsCoordinates.x = cloudsCoordinates.x - 0.1;
        if (cloudsCoordinates.x <= -900){
            cloudsCoordinates.x = 900;
        }
        dinoMove();
        game.init();
    }
};

function dinoMove() {
    dinoTempo.frame = dinoTempo.frame +1;
    console.log(dinoTempo.frame);
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





