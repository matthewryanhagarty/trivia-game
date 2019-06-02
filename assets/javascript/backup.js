$(document).ready(function(){

    $("#correct-answers").hide();
    $("#wrong-answers").hide();
    $("#start-button").show();
    $("#start-button").on("click", startGame);
    
    var counter = 5;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var intervalID;
    var userAnswer;
    var questionArrayIndex = 0;
    var questionArray = [
        { 
        q: "This is by far the most popular Sierra Nevada beer and is characterized by its exceptionally full-bodied, complex character and deep amber color",
        a: ["All Day IPA" , "Pale Ale" , "Tumbler Autumn Brown Ale" , "Ruthless Rye IPA"],
        c: "Pale Ale",
        },
    
        { 
        q: "Sierra Nevada Brewing Co. was started in 1979 by this extremely handsome bearded man?",
        a: ["Jim Koch" , "Dick Yuengling" , "Matthew Ryan Hagarty", "Ken Grossman"],
        c: "Ken Grossman",
        },
    
        { 
        q: "This small northern California town is home to the Sierra Nevada Brewery?",
        a: ["Chico" , "Redding" , "Walnut Creek" , "Orangevale"],
        c: "Chico",
        },
    
        { 
        q: "This Sierra Nevada IPA is always released just in time for the winter holidays & is best known for its citrus & pine aromas?",
        a: ["Hazy Little Thing" , "Kellerweis" , "Celebration" , "Snow Wit White"],
        c: "Celebration",
        },
    
        { 
        q: "This Sierra Nevada Pilsner is only available during the summer months & is best known for its crisp, golden, malt flavor?",
        a: ["Summerfest" , "Oktoberfest" , "Tropical Torpedo", "Northern Hemisphere Harvest"],
        c: "Summerfest",
        },
    
        { 
        q: "This barley-wine style ale from Sierra Nevada has the highest alcohol content amongst a diverse array of Sierra Nevada beers?",
        a: ["Narwhal" , "Hoptimum" , "Hop Bullet" , "Bigfoot"],
        c: "Bigfoot",
        }, 
    
        { 
        q: "More than 1,400 breweries joined together to simultaneously brew which Sierra Nevada beer in which 100% of the proceeds went to help those affected by the recent Paradise wild fire?",
        a: ["Torpedo" , "Old Chico" , "Resilience", "Otra Vez"],
        c: "Resilience",
        },
    
        { 
        q: "Each year, Sierra Nevada invites a select group of homebrewers to what event in which they compete for a chance to have their own beer distributed nationwide through Sierra Nevada?",
        a: ["Sierra Nevada Beer Camp" , "Sierra Nevada Summer Games" , "Sierra Nevada Distributionfest" , "Sierra Nevada Homebrewfest"],
        c: "Sierra Nevada Beer Camp",
        },
    
    ];
    
    function startGame() {
        $("#start-button").hide();
        $("#correct-answers").show(correctAnswers);
        $("#wrong-answers").show(wrongAnswers);
        resetCounter();
        intervalID = setInterval(decrement, 1000);
        $("#counter").html(counter);
        pullQuestion();

        
    };
    
    
    function decrement() {
        if (counter > 0) {
            counter--;
            $("#counter").html(counter);
        }
        else (counter === 0)
            wrongAnswer();
        }
        
    
    
    //if the correct answer is selected?
    function resetCounter() {
        counter = 10;
        $("#counter").html(counter);
        clearInterval(intervalID);
    }
    
    function pullQuestion() {
        $("#questions").empty();
        $("#answers").empty();
        if (questionArrayIndex <= (questionArray.length - 1)) {
            $("#questions").html("<p>" + questionArray[questionArrayIndex].q + "</p>");
            for (var i = 0; i < questionArray[questionArrayIndex].a.length; i++){
                var button = $("<button>");
                button.append(questionArray[questionArrayIndex].a[i])
                button.addClass("answer-button")
                button.attr("data-name" , questionArray[questionArrayIndex].a[i])
                $("#answers").append(button)
            
        }
    }
        }

    function wrongAnswer() {
        wrongAnswer++;
        clearInterval(intervalID);
    }

    function nextQuestion() {
        questionArrayIndex++;
    }

    // what happens when a user clicks on the correct answer
        $(".answer-button").on("click", ".awnser-button", function() {
            var userAnswer = $(this).data("name");
            if (userAnswer === questionArray[questionArrayIndex].c) {
                console.log("salad");
            }
        } )
    
    // console.log(questionArray[1].q);
    
    // function run() {
    // //     cleartInterval(startGame);
    // //     pullQuestion();
    // //     startGame = setInterval(decrement , 1000);
    // };
        
    
    // //empties target DIV
    // //access questions
    // //appends counter to page
    // //
    // };
    
    
    
    function appendDiv() {
    
    };
    
    function clearInterval() {
    
    };
    
    });