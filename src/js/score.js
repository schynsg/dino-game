let score = 0;

export function scoreChange() {
    score = score + 1;
    document.getElementById("score").innerHTML = "<p> Your score : " + score + "</p>";
}


