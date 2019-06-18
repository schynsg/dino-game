import {dinoCoordinates, dinoSpriteCoordinates, dinoJump} from "./dino";
import {firstcactusCoordinates, secondcactusCoordinates} from "./cactus";
import {groundCoordinates, cloudsCoordinates, start} from "./background";
import {animation} from "./animation";
import {gameOver, restart} from "./gameover";

export const game = {
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
};

document.getElementById('start__btn').addEventListener('click', start);

document.getElementById('restart__btn').addEventListener('click', restart);

document.body.style.overflow = 'hidden';
