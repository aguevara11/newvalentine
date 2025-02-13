/* script.js */
let currentQuestion = 0;
let lives = 3;
const questions = [
    {question: "Where did we first meet?", options: ["School", "Work", "Party", "Online"], answer: 0},
    {question: "What is my favorite color?", options: ["Blue", "Red", "Green", "Pink"], answer: 3},
    // Add remaining 8 questions here...
];
function loadQuestion() {
    if (currentQuestion >= questions.length) {
        window.location.href = 'win.html';
        return;
    }
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<button class='button' onclick='checkAnswer(${index})'>${option}</button><br>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}
function checkAnswer(choice) {
    let correct = questions[currentQuestion].answer;
    if (choice !== correct) {
        lives--;
        if (lives === 0) {
            window.location.href = 'try-again.html';
            return;
        }
    }
    currentQuestion++;
    loadQuestion();
}
