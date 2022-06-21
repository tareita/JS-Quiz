const question = document.getElementById("question");
const options = document.getElementsByClassName("option");
const currentScoreCounter = document.getElementById("current-score");
const finalScoreCounter = document.getElementById("final-score");
const outcome = document.getElementById("outcome");
let score = 0;
let currentQuestionIndex = 0;

const questions = [
  {
    question: "what colour is pink?",
    answers: ["pink", "red", "orange", "rainbow"],
    correctAnswer: "A",
  },
  {
    question: "what is your name?",
    answers: ["davide", "name", "i dont know", "none of the above"],
    correctAnswer: "D",
  },
  {
    question: "what is your home address?",
    answers: ["yellow", "not telling", "black", "i dont know"],
    correctAnswer: "C",
  },
  {
    question: "what is your card number and the 3 digits at the back?",
    answers: ["12345678, 123", "why..", "lim(1+x)^(1/x) x->0", "i dont know"],
    correctAnswer: "C",
  },
  {
    question:
      "in a test a 500kg car travelling at 10 ms^-1 hits a wall. the front 0.30m of the car crumples as the car is brought to rest. what is the average force on the car during the impact?",
    answers: ["830N", "7500N", "8300N", "83000N"],
    correctAnswer: "D",
  },
];

function setView(viewId) {
  const viewContainer = document.getElementById("view-container");
  for (let i = 0; i < viewContainer.children.length; i++) {
    const view = viewContainer.children[i];
    if (view.id == viewId) {
      view.classList.remove("hidden");
    } else {
      view.classList.add("hidden");
    }
  }
}

function startQuiz() {
  setQuestions();
  setView("question-view");
}

function setQuestions() {
  question.innerHTML =
    "<h3>" + questions[currentQuestionIndex].question + "</h3>";
  answersList = questions[currentQuestionIndex].answers;
  for (i = 0; i < answersList.length; i++) {
    options[i].innerHTML =
      "<div>" + questions[currentQuestionIndex].answers[i] + "</div>";
  }
}

function outputResult(correct) {
  if (correct) {
    outcome.textContent = "Correct!";
  } else {
    outcome.textContent = "Wrong!";
  }
}

function checkAnswer(answer) {
  let currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.correctAnswer == answer) {
    score++;
    outputResult(true);
  } else {
    outputResult(false);
  }
  currentScoreCounter.textContent = score;
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    setQuestions();
  } else {
    setScoreView();
  }
}

function setScoreView() {
  setView("score-view");
  finalScoreCounter.textContent = score;
}

function setWelcomeView() {
  setView("welcome-view");
  score = 0;
  currentScoreCounter.textContent = score;
  outcome.textContent = "";
  currentQuestionIndex = 0;
}

setWelcomeView();
