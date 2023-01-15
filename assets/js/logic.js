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
function startQuiz() {
  var time = 60;
  timer.textContent = time;

  startBtn.addEventListener('click', function() {
    var downTimer = setInterval(function(){
      timer.textContent = time--;

      if(time <= 0) {
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

//Function that applies logic for questions
// function askQuestions() {
//   // logic for questions right/wrong
//   if (questionChoices === 'correct') {
//     console.log('that was right')
//   } else {
//     console.log('that was wrong')
//   }
// }


// Calling functions
startQuiz()
