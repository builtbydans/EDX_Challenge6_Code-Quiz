// DOM query selectors
var highScores = document.querySelector("#highscores");
var clearBtn = document.querySelector("#clear");
var users = JSON.parse(localStorage.getItem("user")) || [];
var userScore = JSON.parse(localStorage.getItem("score")) || [];

// Clears localStorage and highscores
clearBtn.addEventListener('click', function() {
  localStorage.clear();
  highScores.innerHTML = '';
});

// Loops through array of stored items and displays them in table
function displayScores() {
  for (var i = 0; i < userScore.length; i++) {
    var li = document.createElement("li");
    li.textContent = `${users[i]} - ${userScore[i]} Points`;
    highScores.appendChild(li);
  };
};

// Executing function
displayScores();
