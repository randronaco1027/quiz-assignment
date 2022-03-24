// document.getElementById("displayHighScore").textContent = JSON.parse(localStorage.getItem("newScore"));

var displayInitials = JSON.parse(localStorage.getItem("newInitials")) ||[]
var displayScore = JSON.parse(localStorage.getItem("newScore")) ||[]

var initialScore = displayInitials.concat(displayScore)

console.log(displayInitials)
console.log(displayScore)
console.log(initialScore)

document.getElementById("displayHighScore").textContent = initialScore;


// document.getElementById("displayHighScore").textContent = JSON.parse(localStorage.getItem("newInitials"));
document.getElementById("clearScores").addEventListener("click", function () {
    localStorage.clear()
})