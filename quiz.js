let firstCorrect = document.getElementById("1a");
let secondCorrect = document.getElementById("2a");
let thirdCorrect = document.getElementById("3a");
let fourthCorrect = document.getElementById("4a");
let fifthCorrect = document.getElementById("5a");
let score = 0;

function quizCheck() {
  if (firstCorrect.checked) {
    score = score + 1;
  }

  if (secondCorrect.checked) {
    score = score + 1;
  }

  if (thirdCorrect.checked) {
    score = score + 1;
  }

  if (fourthCorrect.checked) {
    score = score + 1;
  }

  if (fifthCorrect.checked) {
    score = score + 1;
  }

  document.getElementById("result").innerHTML =
    "Your score is " + score + " out of 5";
  document.getElementById("correctAnswers").style.display = "block";
  document.getElementById("quizForm").reset();
  score = 0;
}
