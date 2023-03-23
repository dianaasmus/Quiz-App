let questions = [
    {
        "question": "When was the first programming language developed?",
        "answer_1": "1943",
        "answer_2": "1954",
        "answer_3": "1929",
        "answer_4": "1892",
        "right_answer": 2
    },
    {
        "question": "Who was the first known 'programmer'?",
        "answer_1": "Ada Lovelace",
        "answer_2": "Ken Thompson",
        "answer_3": "Niklaus Wirth",
        "answer_4": "Grace Hopper",
        "right_answer": 1
    },
    {
        "question": "which programming language consists only of +, ., >, <, -, [, ] and ,?",
        "answer_1": "Whitespace",
        "answer_2": "Brainfuck",
        "answer_3": "INTERCAL",
        "answer_4": "JSFUCK",
        "right_answer": 2
    },
    {
        "question": "What was the first programming language?",
        "answer_1": "PL/1 (Programming Language One)",
        "answer_2": "LISP (LISt Processing)",
        "answer_3": "Ada (named after Ada Lovelace)",
        "answer_4": "Fortran (Formula Translation)",
        "right_answer": 4
    },
    {
        "question": "Which programming language can children and adults use to programme in a playful way?",
        "answer_1": "Nintendo KEY",
        "answer_2": "THE SIMS BUILD",
        "answer_3": "UNO ONLINE",
        "answer_4": "LEGO MINDSTORMS",
        "right_answer": 4
    }
];

let currentQuestion = 0;

function init() {
    let rightSide = document.getElementById('main');

    rightSide.innerHTML = `
            <p class="start-p">WELCOME TO</p>
            <div class="main-logo" onclick="init()">
            <img src="img/quizApp-logo.png" class="main-logo-p1">
            <img src="img/thequizapp.png" class="main-logo-p2">
            </div>
            <button class="start-btn" onclick="startQuiz()">START</button>
    `;
}

function startQuiz() {
    let rightSide = document.getElementById('main');

    document.getElementById('logo').style = '';
    rightSide.innerHTML = returnQuestionsContainer();

    document.getElementById('question-nr').innerHTML = questions.length;
    showCurrentQuestion();
}


function returnQuestionsContainer() {
    return `
    
    <p class="amounts"><span id="current-question-nr"></span> / <span id="question-nr"></span></p>
    <h2 id="seen-question"></h2>
    <div class="answers">
        <div>
            <h3 onclick="answer('answer_1')">
                
                <span id="answer_1"></span>
            </h3>
            <h3 onclick="answer('answer_2')">
                <span id="answer_2"></span>
            </h3>
        </div>
        <div>
            <h3 onclick="answer('answer_3')">
                <span id="answer_3"></span>
            </h3>
            <h3 onclick="answer('answer_4')">
                <span id="answer_4"></span>
            </h3>
        </div>
    </div>
    <div>
        <button class="next-btn" id="next_question" onclick="nextQuestion()" disabled>NEXT</button>
    </div>
    `;
}

function showCurrentQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('main').innerHTML = `
            <p class="result">1 / 5</p>
            <p class="congratulations">Congratulations</p>
            <img class="win" src="img/win.png">
            <button class="play-again-btn" onclick="playAgain()">PLAY AGAIN</button>`;
    } else {

        let question = questions[currentQuestion];
        document.getElementById('current-question-nr').innerHTML = currentQuestion + 1;

        document.getElementById('seen-question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);
    let idOfRightAnwer = `answer_${question['right_answer']}`;

    if (selectedAnswer == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('green-shadow');
    } else {
        document.getElementById(selection).parentNode.classList.add('red-shadow');
        document.getElementById(idOfRightAnwer).parentNode.classList.add('green-shadow');
    }
    document.getElementById('next_question').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next_question').disabled = false;
    resetAnswerQuestion();
    showCurrentQuestion();
}

function resetAnswerQuestion() {
    document.getElementById('answer_1').parentNode.classList.remove('red-shadow');
    document.getElementById('answer_1').parentNode.classList.remove('green-shadow');
    document.getElementById('answer_2').parentNode.classList.remove('red-shadow');
    document.getElementById('answer_2').parentNode.classList.remove('green-shadow');
    document.getElementById('answer_3').parentNode.classList.remove('red-shadow');
    document.getElementById('answer_3').parentNode.classList.remove('green-shadow');
    document.getElementById('answer_4').parentNode.classList.remove('red-shadow');
    document.getElementById('answer_4').parentNode.classList.remove('green-shadow');
}   