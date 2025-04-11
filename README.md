# Quiz Application

This is a simple web-based Quiz Application built using HTML, CSS, and JavaScript. The quiz features a few multiple-choice questions related to cricket, allows users to select answers, and displays their final score.

## Features

- Start quiz with a button
- View one question at a time
- Select one answer per question
- Next button to move through questions
- Highlight correct/incorrect answers
- Final score display
- Option to restart the quiz

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## File Structure


├── index.html        # Main HTML file
├── style.css         # Styling for the quiz UI
└── script.js         # Logic to control quiz behavior


## How to Use

1. Clone or download this repository.
2. Open index.html in your web browser.
3. Click "Start Quiz" to begin.
4. Select an answer and click "Next Question".
5. After the last question, view your score and optionally restart the quiz.

## Questions Included

- Who is the most successful Cricket Franchise?
- Who is considered as Modern day GOAT of bowling?
- Which team has won the most T20 World Cups?

## Customization

You can easily modify or extend the questions by editing the questions array in script.js.

javascript
const questions = [
  {
    question: "Your question here",
    choices: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Correct Option"
  },
  // Add more questions
];


##
