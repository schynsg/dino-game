import {cloudsCoordinates, groundCoordinates, groundSpeed} from "./background";
import {cactusMove} from "./cactus";
import {dinoMove} from "./dino";
import {scoreChange} from "./score";
import {game} from "./main";

export const animation = {
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




