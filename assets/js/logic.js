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
var timeLeft = 60;

// Function that starts the timer when user presses start button
function startQuiz() {
  timer.textContent = timeLeft;

  startBtn.addEventListener('click', function() {
    var downTimer = setInterval(function(){
      timer.textContent = timeLeft--;

      if(timeLeft <= 0) {
        clearInterval(downTimer);
        questionScreen.className = 'hide';
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
  // hide the start screen & start questions
  startScreen.className = 'hide';
  questionScreen.className = 'show';

  // show questions
  questionTitle.innerHTML = questions[0].question;

  for (var i = 0; i < questions[0].choices.length; i++) {
    questionChoices.innerHTML += `<button>${questions[0].choices[i]}</button>`;
  };
  // askQuestions();
};

// Calling functions
startQuiz()
