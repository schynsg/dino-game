import {game} from "./main";

export const groundCoordinates = {
    'x' : 0,
    'y' : 678,
};

export const cloudsCoordinates = {
    'x' : 0,
    'y' : 100,
};

export let groundSpeed = 0; //higher the speed is, speeder the ground goes

export function start(){
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