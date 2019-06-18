import {groundCoordinates,groundSpeed} from "./background";

export const firstcactusCoordinates  = {
    'x' : 1000,
    'y' : groundCoordinates.y - 85,
    'initialX' : 1000, //Need to be equal to the x value
};

export const secondcactusCoordinates = {
    'x' : 1000,
    'y' : groundCoordinates.y - 85,
    'initialX' : 1000, //Need to be equal to the x value
};

export function cactusMove() {
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
};