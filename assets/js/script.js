
var timerEl = document.getElementById('timer');

document.getElementById("generate").addEventListener("click", countdown);
document.getElementById("q1").style.display = "none";
document.getElementById("q2").style.display = "none";
document.getElementById("q3").style.display = "none";
document.getElementById("q4").style.display = "none";
document.getElementById("finalScoreName").style.display = "none";

var timeLeft = 50;
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
        }
    }, 1000);
    question1();
}

function question1() {
    document.getElementById("generate").style.display = "none";
    document.getElementById("countdown").textContent = "Question 1";
    document.getElementById("q1").style.display = "block";
    document.getElementById("q1").textContent = "Correct Answer";
    document.getElementById("q1").addEventListener("click", question2);
    // document.getElementById("generate").addEventListener("click", countdown);
    document.getElementById("q2").style.display = "block";
    document.getElementById("q2").textContent = "Wrong Answer";
    document.getElementById("q2").addEventListener("click", reduceTime);
    document.getElementById("q2").addEventListener("click", question2);
    document.getElementById("q3").style.display = "block";
    document.getElementById("q3").textContent = "Wrong Answer";
    document.getElementById("q3").addEventListener("click", reduceTime);
    document.getElementById("q3").addEventListener("click", question2);
    document.getElementById("q4").style.display = "block";
    document.getElementById("q4").textContent = "Wrong Answer";
    document.getElementById("q4").addEventListener("click", reduceTime);
    document.getElementById("q4").addEventListener("click", question2);
}
function reduceTime() {
    timeLeft -= 10;
}

function question2 () {
    document.getElementById("countdown").textContent = "Question 2";
    document.getElementById("q1").textContent = "Wrong Answer";
    document.getElementById("q1").addEventListener("click", reduceTime);
    document.getElementById("q1").addEventListener("click", question3);
    document.getElementById("q2").textContent = "Wrong Answer";
    document.getElementById("q2").addEventListener("click", reduceTime);
    document.getElementById("q2").addEventListener("click", question3);
    //This still reduces time, need to fix
    document.getElementById("q3").textContent = "Correct Answer";
    document.getElementById("q3").addEventListener("click", question3);
    document.getElementById("q4").textContent = "Wrong Answer";
    document.getElementById("q4").addEventListener("click", reduceTime);
    document.getElementById("q4").addEventListener("click", question3);
}

function question3() {
    document.getElementById("countdown").textContent = "Question 3";
    document.getElementById("q1").textContent = "Wrong Answer";
    document.getElementById("q1").addEventListener("click", reduceTime);
    document.getElementById("q1").addEventListener("click", gameOver);
    //This still reduces time, need to fix
    document.getElementById("q2").textContent = "Correct Answer";
    document.getElementById("q2").addEventListener("click", gameOver);
    document.getElementById("q3").textContent = "Wrong Answer";
    document.getElementById("q3").addEventListener("click", reduceTime);
    document.getElementById("q3").addEventListener("click", gameOver);
    document.getElementById("q4").textContent = "Wrong Answer";
    document.getElementById("q4").addEventListener("click", reduceTime);
    document.getElementById("q4").addEventListener("click", gameOver);
}

function addPoints() {
    points =+ 10;
}
function gameOver() {
    //Needs to be defined
    // clearInterval(timeInterval);
    document.getElementById("countdown").textContent = "Game Over! Final score: " + timeLeft;
    document.getElementById("q1").style.display = "none";
    document.getElementById("q2").style.display = "none";
    document.getElementById("q3").style.display = "none";
    document.getElementById("q4").style.display = "none";
    timerEl.textContent = "";
    console.log(timeLeft);
    document.getElementById("scoreLabel").textContent = "Enter Initials: ";
    document.getElementById("finalScoreName").textContent = "Enter Initials";
    document.getElementById("finalScoreName").style.display = "visible";
}