const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Leo Tolstoy"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        correctAnswer: "Tokyo"
    }
];

let currentQuestion = 0;
let score = 0;

const quizElement = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultElement = document.getElementById('result');
const reloadButton = document.getElementById('reload');

function loadQuestion() {
    const questionData = quizData[currentQuestion];

    if (questionData) {
        let optionsHTML = '';
        for (const option of questionData.options) {
            optionsHTML += `<label><input type="radio" name="option" value="${option}">${option}</label><br>`;
        }

        quizElement.innerHTML = `<h2>${questionData.question}</h2>${optionsHTML}`;
    } else {
        showResult();
    }
}

function showResult() {
    quizElement.style.display = 'none';
    submitButton.style.display = 'none';
    resultElement.innerHTML = `Your Score: ${score} out of ${quizData.length}`;
    reloadButton.style.display = 'block';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.value;
        const correctAnswer = quizData[currentQuestion].correctAnswer;
        if (userAnswer === correctAnswer) {
            score++;
        }
        currentQuestion++;
        loadQuestion();
    } else {
        alert("Please select an option!");
    }
}

function reloadQuiz() {
    currentQuestion = 0;
    score = 0;
    quizElement.style.display = 'block';
    submitButton.style.display = 'block';
    resultElement.innerHTML = '';
    reloadButton.style.display = 'none';
    loadQuestion();
}

submitButton.addEventListener('click', checkAnswer);
reloadButton.addEventListener('click', reloadQuiz);

// Initial load
loadQuestion();
