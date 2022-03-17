// var startTimer = document.querySelector(".start-button");
var timerEl = document.getElementById('timer');

document.getElementById("generate").addEventListener("click", countdown);
document.getElementById("timeless").addEventListener("click", reduceTime);

var timeLeft = 50;
function countdown() {

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 0) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = "Time's up!";
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
        }
    }, 1000);
}

function reduceTime() {
    timeLeft -= 10;
}



// document.getElementById("generate").addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }