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


     // Stop if this page does not have the facts section
    if (!container) {
        return;
    }

    container.innerHTML = "";

    // Keep the rest of your existing code here


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



/* ================================= */
/* INFRASTRUCTURE MINI QUIZ */
/* ================================= */

const infraQuestions = document.querySelectorAll(".infra-question");

let infraScore = 0;
let infraAnswered = 0;


/* Check the selected answer */

infraQuestions.forEach(question => {

    const buttons = question.querySelectorAll(".infra-answer");

    buttons.forEach(button => {

        button.addEventListener("click", function() {

            // Prevent answering the same question twice
            if (question.dataset.answered === "true") {
                return;
            }

            question.dataset.answered = "true";
            infraAnswered++;

            const feedback =
                question.querySelector(".infra-feedback");

            const isCorrect = this.dataset.correct === "true";

            if (isCorrect) {

                infraScore++;

                this.classList.add("correct");

                feedback.textContent = "Correct! Great job!";

            } else {

                this.classList.add("wrong");

                feedback.textContent =
                    "Not quite! The correct answer is highlighted.";

            }

            // Highlight the correct answer
            buttons.forEach(answer => {

                answer.disabled = true;

                if (answer.dataset.correct === "true") {
                    answer.classList.add("correct");
                }

            });

            // Update score
            document.getElementById("infra-score").textContent =
                "Your progress: " + infraAnswered +
                "/5 questions answered | Score: " +
                infraScore + "/5";

            // Display final result
            if (infraAnswered === 5) {

                document.getElementById("infra-score").textContent =
                    "Quiz completed! You scored " +
                    infraScore + " out of 5!";

            }

        });

    });

});


/* ================================= */
/* INTERACTIVE CITY */
/* ================================= */


/* Information about each infrastructure */

const infraInformation = {

    "Houses": {
        title: "🏠 Houses – A Place to Call Home",
        text: "Houses provide people with safe places to live, rest and raise families. Well-planned housing gives communities access to essential services and helps create comfortable neighbourhoods."
    },

    "Buildings": {
        title: "🏢 Buildings – Spaces for Growth",
        text: "Buildings provide spaces for schools, hospitals, offices and businesses. They support education, healthcare, employment and economic development within a city."
    },

    "Roads": {
        title: "🛣️ Roads – Connecting Communities",
        text: "Roads allow people and goods to travel between different locations. Good road networks make transportation more efficient and help businesses deliver products."
    },

    "Power Plants": {
        title: "⚡ Power Plants – Keeping the City Running",
        text: "Power plants generate electricity for homes, hospitals, factories and other essential services. Renewable energy sources such as solar and wind can help reduce pollution and reliance on fossil fuels."
    },

    "Ports": {
        title: "🚢 Ports – Connecting the World",
        text: "Ports allow ships to transport goods and passengers between countries. They support international trade, create employment and help businesses access global markets."
    },

    "Airports": {
        title: "✈️ Airports – Bringing the World Closer",
        text: "Airports connect cities and countries through air travel. They support tourism, international business and the transportation of important goods."
    }

};


/* Select an infrastructure */

const cityItems = document.querySelectorAll(".city-item");

cityItems.forEach(item => {

    item.addEventListener("click", function() {

        // Remove previous selection
        cityItems.forEach(cityItem => {
            cityItem.classList.remove("selected");
        });

        // Highlight the new selection
        this.classList.add("selected");

        // Get the selected infrastructure
        const name = this.dataset.name;

        const information = infraInformation[name];

        // Replace the previous information
        document.getElementById("city-info-title").textContent =
            information.title;

        document.getElementById("city-info-text").textContent =
            information.text;

    });

});



/* ================================= */
/* BE APART - FUTURE TIMELINE */
/* ================================= */
const timelineYears = [
    {
        year: "2026",
        title: "2026 - The Starting Point",
        image: "images/future-2026.jpg",
        description: "Factories increasingly adopt solar energy and efficient machinery. This helps reduce energy waste, lower emissions and make industrial production more sustainable."
    },

    {
        year: "2030",
        title: "2030 - A Greener World",
        image: "images/future-2030.jpg",
        description: "Cleaner public transport and renewable-powered buildings help reduce pollution. Cities become more environmentally friendly and easier to travel around."
    },

    {
        year: "2035",
        title: "2035 - Smarter Industries",
        image: "images/future-2035.jpg",
        description: "Robots and intelligent systems help factories produce goods more accurately. This improves productivity while reducing mistakes and unnecessary material waste."
    },

    {
        year: "2040",
        title: "2040 - Connected Infrastructure",
        image: "images/future-2040.jpg",
        description: "Connected transport and energy networks help cities manage resources more efficiently. Communities benefit from smoother transportation and more reliable services."
    },

    {
        year: "2045",
        title: "2045 - A New Era of Innovation",
        image: "images/future-2045.jpg",
        description: "Innovative construction materials and improved energy storage make buildings more sustainable. This helps communities reduce their environmental impact."
    },

    {
        year: "2050",
        title: "2050 - The World We Imagine",
        image: "images/future-2050.jpg",
        description: "Clean energy, smart infrastructure and sustainable industries work together. Communities enjoy cleaner surroundings, efficient services and more opportunities for future generations."
    }
];



// Find the timeline elements
const timelineItems = document.querySelectorAll(".timeline-item");

const timelineHeading = document.getElementById("timeline-year");
const timelineImage = document.querySelector(".timeline-image");
const timelineDescription = document.getElementById("timeline-description");

const previousButton = document.getElementById("previous-year");
const nextButton = document.getElementById("next-year");
const reflectionSection = document.getElementById("reflection-section");


// Only run this code on the Be Apart page
if (
    timelineItems.length > 0 &&
    timelineHeading &&
    timelineImage &&
    timelineDescription &&
    previousButton &&
    nextButton
) {

    let selectedYear = 0;


    // Display the selected year
    function displayTimelineYear(index) {

        selectedYear = index;

        const yearData = timelineYears[selectedYear];

        // Add a transition effect
        const timelineContent = document.querySelector(".timeline-content");

        timelineContent.classList.add("changing");

        setTimeout(() => {

            // Update the heading
            timelineHeading.textContent = yearData.title;

            // Update the illustration symbol
            timelineImage.innerHTML = `
    <img src="${yearData.image}" alt="Future development in ${yearData.year}">
`;
            timelineImage.classList.toggle(
                "final-image",
                yearData.year === "2050"
            );

            // Update the description
            timelineDescription.textContent = yearData.description;
            // Show reflection section only for 2050
            if (reflectionSection) {
                reflectionSection.style.display =
                    yearData.year === "2050" ? "block" : "none";
            }

            // Update the selected dot
            timelineItems.forEach((item, i) => {

                item.classList.toggle("active", i === selectedYear);

            });

            // Update button states
            previousButton.disabled = selectedYear === 0;
            nextButton.disabled = selectedYear === timelineYears.length - 1;

            // Change the final button text for 2050
            if (selectedYear === timelineYears.length - 1) {
                nextButton.textContent = "Final Year";
            } else {
                nextButton.textContent = "Next Year →";
            }

            timelineContent.classList.remove("changing");

        }, 200);
    }


    // Allow visitors to click a year
    timelineItems.forEach((item, index) => {

        item.addEventListener("click", function() {

            displayTimelineYear(index);

        });

    });


    // Previous year button
    previousButton.addEventListener("click", function() {

        if (selectedYear > 0) {
            displayTimelineYear(selectedYear - 1);
        }

    });


    // Next year button
    nextButton.addEventListener("click", function() {

        if (selectedYear < timelineYears.length - 1) {
            displayTimelineYear(selectedYear + 1);
        }

    });


    // Display 2026 when the page first opens
    displayTimelineYear(0);

}





/* ================================= */
/* BE APART - INNOVATOR PERSONALITY QUIZ */
/* ================================= */

const innovatorQuestions = [

    {
        question: "Which activity would you enjoy most?",
        answers: [
            { text: "Creating eco-friendly solutions", type: "green", icon: "🌱" },
            { text: "Designing and building something", type: "engineer", icon: "⚙️" },
            { text: "Exploring new technologies", type: "technology", icon: "💡" },
            { text: "Improving how systems work", type: "systems", icon: "🧠" }
        ]
    },

    {
        question: "What problem would you most like to solve?",
        answers: [
            { text: "Reducing pollution and waste", type: "green", icon: "🌍" },
            { text: "Building stronger infrastructure", type: "engineer", icon: "🏗️" },
            { text: "Creating a new technological invention", type: "technology", icon: "🚀" },
            { text: "Making everyday processes more efficient", type: "systems", icon: "🔧" }
        ]
    },

    {
        question: "Which future development excites you most?",
        answers: [
            { text: "Cities powered by clean energy", type: "green", icon: "☀️" },
            { text: "Advanced bridges and buildings", type: "engineer", icon: "🌉" },
            { text: "Robots and artificial intelligence", type: "technology", icon: "🤖" },
            { text: "Smart cities where everything connects", type: "systems", icon: "🏙️" }
        ]
    },

    {
        question: "What would you bring to a team project?",
        answers: [
            { text: "Ideas that protect the environment", type: "green", icon: "🌿" },
            { text: "Practical designs and solutions", type: "engineer", icon: "📐" },
            { text: "Creative and experimental ideas", type: "technology", icon: "🔬" },
            { text: "Organisation and planning", type: "systems", icon: "📊" }
        ]
    },

    {
        question: "Which invention would you most like to create?",
        answers: [
            { text: "A machine that produces clean energy", type: "green", icon: "🌞" },
            { text: "A self-building construction machine", type: "engineer", icon: "🏗️" },
            { text: "A revolutionary digital device", type: "technology", icon: "📱" },
            { text: "A system that connects entire cities", type: "systems", icon: "🌐" }
        ]
    },

    {
        question: "What inspires you when thinking about the future?",
        answers: [
            { text: "A healthier planet for everyone", type: "green", icon: "🌎" },
            { text: "Amazing structures and engineering", type: "engineer", icon: "🏢" },
            { text: "Discoveries that change the world", type: "technology", icon: "✨" },
            { text: "A world that works more smoothly", type: "systems", icon: "⚡" }
        ]
    },

    {
        question: "Which challenge sounds most interesting?",
        answers: [
            { text: "Finding ways to reuse resources", type: "green", icon: "♻️" },
            { text: "Designing a solution to a structural problem", type: "engineer", icon: "🔩" },
            { text: "Experimenting with a new invention", type: "technology", icon: "🧪" },
            { text: "Connecting different technologies together", type: "systems", icon: "🔗" }
        ]
    },

    {
        question: "Which subject would you most enjoy exploring?",
        answers: [
            { text: "Environmental science", type: "green", icon: "🌱" },
            { text: "Engineering and architecture", type: "engineer", icon: "📏" },
            { text: "Computer science and robotics", type: "technology", icon: "💻" },
            { text: "Technology and systems design", type: "systems", icon: "🧩" }
        ]
    },

    {
        question: "What would make you feel most accomplished?",
        answers: [
            { text: "Making industries more sustainable", type: "green", icon: "🌳" },
            { text: "Building something that helps communities", type: "engineer", icon: "🏘️" },
            { text: "Inventing something never seen before", type: "technology", icon: "💡" },
            { text: "Making a complicated system work better", type: "systems", icon: "⚙️" }
        ]
    },

    {
        question: "If you could shape the world of 2050, what would you focus on?",
        answers: [
            { text: "A cleaner and greener planet", type: "green", icon: "🌿" },
            { text: "Stronger and smarter infrastructure", type: "engineer", icon: "🌉" },
            { text: "Groundbreaking inventions and technology", type: "technology", icon: "🚀" },
            { text: "Connected and efficient communities", type: "systems", icon: "🌐" }
        ]
    }

];



/* ================================= */
/* INNOVATOR QUIZ - QUESTION DISPLAY */
/* ================================= */

const quizContainer = document.getElementById("innovator-quiz-container");

let innovatorCurrentQuestion = 0;
let innovatorSelectedAnswer = null;

let innovatorScores = {
    green: 0,
    engineer: 0,
    technology: 0,
    systems: 0
};

if (quizContainer) {


    // HTML elements
    const questionHeading = document.getElementById("innovator-question");
    const answersContainer = document.getElementById("innovator-answers");
    const nextButton = document.getElementById("innovator-next");
    const questionNumber = document.getElementById("quiz-question-number");
    const progressPercentage = document.getElementById("quiz-progress-percentage");
    const progressFill = document.getElementById("quiz-progress-fill");

    // Display a question
    function displayInnovatorQuestion() {

        const questionData = innovatorQuestions[innovatorCurrentQuestion];

        innovatorSelectedAnswer = null;

        questionHeading.textContent = questionData.question;

        questionNumber.textContent =
            `Question ${innovatorCurrentQuestion + 1} of ${innovatorQuestions.length}`;

        const progress = ((innovatorCurrentQuestion + 1) / innovatorQuestions.length) * 100;

        progressPercentage.textContent = `${progress}%`;
        progressFill.style.width = `${progress}%`;

        answersContainer.innerHTML = "";

        questionData.answers.forEach(answer => {

            const answerButton = document.createElement("button");

            answerButton.className = "quiz-answer";

            answerButton.innerHTML = `
                <span class="answer-icon">${answer.icon}</span>
                <span>${answer.text}</span>
            `;

            answerButton.addEventListener("click", function() {

                // Remove previous selection
                document.querySelectorAll(".quiz-answer").forEach(button => {
                    button.classList.remove("selected");
                });

                // Highlight selected answer
                answerButton.classList.add("selected");

                innovatorSelectedAnswer = answer.type;

                nextButton.disabled = false;
            });

            answersContainer.appendChild(answerButton);

        });

        nextButton.disabled = true;

        if (innovatorCurrentQuestion === innovatorQuestions.length - 1) {
            nextButton.textContent = "See My Result →";
        } else {
            nextButton.textContent = "Next Question →";
        }
    }

    // Next button
    nextButton.addEventListener("click", function() {

        if (innovatorSelectedAnswer === null) {
            return;
        }

        // Add one point to the selected personality
        innovatorScores[innovatorSelectedAnswer]++;

        if (innovatorCurrentQuestion < innovatorQuestions.length - 1) {

            innovatorCurrentQuestion++;

            displayInnovatorQuestion();

        } else {

            displayInnovatorResults();

        }

    });

    // Start quiz
    displayInnovatorQuestion();

}



/* ================================= */
/* INNOVATOR QUIZ - PERSONALITY RESULTS */
/* ================================= */

const innovatorProfiles = {

    green: {
        title: "The Green Innovator",
        image: "images/green-innovator.jpg",
        description: "You care about creating a healthier planet. You look for ways to make industries more sustainable and protect the environment.",
        strengths: "Environmental awareness, sustainable thinking and resourcefulness.",
        future: "You could help create cleaner industries, expand renewable energy and develop solutions that reduce waste."
    },

    engineer: {
        title: "The Future Engineer",
        image: "images/future-engineer.jpg",
        description: "You enjoy designing, building and improving the world around you. You approach challenges with creativity and practical thinking.",
        strengths: "Creativity, practical thinking and problem-solving.",
        future: "You could help design stronger infrastructure, smarter buildings and innovative machines that improve everyday life."
    },

    technology: {
        title: "The Technology Pioneer",
        image: "images/technology-pioneer.jpg",
        description: "You are curious about what technology could achieve. You enjoy exploring new possibilities and imagining inventions that could change the world.",
        strengths: "Curiosity, imagination and technological exploration.",
        future: "You could introduce groundbreaking technologies, develop useful inventions and help industries embrace new discoveries."
    },

    systems: {
        title: "The Smart Systems Thinker",
        image: "images/smart-systems-thinker.jpg",
        description: "You enjoy connecting ideas and finding better ways for things to work together. You think about the bigger picture.",
        strengths: "Strategic thinking, organisation and efficiency.",
        future: "You could help create connected cities, improve transportation networks and make industries operate more efficiently."
    }

};



/* ================================= */
/* INNOVATOR QUIZ - RESULTS DISPLAY */
/* ================================= */

function displayInnovatorResults() {

    const resultsSection = document.getElementById("innovator-results");
    const resultsContainer = document.getElementById("results-container");
    const quizContainer = document.getElementById("innovator-quiz-container");
    const progressContainer = document.querySelector(".quiz-progress");

    // Find the highest score
    const highestScore = Math.max(...Object.values(innovatorScores));

    // Find every personality that achieved the highest score
    const winningTypes = Object.keys(innovatorScores).filter(type => {
        return innovatorScores[type] === highestScore;
    });

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Display each winning personality
    winningTypes.forEach(type => {

        const profile = innovatorProfiles[type];

        const resultCard = document.createElement("div");
        resultCard.className = "result-card";

        resultCard.innerHTML = `
            <img src="${profile.image}" alt="${profile.title}">

            <div class="result-card-content">

                <h3>${profile.title}</h3>

                <p>${profile.description}</p>

                <h4>Your Strengths</h4>
                <p>${profile.strengths}</p>

                <h4>Your Contribution to the Future</h4>
                <p>${profile.future}</p>

            </div>
        `;

        resultsContainer.appendChild(resultCard);

    });

    // Hide the quiz and show the results
    quizContainer.style.display = "none";
    progressContainer.style.display = "none";
    resultsSection.style.display = "block";

    // Scroll to the results
    resultsSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}

// Restart the quiz
const restartQuizButton = document.getElementById("restart-innovator-quiz");

if (restartQuizButton) {

    restartQuizButton.addEventListener("click", function() {

        // Reset question and scores
        innovatorCurrentQuestion = 0;

        innovatorScores = {
            green: 0,
            engineer: 0,
            technology: 0,
            systems: 0
        };

        // Show the quiz again
        document.getElementById("innovator-results").style.display = "none";
        document.getElementById("innovator-quiz-container").style.display = "block";
        document.querySelector(".quiz-progress").style.display = "block";

        // Reset the progress bar and question
        displayInnovatorQuestion();

        // Return to the quiz
        document.querySelector(".innovator-quiz").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}



let money = 500;
let games_score = 0;
let happiness = 50;
let population = 0;
let selectedBuilding = "house";

// Information about each building

const buildings = {

    // RESIDENTIAL
    house: {
    emoji: "🏠",
    description: "Provides homes for residents and increases population.",
    cost: 50,
    points: 10,
    happiness: 2,
    population: 10,
    income: 0
    },

    // TRANSPORTATION
    road: {
        emoji: "🛣️",
        description: "Connects buildings and supports city transportation.",
        cost: 10,
        points: 5,
        happiness: 1,
        population: 0,
        income: 0
    },

    port: {
        emoji: "⚓",
        description: "Supports maritime trade and the movement of goods.",
        cost: 200,
        points: 40,
        happiness: 4,
        population: 0,
        income: 80
    },

    airport: {
        emoji: "✈️",
        description: "Connects your city to international destinations.",
        cost: 300,
        points: 60,
        happiness: 8,
        population: 0,
        income: 120
    },

    trainStation: {
        emoji: "🚉",
        description: "Improves public transportation and city connectivity.",
        cost: 150,
        points: 30,
        happiness: 8,
        population: 0,
        income: 30
    },

    // PUBLIC SERVICES
    hospital: {
        emoji: "🏥",
        description: "Provides healthcare and improves citizens' well-being.",
        cost: 150,
        points: 30,
        happiness: 15,
        population: 0,
        income: 0
    },

    school: {
        emoji: "🏫",
        description: "Provides education and supports the future workforce.",
        cost: 100,
        points: 20,
        happiness: 10,
        population: 0,
        income: 0
    },

    park: {
        emoji: "🌳",
        description: "Creates green spaces and improves city happiness.",
        cost: 30,
        points: 10,
        happiness: 8,
        population: 0,
        income: 0
    },

    // INDUSTRY & ENERGY
    factory: {
        emoji: "🏭",
        description: "Produces goods and generates money for the city.",
        cost: 120,
        points: 25,
        happiness: -10,
        population: 0,
        income: 50
    },

    powerPlant: {
        emoji: "⚡",
        description: "Supplies energy to support city development.",
        cost: 200,
        points: 40,
        happiness: -5,
        population: 0,
        income: 70
    },

    // COMMERCE
    mall: {
        emoji: "🛍️",
        description: "Provides shopping and entertainment for residents.",
        cost: 180,
        points: 35,
        happiness: 10,
        population: 5,
        income: 60
    },

    office: {
        emoji: "🏢",
        description: "Supports businesses and creates employment opportunities.",
        cost: 120,
        points: 25,
        happiness: 5,
        population: 10,
        income: 40
    }
};


// Create City Map
const gameMap = document.getElementById("game-map");

if (gameMap) {

    const waterTiles = [56, 57, 58, 59, 60, 61, 62, 63];

    for (let i = 0; i < 64; i++) {

        let tile = document.createElement("button");

        tile.className = "tile";
        tile.dataset.building = "";
        tile.dataset.terrain = "grass";

        // Add water terrain
        if (waterTiles.includes(i)) {
            tile.classList.add("terrain-water");
            tile.dataset.terrain = "water";
        }

        tile.onclick = function () {
            placeBuilding(tile);
        };

        gameMap.appendChild(tile);
    }

}


function selectBuilding(building) {

    selectedBuilding = building;

    document.getElementById("selected").innerText =
        "Selected: " + building;

    let buttons = document.querySelectorAll(".buildings button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Highlight the selected building
    let selectedButton = document.querySelector(
        `.buildings button[onclick="selectBuilding('${building}')"]`
    );

    if (selectedButton) {
        selectedButton.classList.add("active");
    }

    showBuildingInfo(building);

}

function showBuildingInfo(buildingName) {

    let building = buildings[buildingName];

    if (!building) return;

    let info = document.getElementById("building-info");

    info.innerHTML = `
        <h3>${building.emoji} ${buildingName}</h3>

        <p class="building-description">
            ${building.description}
        </p>

        <hr>

        <p>💰 Cost: $${building.cost}</p>
        <p>⭐ Points: +${building.points}</p>
        <p>😊 Happiness: ${building.happiness > 0 ? "+" : ""}${building.happiness}</p>
        <p>👥 Population: +${building.population}</p>
        <p>💵 Money earned: +$${building.income}</p>
    `;
}


function placeBuilding(tile) {

    // Remove a building
    if (selectedBuilding === "remove") {
        let oldName = tile.dataset.building;

        if (oldName === "") {
            showMessage("Nothing to remove!");
            return;
        }

        let old = buildings[oldName];

        money += Math.floor(old.cost / 2);
        games_score -= old.points;

        tile.innerText = "";
        tile.dataset.building = "";

        recalculateCity();
        updateStats();
        checkMission();

        showMessage("Building removed!");
        return;
    }


    // Prevent building on water
    if (tile.dataset.terrain === "water") {
        showMessage("You cannot build on water!");
        return;
    }

    // Prevent buildings on reserved road tiles
    if (tile.dataset.terrain === "road" && selectedBuilding !== "road") {
        showMessage("This tile is reserved for roads!");
        return;
    }

    // Allow roads to be placed on road terrain
    if (tile.dataset.terrain === "road" && selectedBuilding === "road") {
        showMessage("This is already a road tile!");
        return;
    }
    
    
    // Check if tile is occupied
    if (tile.dataset.building !== "") {
        showMessage("This square is occupied!");
        return;
    }

    let building = buildings[selectedBuilding];

    // Check if player has enough money
    if (money < building.cost) {
        showMessage("Not enough money!");
        return;
    }

    // Spend money and receive income
    money -= building.cost;
    money += building.income;

    // Add points
    games_score += building.points;

    // Place building
    tile.innerText = building.emoji;
    tile.dataset.building = selectedBuilding;

    recalculateCity();
    updateStats();
    checkMission();

    showMessage("You built a " + selectedBuilding + "!");
}

function updateStats() {
    document.getElementById("money").innerText = money;
    document.getElementById("score").innerText = games_score;

    document.getElementById("happiness").innerText = happiness;
    document.getElementById("population").innerText = population;

    // Update happiness progress bar
    let bar = document.getElementById("happiness-bar");

    bar.style.width = happiness + "%";

    if (happiness >= 80) {
        bar.style.backgroundColor = "#4caf50";
    } else if (happiness >= 40) {
        bar.style.backgroundColor = "#ff9800";
    } else {
        bar.style.backgroundColor = "#f44336";
    }

    updateBuildingButtons();
}


function updateBuildingButtons() {

    let buttons = document.querySelectorAll(
        ".building-category button[onclick^='selectBuilding']"
    );

    buttons.forEach(function(button) {

        let match = button.getAttribute("onclick").match(/selectBuilding\('(.+)'\)/);

        if (!match) return;

        let buildingName = match[1];

        if (buildingName === "remove") {
            button.classList.remove("unaffordable");
            return;
        }

        let building = buildings[buildingName];

        if (!building) return;

        if (money < building.cost) {
            button.classList.add("unaffordable");
        }
        else {
            button.classList.remove("unaffordable");
        }

    });
}


function showMessage(text) {
    document.getElementById("message").innerText = text;
}

function resetGame() {
    money = 500;
    games_score = 0;
    happiness = 50;
    population = 0;
    selectedBuilding = "house";

    let tiles = document.querySelectorAll(".tile");

    tiles.forEach(function (tile) {
        tile.innerText = "";
        tile.dataset.building = "";
    });

    updateStats();
    checkMission();

    document.getElementById("selected").innerText =
        "Selected: house";

    showMessage("Game restarted!");
}

function recalculateCity() {
    happiness = 50;
    population = 0;

    let tiles = document.querySelectorAll(".tile");

    tiles.forEach(function (tile) {
        let name = tile.dataset.building;

        if (name !== "") {
            happiness += buildings[name].happiness;
            population += buildings[name].population;
        }
    });

    // Keep happiness between 0 and 100
    happiness = Math.max(0, Math.min(100, happiness));
}

function checkMission() {
    let hasHospital = false;
    let hasSchool = false;

    let tiles = document.querySelectorAll(".tile");

    tiles.forEach(function (tile) {
        if (tile.dataset.building === "hospital") {
            hasHospital = true;
        }

        if (tile.dataset.building === "school") {
            hasSchool = true;
        }
    });

    // Update mission checklist
    document.getElementById("mission-happiness").innerText =
        (happiness >= 80 ? "✅" : "❌") +
        " Reach 80% Happiness";

    document.getElementById("mission-population").innerText =
        (population >= 50 ? "✅" : "❌") +
        " Reach 50 Population";

    document.getElementById("mission-hospital").innerText =
        (hasHospital ? "✅" : "❌") +
        " Build a Hospital";

    document.getElementById("mission-school").innerText =
        (hasSchool ? "✅" : "❌") +
        " Build a School";

    // Winning condition
    if (happiness >= 80 && population >= 50 &&
        hasHospital && hasSchool) {

        showMessage("🎉 Congratulations! Your city is thriving!");
    }
}



// =============================
// GUESS THE INNOVATION
// =============================

const innovationQuestions = [

    {
        image: "🤖",
        question: "Which technology helps factories automate repetitive tasks?",
        options: [
            "A. Robotics",
            "B. Solar Energy",
            "C. Recycling"
        ],
        answer: 0,
        feedback: "Robotics allows factories to automate tasks and improve production efficiency."
    },

    {
        image: "☀️",
        question: "Which technology helps factories generate clean electricity?",
        options: [
            "A. Coal Machinery",
            "B. Solar Panels",
            "C. Diesel Engines"
        ],
        answer: 1,
        feedback: "Solar panels convert sunlight into renewable electricity."
    },

    {
        image: "♻️",
        question: "Which method helps factories reduce waste?",
        options: [
            "A. Producing more waste",
            "B. Throwing away reusable materials",
            "C. Recycling Materials"
        ],
        answer: 2,
        feedback: "Recycling allows materials to be reused instead of becoming waste."
    },

    {
        image: "🧠",
        question: "Which technology allows machines to learn from information?",
        options: [
            "A. Artificial Intelligence",
            "B. Traditional Machinery",
            "C. Solar Panels"
        ],
        answer: 0,
        feedback: "Artificial Intelligence helps machines analyse information and perform tasks intelligently."
    },

    {
        image: "⚡",
        question: "What can energy-efficient machinery help factories do?",
        options: [
            "A. Use more electricity",
            "B. Reduce energy consumption",
            "C. Increase pollution"
        ],
        answer: 1,
        feedback: "Energy-efficient machinery uses less electricity while helping factories operate effectively."
    }

];

let innovationCurrentQuestion = 0;
let innovationScore = 0;
let innovationAnswered = false;


// Display a question
function displayInnovationQuestion() {

    const question = innovationQuestions[innovationCurrentQuestion];

    document.getElementById("guess-progress").textContent =
        `QUESTION ${innovationCurrentQuestion + 1} OF 5`;

    document.getElementById("guess-image").textContent =
        question.image;

    document.getElementById("guess-question").textContent =
        question.question;

    const optionsContainer = document.getElementById("guess-options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = function () {
            checkInnovationAnswer(index);
        };

        optionsContainer.appendChild(button);

    });

    document.getElementById("guess-feedback").textContent = "";

    document.getElementById("guess-next").hidden = true;

    innovationAnswered = false;

}


// Check the selected answer
function checkInnovationAnswer(selectedAnswer) {

    if (innovationAnswered) return;

    innovationAnswered = true;

    const question = innovationQuestions[innovationCurrentQuestion];

    const buttons = document.querySelectorAll("#guess-options button");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const feedback = document.getElementById("guess-feedback");

    if (selectedAnswer === question.answer) {

        innovationScore++;

        feedback.textContent = "✓ Correct! " + question.feedback;

        feedback.style.color = "#27632a";
        feedback.style.backgroundColor = "#e5f5e5";

    } else {

        feedback.textContent = "✗ Not quite! " + question.feedback;

        feedback.style.color = "#a34820";
        feedback.style.backgroundColor = "#fff0e5";

    }

    feedback.style.padding = "15px";
    feedback.style.borderRadius = "8px";

    const nextButton = document.getElementById("guess-next");

    nextButton.hidden = false;

    nextButton.textContent =
        innovationCurrentQuestion === 4
            ? "View My Results →"
            : "Next Question →";

}


// Move to the next question
function nextInnovationQuestion() {

    innovationCurrentQuestion++;

    if (innovationCurrentQuestion < innovationQuestions.length) {

        displayInnovationQuestion();

    } else {

        displayInnovationResults();

    }

}


// Display final results
function displayInnovationResults() {

    document.getElementById("guess-progress").textContent =
        "CHALLENGE COMPLETED";

    document.getElementById("guess-image").textContent = "🏆";

    document.getElementById("guess-question").textContent =
        `You scored ${innovationScore}/5!`;

    document.getElementById("guess-options").innerHTML = "";

    let message;

    if (innovationScore === 5) {
        message = "Outstanding! You're an Innovation Expert!";
    } else if (innovationScore >= 3) {
        message = "Well done! You have a good understanding of modern industry!";
    } else {
        message = "Good effort! Keep exploring the technologies shaping our future!";
    }

    document.getElementById("guess-feedback").textContent = message;

    const nextButton = document.getElementById("guess-next");

    nextButton.textContent = "Play Again ↻";
    nextButton.hidden = false;

}


// Restart the game
function resetInnovationGame() {

    innovationCurrentQuestion = 0;
    innovationScore = 0;

    displayInnovationQuestion();

}


// Connect the buttons and start the game
const innovationNextButton = document.getElementById("guess-next");

if (innovationNextButton) {

    innovationNextButton.addEventListener("click", function () {

        if (innovationCurrentQuestion >= innovationQuestions.length) {

            resetInnovationGame();

        } else {

            nextInnovationQuestion();

        }

    });

    displayInnovationQuestion();

}
