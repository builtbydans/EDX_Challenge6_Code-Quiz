// All DOM elements called from index.html and stored
var startBtn = document.querySelector('#start');
var restartBtn = document.querySelector('#restart');
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
// Misc variables
var index = 0;

// Function that starts the timer when user presses start button
function startQuiz() {
  timer.textContent = timeLeft;

  startBtn.addEventListener('click', function() {
    var downTimer = setInterval(function(){
      timer.textContent = timeLeft--;

      if(timeLeft <= -1) {
        clearInterval(downTimer);
        questionScreen.className = 'hide';
        startScreen.className = 'show'
        mainTitle.textContent = 'Oops! You ran out of time!';
        mainText.textContent += ' Press Restart to try again!';
        startBtn.className = 'hide';
        reloadQuiz();
      }
    },1000);
    // hide the start screen & start questions
    startScreen.className = 'hide';
    questionScreen.className = 'show';

    showQuestions();
  });
};

// Function to reload the window so user can play again
function reloadQuiz() {
  restartBtn.classList.remove('hide');

  restartBtn.addEventListener('click', function() {
    location.reload()
  });
};

// Function that begins the questions rounds
function showQuestions() {
  // show first question
  questionTitle.innerHTML = questions[0].title;
  for (var i = 0; i < questions.length; i++) {
    questionChoices.innerHTML += `<button class="question">${questions[index].choices[i]}</button>`;
  };

  questionChoices.addEventListener('click', function(event) {
    if (event.target.textContent === questions[index].answer) {
      console.log('right answer')
    } else {
      console.log('wrong')
      timeLeft -= 10;
    }

    questionTitle.innerHTML = questions[1].title;
    for (var i = 0; i < questions.length; i++) {
      questionChoices.innerHTML = `<button class="question">${questions[1].choices[i]}</button>`;
    };
  })
};

// Calling functions
startQuiz()
