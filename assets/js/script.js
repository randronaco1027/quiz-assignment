var timerEl = document.getElementById('timer');
var timeInterval;

//Initial properties to hide content
document.getElementById("generate").addEventListener("click", countdown);
document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("answer3").style.display = "none";
document.getElementById("answer4").style.display = "none";
document.getElementById("finalScoreName").style.display = "none";
document.getElementById("submitButton").style.display = "none";

//Start timer
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

//Array of all the questions and answers
var askQuestion = [{
    question: 'String values must be enclosed within _______ when being assigned to variables.',
    answer1: 'Commas',
    answer2: 'Curly Brackets',
    answer3: 'Quotes',
    answer4: 'Parenthesis',
    correctAnswer: 'Quotes'
},
{
    question: "Arrays in JavaScript can be used to store _______.",
    answer1: 'Numbers and Strings',
    answer2: 'Other Arrays',
    answer3: 'Booleans',
    answer4: 'All of the Above',
    correctAnswer: 'All of the Above'
},
{
    question: "The condition in an if/else statement is enclosed with ______.",
    answer1: 'Quotes',
    answer2: 'Curly Brackets',
    answer3: 'Parenthesis',
    answer4: 'Square Brackets',
    correctAnswer: 'Parenthesis'
}]

//Function to display make Question contents visible
function displayQuestion() {
    document.getElementById("codeQuiz").style.display = "none";
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

// Check if the answer is correct, subtract 10 seconds if wrong
var index = 0;
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

//Display final score and form to submit final score
function gameOver() {
    clearInterval(timeInterval);
    document.getElementById("countdown").textContent = "Game Over! Final score: " + timeLeft;
    document.getElementById("question").style.display = "none";
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    timerEl.textContent = "";
    document.getElementById("finalScoreName").style.display = "block";
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("scoreLabel").textContent = "Enter Initials: ";
    document.getElementById("finalScoreName").textContent = "Enter Initials";

}

//Store scores and initials to local storage
document.getElementById("submitButton").addEventListener("click", function () {

    var storedScores = JSON.parse(localStorage.getItem("newScore")) || []
    storedScores.push(timeLeft); //timeLeft is the final score
    localStorage.setItem("newScore", JSON.stringify(storedScores));

    var initials = document.getElementById("finalScoreName").value;

    var storedInitials = JSON.parse(localStorage.getItem("newInitials")) || []
    storedInitials.push(initials);
    localStorage.setItem("newInitials", JSON.stringify(storedInitials))
})






