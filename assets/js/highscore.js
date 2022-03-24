// document.getElementById("displayHighScore").textContent = JSON.parse(localStorage.getItem("newScore"));

var displayInitials = JSON.parse(localStorage.getItem("newInitials")) ||[]
var displayScore = JSON.parse(localStorage.getItem("newScore")) ||[]

var initialScore = displayInitials.concat(displayScore)

console.log(displayInitials)
console.log(displayScore)
console.log(initialScore)
console.log(initialScore[0])

document.getElementById("displayHighScore").textContent = initialScore;

for (var i = 0; i < (initialScore.length / 2); i++) {
    var index = (initialScore.length / 2)
    console.log(initialScore[i], initialScore[i + index])
    document.getElementById("displayHighScore").textContent = initialScore[i] + initialScore[i + index];
}


// document.getElementById("displayHighScore").textContent = JSON.parse(localStorage.getItem("newInitials"));
document.getElementById("clearScores").addEventListener("click", function () {
    localStorage.clear()
})