// All DOM elements called from index.html and stored
var startBtn = document.querySelector('#start');
var mainTitle = document.querySelector('#main-title');
var mainText = document.querySelector('#main-text');
var timer = document.querySelector('#time');

// Function that starts the timer when user presses start button
function startTimer() {
  startBtn.addEventListener('click', function() {
    var time = 60;
    var downTimer = setInterval(function(){
      timer.textContent = time;
      time--;

      if(time < 0) {
        clearInterval(downTimer);
        mainTitle.textContent = 'Oops! You ran out of time!'
        mainText.textContent += ' Press Start to try again!'
      }
    },1000);
  });
}

// Calling functions
startTimer();
