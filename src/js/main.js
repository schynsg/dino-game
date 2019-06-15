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


game.init()


const animation = {
    move(){
        groundCoordinates.x = groundCoordinates.x - 4;
        if (groundCoordinates.x <= -350){
            groundCoordinates.x = 0;
        }
        cloudsCoordinates.x = cloudsCoordinates.x - 0.1;
        if (cloudsCoordinates.x <= -900){
            cloudsCoordinates.x = 900;
        }
        dinoSpriteCoordinates.x = dinoSpriteCoordinates.x + 120;
        if (dinoSpriteCoordinates.x > 520) {
            dinoSpriteCoordinates.x = 280;
        }
        game.init();
    }
};







