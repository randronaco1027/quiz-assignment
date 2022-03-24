//Get items from local storage
var displayInitials = JSON.parse(localStorage.getItem("newInitials")) || []
var displayScore = JSON.parse(localStorage.getItem("newScore")) || []

//Concatenate the score with appropriate initials
var initialScore = displayInitials.concat(displayScore)
initialScore.sort()

document.getElementById("displayHighScore").textContent = initialScore;

//Display the highest score
for (var i = 0; i < (initialScore.length / 2); i++) {
    var index = (initialScore.length / 2)
    document.getElementById("displayHighScore").textContent = initialScore[i] + " - " + initialScore[i + index];
}

//Clear local storage 
document.getElementById("clearScores").addEventListener("click", function () {
    localStorage.clear()
})