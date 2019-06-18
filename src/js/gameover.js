export function gameOver() {
    document.getElementsByClassName('restart__menu')[0].style.visibility = "visible";
    document.getElementsByClassName('commands__div')[0].style.visibility = "hidden";
}

export function restart() {
    location.reload()
}