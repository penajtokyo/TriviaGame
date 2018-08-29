// Sets up Start Button, and hides the questions
$(document).ready(function (){

$("#startGame").show();
$(".button").show();
$("#triviaGameHeader").hide();
$("#triviaGameTimer").hide();
$(".triviaGame").hide();
$(".form-check-input").hide();
$(".form-check-label").hide();
$(".endCard").hide();
console.log("working")

// Click the Button and show the timer and the questions
$(document).on("click", function(){
$("#startGame").hide();
$("#button").hide();
$("#triviaGameHeader").show();
$("#triviaGameTimer").show();
$(".triviaGame").show();
$(".form-check-input").show();
$(".form-check-label").show();
$(".endCard").hide();
console.log("Trivia can be seen")

// 30 second timer to answer the questions
var timeLeft = 30;
var elem = document.getElementById('triviaGameTimer');
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) { 
        clearTimeout(timerId);
        statePage();
    } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    } 
};

// the States page at the end of the Game
function statePage(){
    var correctAnswer = 0;
    var incorrectAnswer= 0;

    $("#triviaGameHeader").hide();
    $("#triviaGameTimer").hide();
    $(".triviaGame").hide();
    $(".form-check-input").hide();
    $(".form-check-label").hide();
    $(".endCard").show();

}


});
});

