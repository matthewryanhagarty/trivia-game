$(document).ready(function(){


var counter = 5;
var correctAnswers = 0;
var wrongAnswers = 0;
var intervalId;
var questionArray = [
    { q: "This is by far the most popular Sierra Nevada beer and is characterized by its exceptionally full-bodied, complex character and deep amber color",
      a: ["All Day IPA" , "Pale Ale" , "Tumbler Autumn Brown Ale" , "Ruthless Rye IPA"],
    },
    { q: "Sierra Nevada Brewing Co. was started in 1979 by this extremely handsome bearded man?",
    a: ["Jim Koch" , "Dick Yuengling" , "Matthew Ryan Hagarty", "Ken Grossman"],
    },
    { q: "This small northern California town is home to the Sierra Nevada Brewery?",
    a: ["Chico" , "Redding" , "Walnut Creek" , "Orangevale"],
    },
    { q: "This Sierra Nevada IPA is always released just in time for the winter holidays & is best known for its citrus & pine aromas?",
    a: ["Hazy Little Thing" , "Kellerweis" , "Celebration" , "Snow Wit White"],
    },
    { q: "This Sierra Nevada Pilsner is only available during the summer months & is best known for its crisp, golden, malt flavor?",
    a: ["Summerfest" , "Oktoberfest" , "Tropical Torpedo", "Northern Hemisphere Harvest"],
    },
    { q: "This barley-wine style ale from Sierra Nevada has the highest alcohol content amongst a diverse array of Sierra Nevada beers?",
    a: ["Narwhal" , "Hoptimum" , "Hop Bullet" , "Bigfoot"],
    }, 
    { q: "More than 1,400 breweries joined together to simultaneously brew which Sierra Nevada beer in which 100% of the proceeds went to help those affected by the recent Paradise wild fire?",
    a: ["Torpedo" , "Old Chico" , "Resilience", "Otra Vez"],
    },
    { q: "Each year, Sierra Nevada invites a select group of homebrewers to what event in which they compete for a chance to have their own beer distributed nationwide through Sierra Nevada?",
    a: ["Sierra Nevada Beer Camp" , "Sierra Nevada Summer Games" , "Sierra Nevada Distributionfest" , "Sierra Nevada Homebrewfest"],
    },
];

// console.log(questionArray[1].q);

$("#start-button").on("click", startGame());

function run() {
//     cleartInterval(startGame);
//     pullQuestion();
//     startGame = setInterval(decrement , 1000);
};

function decrement() {
    counter--;
    }

function startGame() {
    $("#start-button").hide();
    $("#counter").append(counter);
    pullQuestion();
    decrement();

    

//empties target DIV
//access questions
//appends counter to page
//
};

function pullQuestion() {
//empty out DIV for answers
//empty out DIV for questions
if (questionArray !== 8) {
    $("#questions").html("<p>" + question[questionArray] + "</p>");
    for (var i = 0; i < question[questionArray].a.length; i++){
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


});