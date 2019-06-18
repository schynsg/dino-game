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
    'jumpheight' : 200,
};

const dinoSpriteCoordinates = {
    'x' : 280,
    'y' : 185,
};

const firstcactusCoordinates  = {
    'x' : 1000,
    'y' : groundCoordinates.y - 85,
    'initialX' : 1000, //Need to be equal to the x value
};

const secondcactusCoordinates = {
    'x' : 1000,
    'y' : groundCoordinates.y - 85,
    'initialX' : 1000, //Need to be equal to the x value
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
            this.ctx.drawImage(this.sprite, 0, 361, 1000, 680, 0, 0, 1000, 680); //Background
            this.ctx.drawImage(this.sprite, 0, 0, 1348, 173, groundCoordinates.x, groundCoordinates.y, 1348, 173); //Ground
            this.ctx.drawImage(this.sprite, 0, 1041, 1000, 162, cloudsCoordinates.x, cloudsCoordinates.y, 1041, 162); //Cloud
            this.ctx.drawImage(this.sprite, dinoSpriteCoordinates.x, dinoSpriteCoordinates.y, 120, 139, dinoCoordinates.x, dinoCoordinates.y, 120, 139); //Dino
            this.ctx.drawImage(this.sprite, 9, 238, 66, 85, firstcactusCoordinates.x, firstcactusCoordinates.y, 66, 85); // Cactus 1
            this.ctx.drawImage(this.sprite, 9, 238, 66, 85, secondcactusCoordinates.x, secondcactusCoordinates.y, 66, 85); // Cactus 2
        })
        if (firstcactusCoordinates.x > dinoCoordinates.x && firstcactusCoordinates.x < dinoCoordinates.x + 70 && dinoCoordinates.y + 139 > firstcactusCoordinates.y || secondcactusCoordinates.x - 25 > dinoCoordinates.x && secondcactusCoordinates.x + 25 < dinoCoordinates.x + 70 && dinoCoordinates.y + 139 > secondcactusCoordinates.y) {
            gameOver();
            return false;
        } else {
            window.requestAnimationFrame(()=> {animation.move()});
        }

    },
};

onkeypress = function(e){
    if(e.charCode == 32){
        dinoJump();
    }
}




function dinoJump() {
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

let groundSpeed = 0; //higher the speed is, speeder the ground goes



const animation = {
    move(){
        groundCoordinates.x = groundCoordinates.x - groundSpeed;
        if (groundCoordinates.x <= -300){
            groundCoordinates.x = 0;
        }
        cloudsCoordinates.x = cloudsCoordinates.x - 0.2;
        if (cloudsCoordinates.x <= -900){
            cloudsCoordinates.x = 900;
        }
        cactusMove();
        dinoMove();
        scoreChange();
        game.init();
    }
};


function scoreChange() {
    score = score + 1;
    document.getElementById("score").innerHTML = "<p> Your score : " + score + "</p>";
}


let score = 0;

function dinoMove() {
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

function cactusMove() {
    firstcactusCoordinates.x = firstcactusCoordinates.x - groundSpeed;
    if (firstcactusCoordinates.x < -85) {
        firstcactusCoordinates.x = firstcactusCoordinates.initialX;
    }
    if (secondcactusCoordinates.x < 1000 || firstcactusCoordinates.x < 700 - Math.floor(Math.random()*700)){
        secondcactusCoordinates.x = secondcactusCoordinates.x - groundSpeed;
    }
    if (secondcactusCoordinates.x < -85) {
        secondcactusCoordinates.x = secondcactusCoordinates.initialX;
    }
}

document.body.style.overflow = 'hidden';


document.getElementById('start__btn').addEventListener('click', start);

function start(){
    document.getElementsByClassName('start__menu')[0].style.visibility = "hidden";
    document.getElementById('score').style.visibility = "visible";
    document.getElementsByClassName('commands__div')[0].style.visibility = "visible";
    const difficultySelct = document.getElementById("diff");
    const difficultyValue = difficultySelct.options[difficultySelct.selectedIndex].value;
    if (difficultyValue == "easy") {
        groundSpeed = 4.5;
        game.init();
    } else if (difficultyValue == "hard") {
        groundSpeed = 9;
        game.init();
    } else if (difficultyValue == "impossible") {
        groundSpeed = 20;
        game.init();
    } else {
        alert('this difficulty is not authorized')
    }
}


function gameOver() {
    document.getElementsByClassName('restart__menu')[0].style.visibility = "visible";
    document.getElementsByClassName('commands__div')[0].style.visibility = "hidden";
}

document.getElementById('restart__btn').addEventListener('click', restart);

function restart() {
    location.reload()
}


