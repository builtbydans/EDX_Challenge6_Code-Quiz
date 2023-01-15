// All DOM elements called from index.html and stored
var startBtn = document.querySelector('#start');
var timer = document.querySelector('#time');
// Main title and start screeen
var mainTitle = document.querySelector('#main-title');
var mainText = document.querySelector('#main-text');
var startScreen = document.querySelector('#start-screen');
// Question screens
var questionScreen = document.querySelector('#questions');
var questionTitle = document.querySelector('#question-title');
var questionChoices = document.querySelector('.choices');

// Function that starts the timer when user presses start button
function startTimer() {
  startBtn.addEventListener('click', function() {
    var time = 60;
    var downTimer = setInterval(function(){
      timer.textContent = time;
      time--;

      if(time < 0) {
        clearInterval(downTimer);
        startScreen.className = 'show'
        mainTitle.textContent = 'Oops! You ran out of time!';
        mainText.textContent += ' Press Start to try again!';
      }
    },1000);
    beginQuestions()
  });
};

// Function that begins the questions rounds
function beginQuestions() {
  // hide the start screen
  startScreen.className = 'hide';
  // start questions
  questionScreen.className = 'show';
  // show questions
  questionTitle.innerHTML = questions[0].question;
  questionChoices.innerHTML = questions[0].choices;
}

// Calling functions
startTimer()
