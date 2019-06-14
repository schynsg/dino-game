const groundCoordinates = {
    'x' : 0,
    'y' : 678,
};

const cloudsCoordinates = {
    'x' : 0,
    'y' : 100,
};


const game = {
    'canvas' : document.getElementById('game'),
    'ctx' : null,
    'spriteSrc' : "./resources/sprite.png",
    'sprite' : new Image(),
    init () {
        this.ctx = this.canvas.getContext('2d'),
        this.sprite.src = this.spriteSrc,
        this.draw()
    },
    draw() {
        this.sprite.addEventListener('load', ()=>(
            this.ctx.drawImage(this.sprite, 0,361, 1000, 680, 0, 0, 1000, 680),
            this.ctx.drawImage(this.sprite, 0, 0, 1348, 173, groundCoordinates.x, groundCoordinates.y, 1348, 173),
            this.ctx.drawImage(this.sprite, 0, 1041, 1000, 162, cloudsCoordinates.x, cloudsCoordinates.y, 1041, 162),
            this.ctx.drawImage(this.sprite, 280, 185, 120, 139, 25, 678-139, 120, 139)
        ))
    },
};




game.init()

