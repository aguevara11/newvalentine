let currentQuestion = 0;
let lives = 3;
const questions = [
    {question: "Where did we first meet?", options: ["A park", "At Work", "At a Party", "Bar"], answer: 0},
    {question: "What is my one favorite color?", options: ["Blue", "Red", "Green", "Pink"], answer: 3},
    {question: "Where did we find the moose stickers?", options: ["Thrift Store", "Taco Bell", "Sonic", "Walmart"], answer: 2},
    {question: "Which movie have we seen together?", options: ["Moana", "Toy Story", "Creed 3", "Ghostbusters II"], answer: 2},
    {question: "What’s one thing about you that makes me smile no matter what?", options: ["Eyes", "Smile", "Your hugs", "hehe all of them!"], answer: 3},
    {question: "What is my favorite coding language?", options: ["Javascript", "HTML", "C++", "Java"], answer: 0},
    {question: "What’s the nickname I call you the most? ( I fact-checked this)", options: ["Evita", "Amor", "Poo", "Eva"], answer: 1},
    {question: "What’s one adorable habit you have that I love?", options: ["Frolicking", "Eating my food!", "Farting", "Pooping"], answer: 0},
    {question: "What has been one of my favorite moments with you lately?", options: ["The redbull test", "Taking you out to dinner when you visited me", "Going to see bad movies", "Golfing!"], answer: 1},
    {question: "If you win this quiz, what do you think the surprise is?", options: ["A heartfelt letter", "A cute gift", "A special date night", "Me asking you to be my Valentine"], answer: 3},
];

function updateLivesDisplay() {
    let livesDisplay = "❤️".repeat(lives);
    document.getElementById("lives").innerHTML = livesDisplay;
}

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
        updateLivesDisplay(); // Update hearts display when losing a life
        if (lives === 0) {
            window.location.href = 'try-again.html';
            return;
        }
    }
    currentQuestion++;
    loadQuestion();
}
