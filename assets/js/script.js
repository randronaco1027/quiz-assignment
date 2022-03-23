
var timerEl = document.getElementById('timer');
var timeInterval;

document.getElementById("generate").addEventListener("click", countdown);
document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("answer3").style.display = "none";
document.getElementById("answer4").style.display = "none";
document.getElementById("finalScoreName").style.display = "none";
document.getElementById("submitButton").style.display = "none";

var timeLeft = 50;
function countdown() {
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = "Time's up!";
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
    displayQuestion();
}

var askQuestion = [{
    question: 'question 1',
    answer1: 'a 1 - correct',
    answer2: 'b 1',
    answer3: 'c 1',
    answer4: 'd 1',
    correctAnswer: 'a 1 - correct'
},
{
    question: "question 2",
    answer1: 'a 2',
    answer2: 'b 2 - correct',
    answer3: 'c 2',
    answer4: 'd 2',
    correctAnswer: 'b 2 - correct'
},
{
    question: "question 3",
    answer1: 'a 3',
    answer2: 'b 3',
    answer3: 'c 3',
    answer4: 'd 3 - correct',
    correctAnswer: 'd 3 - correct'
}]

var index = 0;



function displayQuestion() {
    document.getElementById("generate").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display = "block";
    document.getElementById("answer3").style.display = "block";
    document.getElementById("answer4").style.display = "block";
    document.getElementById("question").textContent = askQuestion[index].question;
    document.getElementById("answer1").textContent = askQuestion[index].answer1;
    document.getElementById("answer2").textContent = askQuestion[index].answer2;
    document.getElementById("answer3").textContent = askQuestion[index].answer3;
    document.getElementById("answer4").textContent = askQuestion[index].answer4;
    document.getElementById("answer1").addEventListener("click", checkAnswer)
    document.getElementById("answer2").addEventListener("click", checkAnswer)
    document.getElementById("answer3").addEventListener("click", checkAnswer)
    document.getElementById("answer4").addEventListener("click", checkAnswer)
}

function checkAnswer(event) {
    var element = event.target;
    if (element.textContent === askQuestion[index].correctAnswer) {
        document.getElementById("checkAnswer").textContent = "Correct!"
        var correctAnswerInterval = setInterval(function () {
            document.getElementById("checkAnswer").textContent = ""
        }, 1000)
        console.log("Correct")
    }
    else if (element.textContent !== askQuestion[index].correctAnswer) {
        timeLeft -= 10;
        document.getElementById("checkAnswer").textContent = "Wrong!"
        var wrongAnswerInterval = setInterval(function () {
            document.getElementById("checkAnswer").textContent = ""
        }, 1000)
        console.log("Wrong")
    }
    index++;
    if (index < askQuestion.length) {
        displayQuestion()
    }
    else {
        gameOver()
    }
}

function gameOver() {
    clearInterval(timeInterval);
    document.getElementById("countdown").textContent = "Game Over! Final score: " + timeLeft;
    document.getElementById("question").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    timerEl.textContent = "";
    console.log(timeLeft);
    document.getElementById("finalScoreName").style.display = "block";
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("scoreLabel").textContent = "Enter Initials: ";
    document.getElementById("finalScoreName").textContent = "Enter Initials";
    (saveScore)
}

function saveScore() {
    document.getElementById("highScore").submit();
    localStorage.setItem("timeLeft", JSON.stringify(timeLeft));
}

function loadScore () {
    var savedScores = localStorage.getItem("timeLeft");
    savedScores = JSON.parse(savedScores);
    console.log(savedScores)
    document.getElementById("displayHighScore").textContent = savedScores;
}
