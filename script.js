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
        "question": "Which programming language consists only of +, ., >, <, -, [, ] and ,?",
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
        "question": "With which education software can children and adults learn programming?",
        "answer_1": "Nintendo KEY",
        "answer_2": "THE SIMS BUILD",
        "answer_3": "UNO ONLINE",
        "answer_4": "LEGO MINDSTORMS",
        "right_answer": 4
    }
];

let rightAnswers = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio('audio/success.mp3');
let AUDIO_FAIL = new Audio('audio/fail.mp3');


function init() {
    document.getElementById('main').innerHTML = startScreen();
}

function startScreen() {
    return `
    <p class="start-p">WELCOME TO</p>
    <div class="main-logo" onclick="init()">
    <img src="img/quizApp-logo.png" class="main-logo-p1">
    <img src="img/thequizapp.png" class="main-logo-p2">
    </div>
    <button class="start-btn" onclick="startQuiz()">START</button>
`;
}

function startQuiz() {
    document.getElementById('logo').style = '';
    document.getElementById('main').innerHTML = returnQuestionsContainer();
    document.getElementById('question-nr').innerHTML = questions.length;
    showCurrentQuestion();
}


function returnQuestionsContainer() {
    return `
    <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" id="progress-bar" progress-bar-striped progress-bar-animated" style="width: 0%"></div>
    </div>

    <p class="amounts"><span id="current-question-nr"></span> / <span id="question-nr"></span></p>
    <h2 id="seen-question"></h2>
    
    <div class="answers">
        <div>
            <button class="answer-btn hover" onclick="answer('answer_1')" id="answer_1">1</button>
            <button class="answer-btn hover" onclick="answer('answer_2')" id="answer_2">2</button>
        </div>
        <div>
            <button class="answer-btn hover" onclick="answer('answer_3')" id="answer_3">3</button>
            <button class="answer-btn hover" onclick="answer('answer_4')" id="answer_4">4</button>
        </div>
    </div>
    <div>
        <button class="next-btn" id="next_question" onclick="nextQuestion()" disabled>NEXT</button>
    </div>
    `;
}

function showCurrentQuestion() {
    if (gameOver()) {
        showEndScreen();
    } else {
        progressBar();
        updateQuestion();
    }
}

function gameOver() {
    return currentQuestion >= questions.length;
}

function showEndScreen() {
    document.getElementById('main').innerHTML = `
            <p class="result"><span id="right-question-nr"></span> / <span id="all-question-nr"></span></p>
            <p id="result-text">You won!</p>
            <img id="end-img" class="win" src="img/win.png">
                <button class="play-again-btn" onclick="playAgain()">PLAY AGAIN</button>
        `;

    document.getElementById('right-question-nr').innerHTML = rightAnswers;
    document.getElementById('all-question-nr').innerHTML = questions.length;

    if (rightAnswers < 3) {
        lostScreen();
    }
}

function lostScreen() {
    document.getElementById('result-text').innerHTML = 'You lost!';
    document.getElementById('end-img').src = "img/error.png";
    document.getElementById('end-img').classList.add('img-position');
}

function progressBar() {
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('current-question-nr').innerHTML = currentQuestion + 1;
    document.getElementById('seen-question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedAnswer = selection.slice(-1);
    let idOfRightAnwer = `answer_${question['right_answer']}`;

    if (rightAnswerSelected(selectedAnswer, question)) {
        showRightAnswer(selection);
    } else {
        showWrongAnswer(selection, idOfRightAnwer);
    }
    disableOtherAnswers();
}

function rightAnswerSelected(selectedAnswer, question){
    return selectedAnswer == question['right_answer'];
}

function showRightAnswer(selection) {
    document.getElementById(selection).classList.add('green-shadow');
    rightAnswers++;
    AUDIO_SUCCESS.play();
}

function showWrongAnswer(selection, idOfRightAnwer) {
    document.getElementById(selection).classList.add('red-shadow');
    document.getElementById(idOfRightAnwer).classList.add('green-shadow');
    AUDIO_FAIL.play();
}

function disableOtherAnswers() {
    document.getElementById('next_question').disabled = false;
    document.getElementById('answer_1').disabled = true;
    document.getElementById('answer_2').disabled = true;
    document.getElementById('answer_3').disabled = true;
    document.getElementById('answer_4').disabled = true;

    document.getElementById('answer_1').classList.remove('hover');
    document.getElementById('answer_2').classList.remove('hover');
    document.getElementById('answer_3').classList.remove('hover');
    document.getElementById('answer_4').classList.remove('hover');
}

function nextQuestion() {
    enableOtherAnswers();
    currentQuestion++;
    document.getElementById('next_question').disabled = true;
    resetAnswerQuestion();
    showCurrentQuestion();
}

function enableOtherAnswers() {
    document.getElementById('answer_1').disabled = false;
    document.getElementById('answer_2').disabled = false;
    document.getElementById('answer_3').disabled = false;
    document.getElementById('answer_4').disabled = false;
    document.getElementById('answer_1').classList.add('hover');
    document.getElementById('answer_2').classList.add('hover');
    document.getElementById('answer_3').classList.add('hover');
    document.getElementById('answer_4').classList.add('hover');
}

function resetAnswerQuestion() {
    document.getElementById('answer_1').classList.remove('red-shadow');
    document.getElementById('answer_1').classList.remove('green-shadow');
    document.getElementById('answer_2').classList.remove('red-shadow');
    document.getElementById('answer_2').classList.remove('green-shadow');
    document.getElementById('answer_3').classList.remove('red-shadow');
    document.getElementById('answer_3').classList.remove('green-shadow');
    document.getElementById('answer_4').classList.remove('red-shadow');
    document.getElementById('answer_4').classList.remove('green-shadow');
}

function playAgain() {
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('main').innerHTML = returnQuestionsContainer();
    document.getElementById('current-question-nr').innerHTML = currentQuestion + 1;
    document.getElementById('question-nr').innerHTML = questions.length;
    showCurrentQuestion();
}