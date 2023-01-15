// All DOM elements called from index.html and stored
var startBtn = document.querySelector('#start');
var mainTitle = document.querySelector('#main-title');
var mainText = document.querySelector('#main-text');
var startScreen = document.querySelector('#start-screen');
var timer = document.querySelector('#time');
var questionScreen = document.querySelector('#questions');

// Function that starts the timer when user presses start button
function startTimer() {
  startBtn.addEventListener('click', function() {
    var time = 60;
    var downTimer = setInterval(function(){
      timer.textContent = time;
      time--;
      startScreen.className = 'hide';

      if(time < 0) {
        clearInterval(downTimer);
        startScreen.className = 'show'
        mainTitle.textContent = 'Oops! You ran out of time!';
        mainText.textContent += ' Press Start to try again!';
      }
    },1000);
  });
};

// Function that begins the questions rounds
function beginQuestions() {
  startTimer();
}

// Calling functions
beginQuestions()
