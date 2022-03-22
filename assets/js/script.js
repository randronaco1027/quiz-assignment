
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
}

var askQuestion = [{
    question: 'question 1',
    answer1: 'a',
    answer2: 'b',
    answer3: 'c',
    answer4: 'd',
    correctAnswer: 'a'
},
{
    question: "question 2",
    answer1: 'a',
    answer2: 'b',
    answer3: 'c',
    answer4: 'd',
    correctAnswer: 'b'
},
{
    question: "question 3",
    answer1: 'a',
    answer2: 'b',
    answer3: 'c',
    answer4: 'd',
    correctAnswer: 'd'
}]

for (var i = 0; i < askQuestion.length; i++) {
    //Load in questions using the questions[i] array

    var container = document.querySelector(".container");

    container.addEventListener("click", function (event) {
        var element = event.target;
        document.getElementById("answer1").style.display = "visible";
        document.getElementById("answer2").style.display = "visible";
        document.getElementById("answer3").style.display = "visible";
        document.getElementById("answer4").style.display = "visible";
        document.getElementById("answer1").textContent = askQuestion[i].answer1;
        document.getElementById("answer2").textContent = askQuestion[i].answer2;
        document.getElementById("answer3").textContent = askQuestion[i].answer3;
        document.getElementById("answer4").textContent = askQuestion[i].answer4;
        //Set datatype of currect answer to correct

        if (element.matches(question[i].correctAnswer)) {
            document.getElementById("checkAnswer").textContent = "Correct!"
            var correctAnswerInterval = setInterval(function () {
                document.getElementById("answer").textContent = ""
            }, 1000)
            console.log("Correct")
        }
        //show correct answer string and continue loop,
        else {
            timeLeft -= 10;
            document.getElementById("checkAnswer").textContent = "Wrong!"
            var wrongAnswerInterval = setInterval(function () {
                document.getElementById("answer").textContent = ""
            }, 1000)
            console.log("Wrong")
        }
        //Else wrong answer and - 10 seconds
    })
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
//     document.getElementById("q1").style.display = "block";
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