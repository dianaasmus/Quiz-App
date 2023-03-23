let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Robbie WIlliams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "What does the HTML tag <a> mean?",
        "answer_1": "bold text",
        "answer_2": "container",
        "answer_3": "a link",
        "answer_4": "italics",
        "right_answer": 3
    },
    {
        "question": "How to insert a link to an external website in HTML?",
        "answer_1": "With the <a> and the href attribute",
        "answer_2": "With the <link> and the attribute href",
        "answer_3": "Mit dem <img> und dem Attribut src",
        "answer_4": "With the <div> and the class attribute",
        "right_answer": 1
    },
    {
        "question": "How to create a table in HTML?",
        "answer_1": "Mit <div> and class on table",
        "answer_2": "With <form> and method on table",
        "answer_3": "With <table>, <thead>, <tbody> and <tfoot> </tfoot>",
        "answer_4": "With <img> and src on the image file of the table",
        "right_answer": 3
    },
];

let currentQuestion = 0;

function init() {
    let rightSide = document.getElementById('right');

    rightSide.innerHTML = `
            <h1>Welcome to <br>
            THEQUIZAPP for Web Developer!</h1>
            <p class="start-q">Ready for the Challenge?</p>
            <button class="start-btn" onclick="startQuiz()">START</button>
    `;
}

function startQuiz() {
    let rightSide = document.getElementById('right');

    rightSide.innerHTML = returnQuestionsContainer();

    document.getElementById('question-nr').innerHTML = questions.length;
    showCurrentQuestion();
}


function returnQuestionsContainer() {
    return `
    <h2>Category: HTML</h2>
    <p class="amounts">1 / <span id="question-nr"></span></p>
    <h2 id="seen-question"></h2>
    <div class="answers">
        <div>
            <h3 onclick="answer('answer_1')">
                <img src="img/empty-circle.png">
                <span id="answer_1"></span>
            </h3>
            <h3 onclick="answer('answer_2')">
                <img src="img/empty-circle.png">
                <span id="answer_2"></span>
            </h3>
        </div>
        <div>
            <h3 onclick="answer('answer_3')">
                <img src="img/empty-circle.png">
                <span id="answer_3"></span>
            </h3>
            <h3 onclick="answer('answer_4')">
                <img src="img/empty-circle.png">
                <span id="answer_4"></span>
            </h3>
        </div>
    </div>
    <div>
        <img src="img/arrow.png" class="arrow">
        <img src="img/arrow.right.png" class="arrow">
    </div>
    `;
}

function showCurrentQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('seen-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    // console.log(question);
    // console.log(selection);
    let selectedAnswer = selection.slice(-1);
    // let anwserContainer = 
    // console.log(selectedAnswer);
    // console.log(question['right_answer']);

    let idOfRightAnwer = `answer_${question['right_answer']}`;

    
    if (selectedAnswer == question['right_answer']) {
        // console.log('richtige Anrtwort');
        document.getElementById(selection).parentNode.classList.add('green-shadow');
    } else {
        // console.log('falsche Anrtwort');
        document.getElementById(selection).parentNode.classList.add('red-shadow');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('green-shadow');

    }
}