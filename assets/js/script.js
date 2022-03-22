
var timerEl = document.getElementById('timer');
var timeInterval;

document.getElementById("generate").addEventListener("click", countdown);
document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("answer3").style.display = "none";
document.getElementById("answer4").style.display = "none";
document.getElementById("finalScoreName").style.display = "none";


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
        console.log("correct");
    }
    else if (element.textContent !== askQuestion[index].correctAnswer) {
        console.log("wrong")
        timeLeft -= 10;
    }
    index++;
    displayQuestion();
}


function gameOver() {
    //Needs to be defined
    clearInterval(timeInterval);
    document.getElementById("countdown").textContent = "Game Over! Final score: " + timeLeft;
    document.getElementById("answer1").style.display = "none";
    document.getElementById("answer2").style.display = "none";
    document.getElementById("answer3").style.display = "none";
    document.getElementById("answer4").style.display = "none";
    timerEl.textContent = "";
    console.log(timeLeft);
    document.getElementById("scoreLabel").textContent = "Enter Initials: ";
    document.getElementById("finalScoreName").style.display = "visible";
    document.getElementById("finalScoreName").textContent = "Enter Initials";

}
// function question1() {
//     document.getElementById("generate").style.display = "none";
//     document.getElementById("countdown").textContent = "Question 1";
//     document.getElementById("answer1").style.display = "block";
//     document.getElementById("q1").textContent = "Correct Answer";
//     document.getElementById("q1").addEventListener("click", question2);
//     document.getElementById("q1").addEventListener("click", correctAnswer);
//     document.getElementById("q2").style.display = "block";
//     document.getElementById("q2").textContent = "Wrong Answer";
//     document.getElementById("q2").addEventListener("click", wrongAnswer);
//     document.getElementById("q2").addEventListener("click", question2);
//     document.getElementById("q3").style.display = "block";
//     document.getElementById("q3").textContent = "Wrong Answer";
//     document.getElementById("q3").addEventListener("click", wrongAnswer);
//     document.getElementById("q3").addEventListener("click", question2);
//     document.getElementById("q4").style.display = "block";
//     document.getElementById("q4").textContent = "Wrong Answer";
//     document.getElementById("q4").addEventListener("click", wrongAnswer);
//     document.getElementById("q4").addEventListener("click", question2);
// }

// function question2() {
//     document.getElementById("countdown").textContent = "Question 2";
//     document.getElementById("q1").textContent = "Wrong Answer";
//     document.getElementById("q1").addEventListener("click", wrongAnswer);
//     document.getElementById("q1").addEventListener("click", question3);
//     document.getElementById("q2").textContent = "Wrong Answer";
//     document.getElementById("q2").addEventListener("click", wrongAnswer);
//     document.getElementById("q2").addEventListener("click", question3);
//     //This still reduces time, need to fix
//     document.getElementById("q3").textContent = "Correct Answer";
//     document.getElementById("q3").addEventListener("click", correctAnswer);
//     document.getElementById("q3").addEventListener("click", question3);
//     document.getElementById("q4").textContent = "Wrong Answer";
//     document.getElementById("q4").addEventListener("click", wrongAnswer);
//     document.getElementById("q4").addEventListener("click", question3);
// }

// function question3() {
//     document.getElementById("countdown").textContent = "Question 3";
//     document.getElementById("q1").textContent = "Wrong Answer";
//     document.getElementById("q1").addEventListener("click", wrongAnswer);
//     document.getElementById("q1").addEventListener("click", gameOver);
//     //This still reduces time, need to fix
//     document.getElementById("q2").textContent = "Correct Answer";
//     document.getElementById("q2").addEventListener("click", gameOver);
//     document.getElementById("q2").addEventListener("click", correctAnswer);
//     document.getElementById("q3").textContent = "Wrong Answer";
//     document.getElementById("q3").addEventListener("click", wrongAnswer);
//     document.getElementById("q3").addEventListener("click", gameOver);
//     document.getElementById("q4").textContent = "Wrong Answer";
//     document.getElementById("q4").addEventListener("click", wrongAnswer);
//     document.getElementById("q4").addEventListener("click", gameOver);
// }



// function wrongAnswer() {
//     timeLeft -= 10;
//     document.getElementById("answer").textContent = "Wrong!"
//     var wrongAnswerInterval = setInterval(function () {
//         document.getElementById("answer").textContent = ""
//     }, 1000)
//     console.log("Wrong")
// }

// function correctAnswer() {
//     document.getElementById("answer").textContent = "Correct!"
//     var correctAnswerInterval = setInterval(function () {
//         document.getElementById("answer").textContent = ""
//     }, 1000)
//     console.log("Correct")
// }