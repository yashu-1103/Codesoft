var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Who proposed the theory that earth revolves around sun?",
    "options": [
    {
    "a": "Galileo Galilei",
    "b": "Nicolaus Copernicus",
    "c": "Neil Arm Strong",
    "d": "Rakesh Sharma"
    }
    ],
    "answer": "Nicolaus Copernicus",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Who gave theory that plants are living beings?",
    "options": [
    {
    "a": "Jagdish Chandra Bose",
    "b": "Birbal Sahni",
    "c": "Prafulla Chandra Roy"
    }
    ],
    "answer": "Jagdish Chandra Bose",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question":"How many Fundamental Rights in constitution?",
    "options": [
    {
    "a": "5",
    "b": "6",
    "c": "7"
    }
    ],
    "answer": "6",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "When Kargil War took place?",
    "options": [
    {
    "a": "1999",
    "b": "2000"
    }
    ],
    "answer": "1999",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "When Jallianwala Bagh Masscare took place?",
    "options": [
    {
    "a": "1916",
    "b": "1917",
    "c": "1918",
    "d": "1919",
    }
    ],
    "answer": "1919",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Which Indian singer/composer won Oscar?",
    "options": [
    {
    "a": "A.R. Rehman",
    "b": "Lata Mangeshkar",
    "c": "Bhupen Hazarika",
    }
    ],
    "answer": "A.R. Rehman",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": " Who was first RBI governer of independent India?",
    "options": [
    {
    "a": "Nanaji Deshmukh",
    "b": "C.D. Deshmukh",
    "c": "Arun Jaitely",
    }
    ],
    "answer": "C.D. Deshmukh",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "Who was first Indian to win nobel prize?",
    "options": [
    {
    "a": "C.V. Raman",
    "b": "Rabindranath Tagore",
    "c": "APJ Abul Kalam",
    "d": "None of above",
    }
    ],
    "answer": "Rabindranath Tagore",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Where wil Summer Olympics 2024 be held?",
    "options": [
    {
    "a": "Tokyo",
    "b": "Paris",
    "c": "New Jersy",
    "d": "All of the above."
    }
    ],
    "answer": "Paris",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "Who was the winner of FIFA WORLD CUP 2022?",
    "options": [
    {
    "a": "France",
    "b": "Morocco",
    "c": "Qatar",
    "d": "Argentina",
    }
    ],
    "answer": "Argentina",
    "score": 0,
    "status": ""
    },
   
   
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;")
    option = option.replace(/>/g, "&gt;")
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
   
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });

