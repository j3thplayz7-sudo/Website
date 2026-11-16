function flipCard(card) {
    card.classList.toggle("flipped");
}
/* ============================= */
/* INNOVATION QUIZ */
/* ============================= */

const questions = [

    {
        question: "1. How does the internet travel across oceans?",
        answers: [
            "Through underwater fibre-optic cables",
            "Through underwater tunnels",
            "Through satellites only",
            "Through radio towers"
        ],
        correct: 0
    },

    {
        question: "2. What do solar panels use to generate electricity?",
        answers: [
            "Wind",
            "Sunlight",
            "Petrol",
            "Coal"
        ],
        correct: 1
    },

    {
        question: "3. What is artificial intelligence?",
        answers: [
            "A type of battery",
            "A computer screen",
            "Technology that can perform tasks requiring human-like intelligence",
            "A type of engine"
        ],
        correct: 2
    },

    {
        question: "4. What is the main purpose of recycling?",
        answers: [
            "To create more rubbish",
            "To waste resources",
            "To increase pollution",
            "To reuse materials and reduce waste"
        ],
        correct: 3
    },

    {
        question: "5. Which technology uses wind to generate electricity?",
        answers: [
            "Wind turbines",
            "Solar panels",
            "Electric cars",
            "Water filters"
        ],
        correct: 0
    },

    {
        question: "6. What does a robot help factories do?",
        answers: [
            "Create more pollution",
            "Perform tasks with speed and precision",
            "Use more raw materials",
            "Stop all production"
        ],
        correct: 1
    },

    {
        question: "7. What is a smart home?",
        answers: [
            "A house made entirely of glass",
            "A house without electricity",
            "A home that uses connected technology to automate tasks",
            "A house built underground"
        ],
        correct: 2
    },

    {
        question: "8. Which vehicle produces no exhaust emissions while driving?",
        answers: [
            "Diesel truck",
            "Petrol car",
            "Motorcycle",
            "Battery-electric car"
        ],
        correct: 3
    },

    {
        question: "9. What is 3D printing used for?",
        answers: [
            "Creating physical objects layer by layer",
            "Generating sunlight",
            "Producing wind",
            "Cleaning oceans"
        ],
        correct: 0
    },

    {
        question: "10. Why are energy-efficient machines useful?",
        answers: [
            "They use more electricity",
            "They reduce energy consumption",
            "They create more waste",
            "They require more fuel"
        ],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;


/* Start the quiz */

function startQuiz() {

    document.getElementById("quiz").style.display = "block";

    currentQuestion = 0;
    score = 0;

    showQuestion();

    document.getElementById("quiz").scrollIntoView({
        behavior: "smooth"
    });

}


/* Display a question */

function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    const answerButtons =
        document.getElementById("answer-buttons");

    answerButtons.innerHTML = "";

    document.getElementById("quiz-feedback").textContent = "";

    document.getElementById("next-button").style.display = "none";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answer-button");

        button.onclick = function() {
            selectAnswer(index, button);
        };

        answerButtons.appendChild(button);

    });

}


/* Check the selected answer */

function selectAnswer(selected, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;

    const correctAnswer = questions[currentQuestion].correct;

    const buttons = document.querySelectorAll(".answer-button");

    buttons.forEach((button, index) => {

        button.disabled = true;

        if (index === correctAnswer) {
            button.classList.add("correct");
        }

    });

    if (selected === correctAnswer) {

        score++;

        document.getElementById("quiz-feedback").textContent =
            "Correct! Well done!";

    } else {

        selectedButton.classList.add("wrong");

        document.getElementById("quiz-feedback").textContent =
            "Not quite! The correct answer is highlighted.";

    }

    document.getElementById("next-button").style.display = "inline-block";

}


/* Move to the next question */

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResults();

    }

}


/* Display final score */

function showResults() {

    document.getElementById("question").textContent =
        "Quiz Completed!";

    document.getElementById("answer-buttons").innerHTML = "";

    document.getElementById("quiz-feedback").textContent =
        "You scored " + score + " out of 10!";

    document.getElementById("next-button").textContent =
        "Try Again";

    document.getElementById("next-button").style.display =
        "inline-block";

    document.getElementById("next-button").onclick = function() {

        document.getElementById("next-button").textContent =
            "Next Question →";

        document.getElementById("next-button").onclick =
            nextQuestion;

        startQuiz();

    };

}


/* ============================= */
/* DID YOU KNOW FACTS */
/* ============================= */

const facts = [

    {
        icon: "🌊",
        title: "The Internet Travels Under the Ocean!",
        text: "Submarine fibre-optic cables connect countries and continents, carrying enormous amounts of data across the world!"
    },

    {
        icon: "☀️",
        title: "Solar Power Is Powerful!",
        text: "Solar panels convert sunlight into electricity, helping industries reduce their reliance on fossil fuels."
    },

    {
        icon: "🌬️",
        title: "Wind Energy Creates Electricity!",
        text: "Wind turbines turn the movement of air into electricity without burning fuel during operation."
    },

    {
        icon: "🤖",
        title: "Robots Help Build Products!",
        text: "Industrial robots can perform repetitive tasks accurately, helping factories improve productivity and reduce material waste."
    },

    {
        icon: "♻️",
        title: "Recycling Saves Resources!",
        text: "Recycling metals can reduce the need to extract and process new raw materials, saving energy and resources."
    },

    {
        icon: "🚗",
        title: "Electric Cars Are Different!",
        text: "Battery-electric cars do not produce exhaust emissions while driving, unlike traditional petrol and diesel cars."
    },

    {
        icon: "🏭",
        title: "Factories Can Become Greener!",
        text: "Factories can install energy-efficient lighting and machinery to reduce electricity use and operating costs."
    },

    {
        icon: "💡",
        title: "LED Lights Save Energy!",
        text: "LED lights generally use much less electricity than traditional incandescent bulbs while producing similar amounts of light."
    },

    {
        icon: "🌳",
        title: "Green Buildings Help the Planet!",
        text: "Green buildings can use natural lighting, better insulation and efficient cooling systems to reduce energy consumption."
    },

    {
        icon: "💧",
        title: "Water Can Be Reused!",
        text: "Some factories treat and reuse wastewater for suitable industrial processes, helping reduce freshwater demand."
    }

];


/* Display the three facts */

let factIndex = 0;

function displayFacts() {

    const container =
        document.getElementById("facts-container");

    container.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const fact = facts[(factIndex + i) % facts.length];

        const card = document.createElement("div");

        card.classList.add("fact-card");

        card.innerHTML = `
            <div class="fact-icon">${fact.icon}</div>
            <h3>${fact.title}</h3>
            <p>${fact.text}</p>
        `;

        container.appendChild(card);

    }

}


/* Move the conveyor belt */

function moveFacts(direction) {

    factIndex = (factIndex + direction + facts.length)
                % facts.length;

    displayFacts();

}


/* Load the facts when the page opens */

displayFacts();
