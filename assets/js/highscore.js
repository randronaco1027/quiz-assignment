var displayInitials = JSON.parse(localStorage.getItem("newInitials")) ||[]
var displayScore = JSON.parse(localStorage.getItem("newScore")) ||[]

var initialScore = displayInitials.concat(displayScore)
initialScore.sort()

document.getElementById("displayHighScore").textContent = initialScore;

for (var i = 0; i < (initialScore.length / 2); i++) {
    var index = (initialScore.length / 2)
    document.getElementById("displayHighScore").textContent = initialScore[i] + " - " + initialScore[i + index];
}

document.getElementById("clearScores").addEventListener("click", function () {
    localStorage.clear()
})