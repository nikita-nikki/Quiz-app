# 🧠 Quiz Application

A simple, responsive web-based Quiz Application built using **HTML**, **CSS**, and **JavaScript**. This quiz features multiple-choice questions related to **cricket**, allows users to select answers, and displays the final score with instant feedback.

## 🚀 Features

- 🎯 Start the quiz with a click
- 🢾 One question displayed at a time
- ✅ Select one answer per question
- ⏭️ "Next" button to move forward
- 🔍 Highlights correct and incorrect answers
- 📊 Final score display
- 🔁 Option to restart the quiz

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla)

## 📁 File Structure

```
├── index.html        # Main HTML file  
├── style.css         # Styling for the quiz UI  
└── script.js         # Logic to control quiz behavior  
```

## 📌 How to Use

1. Clone or download this repository.  
2. Open `index.html` in your web browser.  
3. Click **"Start Quiz"** to begin.  
4. Choose an answer and click **"Next Question"**.  
5. After the final question, view your score and restart if desired.

## 📝 Questions Included

- Who is the most successful cricket franchise?  
- Who is considered the modern-day GOAT of bowling?  
- Which team has won the most T20 World Cups?

## 🔧 Customization

To add or edit quiz questions, modify the `questions` array in `script.js`:

```javascript
const questions = [
  {
    question: "Your question here",
    choices: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Correct Option"
  },
  // Add more questions here
];
```

---

Feel free to fork, modify, and enhance the quiz to suit your needs. Contributions are welcome!


