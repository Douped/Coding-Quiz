var startButton = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
//formatted as Question1[0] answer1[1] answer2[2] answer3[3] answer4[4] Question2[5] etc...
//questions taken from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
//only adding 5 questions because it takes forever to input all the data
var quizData = ["Inside which HTML element do we put the JavaScript?",
    "<script>",
    "<js>",
    "<scripting>",
     "<javascript>",
    "What is the correct JavaScript syntax to change the content of this HTML element? <p id=\"demo\">This is a demonstration.</p>",
    "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
    "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
    "document.getElement(\"p\").innerHTML = \"Hello World!\";",
    "#demo.innerHTML = \"Hello World!\";",
    "Where is the correct place to insert a JavaScript?",
    "The <body> section",
    "Both the <head> section and the <body> section",
    "Either the <head> section or the <body> section",
    "The <head> section",
    "How do you write \"Hello World\" in an alert box?",
    "msgBox(\"Hello World\");",
    "msg(\"Hello World\");",
    "alert(\"Hello World\");",
    "alertBox(\"Hello World\");",
    "How to write an IF statement in JavaScript?",
    "if i == 5 then",
    "if(i == 5)",
    "if i = 5",
    "if i = 5 then"
];
//Start quiz
startButton.addEventListener("click", function () {
    //hide startbox content
    document.querySelector("#startbox").setAttribute("style", "display: none;");
    //start timer
    startTimer();
    //display quiz
    displayQuiz();
});

//timer
function startTimer() {
    var timeInterval = setInterval(function () {
        //decrement the value stored in html directly so we can access it with decrementTimer()
        timerEl.textContent--;
        if (timerEl.textContent == 0) {
            clearInterval(timeInterval);
            console.log("done");
        }
    }, 1000);
}

function decrementTimer() {
    if (timerEl.textContent > 10) {
        timerEl.textContent = timerEl.textContent - 10;
    } else {
        timerEl.textContent = 0;
    }
}

//Quiz display
function displayQuiz() {
    document.querySelector("main").setAttribute("style", "display: block");
    
}

//Stop quiz
function stopQuiz() {
    document.querySelector("main").setAttribute("style", "display: none");
}
