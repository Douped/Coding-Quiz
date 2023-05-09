var startButton = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
//Start quiz
startButton.addEventListener("click", function () {
    //hide startbox content
    document.querySelector("#startbox").setAttribute("style", "display: none;");
    //start timer
    startTimer();
    //display quiz

});


//timer
function startTimer() {
    var timeInterval = setInterval(function () {
        timerEl.textContent--;
        if (timerEl.textContent == 0) {
            clearInterval(timeInterval);
            console.log("done");
        }
    }, 1000);
}

function decrementTimer(){
    if(timerEl.textContent > 10){
        timerEl.textContent = timerEl.textContent - 10;
    }else{
        timerEl.textContent = 0;
    }
}