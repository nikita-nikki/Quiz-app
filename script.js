document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById(quiz-container);
  const questionConatiner = document.getElementById(question-container);
  const questionDisplay = document.getElementById(question-text);
  const choicesDisplay = document.getElementById(choices-list);
  const nextBtn = document.getElementById(next-btn);
  const resultConatiner = document.getElementById(result-container);
  const scoreDisplay = document.getElementById(score);
  const restartBtn = document.getElementById(restart-btn);
  const startBtn = document.getElementById(start-btn);

  const questions = [
    {
      question: "Who is the most successful Cricket Franchise ?",
      choices: [
        "Mumbai Indians",
        "Chennai Super Kings",
        "Royal Challengers Bangalore",
        "Kolkata Knight Riders",
      ],
      answer: "Mumbai Indians",
    },
    {
      question: "Who is considered as Modern day GOAT of bowling ?",
      choices: [
        "Pat Cummins",
        "Trent Boult",
        "Jasprit Bumrah",
        "Kagiso Rabada",
      ],
      answer: "Jasprit Bumrah",
    },
    {
      question: "Which team has won the most T20 World Cups ?",
      choices: ["Australia", "Pakistan", "Srilanka", "India"],
      answer: "India",
    },
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  let selectedChoice;

  startBtn.addEventListener("click", function () {
    startBtn.classList.add(hidden);
    startQuiz();
  });

  nextBtn.addEventListener(click, () => {
    checkAnswer(selectedChoice);
    setTimeout(() => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        questionConatiner.classList.add(hidden);
        resultConatiner.classList.remove(hidden);
        scoreDisplay.textContent = ` ${score} out of ${questions.length}`;
      }
    }, 500);
  });

  restartBtn.addEventListener(click, function () {
    currentQuestionIndex = 0;
    score = 0;
    resultConatiner.classList.add(hidden);
    startQuiz();
  });
  function startQuiz() {
    questionConatiner.classList.remove(hidden);
    resultConatiner.classList.add(hidden);
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add(hidden);
    questionDisplay.textContent = questions[currentQuestionIndex].question;
    choicesDisplay.innerHTML = ``;
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement(li);
      li.textContent = choice;
      li.classList.add(choice);
      choicesDisplay.appendChild(li);

      li.addEventListener(click, function () {
        selectedChoice = li;
        li.classList.add(selected);
        const choices = choicesDisplay.querySelectorAll(li);
        choices.forEach((item) => {
          if (item !== li) {
            item.classList.remove(selected);
          }
        });
        nextBtn.classList.remove(hidden);
      });
    });
  }
  function checkAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice.textContent === correctAnswer) {
      choice.classList.add(correct);
      score++;
    } else {
      choice.classList.add(incorrect);
    }
    nextBtn.classList.remove(hidden);
  }
});
