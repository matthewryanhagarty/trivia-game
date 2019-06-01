$(document).ready(function(){


var counter = 5;
var correctAnswers = 0;
var wrongAnswers = 0;
var intervalId;
var questionArray = {}


function startGame() {
//empties target DIV
//access questions
//appends counter to page
//
};

function pullQuestion() {
//empty out DIV for answers
//empty out DIV for questions
if (questionArray !== 3) {
    $("#questions").html("<p>" + question[questionArray] + "</p>");
    for (var i = 0; i <question[questionArray].a.length; i++){
        var button = $("<button>");
        button.append(question[questionArray].a[i])
        button.addClass("answer-button")
        button.attr("data-name" , question[questionArray].a[i])
        $("#answers").append(button)

        //important to remember all of these IDs for later
    }
}
};

function appendDiv() {

};

function clearInterval() {

}

function decrement() {

}

});