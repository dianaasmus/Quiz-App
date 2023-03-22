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
}


function returnQuestionsContainer() {
    return `
    <h2>Category: HTML</h2>
    <p class="amounts">1 / <span id="question-nr"></span></p>
    <h2>Which prgramming language is used the most?</h2>
    <div class="answers">
        <div>
            <h3>
                <img src="img/empty-circle.png">
                HTML
            </h3>
            <h3>
                <img src="img/empty-circle.png">
                CSS
            </h3>
        </div>
        <div>
            <h3>
                <img src="img/empty-circle.png">
                Java
            </h3>
            <h3>
                <img src="img/empty-circle.png">
                JavaScript
            </h3>
        </div>
    </div>
    <div>
        <img src="img/arrow.png" class="arrow">
        <img src="img/arrow.right.png" class="arrow">
    </div>
    `;
}