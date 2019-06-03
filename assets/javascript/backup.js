$(document).ready(function(){

    $("#time-remaining").hide();
    $("#correct-text").hide();
    $("#wrong-text").hide();
    $("#start-button").show();
    $("#start-button").on("click", startGame);

    var counter = 15;
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var intervalId;
    var questionArrayIndex = 0;
    var questionArray = [
        { 
        q: "Question 1: This is by far the most popular Sierra Nevada beer and is characterized by its exceptionally full-bodied, complex character and deep amber color?",
        a: ["All Day IPA" , "Pale Ale" , "Tumbler Autumn Brown Ale" , "Ruthless Rye IPA"],
        c: "Pale Ale",
        },
    
        { 
        q: "Question 2: Sierra Nevada Brewing Co. was started in 1979 by this extremely handsome bearded man?",
        a: ["Jim Koch" , "Dick Yuengling" , "Matthew Ryan Hagarty", "Ken Grossman"],
        c: "Ken Grossman",
        },
    
        { 
        q: "Question 3: This small northern California town is home to the Sierra Nevada Brewery?",
        a: ["Chico" , "Redding" , "Walnut Creek" , "Orangevale"],
        c: "Chico",
        },
    
        { 
        q: "Question 4: This Sierra Nevada IPA is always released just in time for the winter holidays & is best known for its citrus & pine aromas?",
        a: ["Hazy Little Thing" , "Kellerweis" , "Celebration" , "Snow Wit White"],
        c: "Celebration",
        },
    
        { 
        q: "Question 5: This Sierra Nevada Pilsner is only available during the summer months & is best known for its crisp, golden, malt flavor?",
        a: ["Summerfest" , "Oktoberfest" , "Tropical Torpedo", "Northern Hemisphere Harvest"],
        c: "Summerfest",
        },
    
        { 
        q: "Question 6: This barley-wine style ale from Sierra Nevada has the highest alcohol content amongst a diverse array of Sierra Nevada beers?",
        a: ["Narwhal" , "Hoptimum" , "Hop Bullet" , "Bigfoot"],
        c: "Bigfoot",
        }, 
    
        { 
        q: "Question 7: More than 1,400 breweries joined together to simultaneously brew which Sierra Nevada beer in which 100% of the proceeds went to help those affected by the recent Paradise wild fire?",
        a: ["Torpedo" , "Old Chico" , "Resilience", "Otra Vez"],
        c: "Resilience",
        },
    
        { 
        q: "Question 8: Each year, Sierra Nevada invites a select group of homebrewers to what event in which they compete for a chance to have their own beer distributed nationwide through Sierra Nevada?",
        a: ["Sierra Nevada Beer Camp" , "Sierra Nevada Summer Games" , "Sierra Nevada Distributionfest" , "Sierra Nevada Homebrewfest"],
        c: "Sierra Nevada Beer Camp",
        },
    
    ];
    

    $("#answers").on("click", ".answer-button", function() {
        var userAnswer = $(this).data("name");
        if (userAnswer === questionArray[questionArrayIndex].c) {
            clearInterval(intervalId);
            rightAnswer();
            // console.log("correct");
        } 
        else
        wrongAnswer();
    })
    
    function startGame() {
        console.log("test");
        $("#correct-text").show();
        $("#wrong-text").show();
        $("#time-remaining").show();
        $("#counter").html(counter);
        $("#wrong-answer").html(wrongAnswers);
        $("#correct-answer").html(correctAnswers);
        $("#start-button").hide();
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        pullQuestion();

    };
    
    
    function decrement() {
        if (counter > 0) {
            counter--;
            $("#counter").html(counter);
        }
        else if (counter === 0) {
            // alert("You're out of time");
            wrongAnswer();
        }
        };
        
    
    function resetCounter() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        counter = 15;
        $("#counter").html(counter);
    }
    
    function pullQuestion() {
        resetCounter();
        $("#questions").empty();
        $("#answers").empty();
        if (questionArrayIndex < questionArray.length) {
            $("#questions").html("<p>" + questionArray[questionArrayIndex].q + "</p>");
            for (var i = 0; i < questionArray[questionArrayIndex].a.length; i++){
                var button = $("<button>");
                button.append(questionArray[questionArrayIndex].a[i])
                button.addClass("answer-button")
                button.attr("data-name" , questionArray[questionArrayIndex].a[i])
                $("#answers").append(button)
            }
        } else {
            clearInterval(intervalId);
            $("#correct-answers").empty();
            $("#wrong-answers").empty();
            $("#correct-text").hide();
            $("#wrong-text").hide();
            $("#time-remaining").hide();
            $("#answers").html("You got " + correctAnswers + " question(s) correct & " + wrongAnswers + " question(s) wrong.");
            // $("#start-button").on("click", startGame);

            questionArrayIndex = 0;
            correctAnswers = 0;
            wrongAnswers = 0;
            $("#start-button").show();
        }
    }


    function wrongAnswer() {
        clearInterval(intervalId);
        $("#questions").empty();
        $("#answers").empty();
        $("#questions").html("Unfortunately, the correct answer was '" + questionArray[questionArrayIndex].c + ".'")
        // resetCounter();
        wrongAnswers++;
        $("#wrong-answers").html(wrongAnswers);
        questionArrayIndex++;
        setTimeout(pullQuestion, 1000);
    }

    function rightAnswer() {
        clearInterval(intervalId);
        $("#questions").empty();
        $("#answers").empty();
        $("#questions").html("You know your stuff! The correct answer was indeed '" + questionArray[questionArrayIndex].c + "!'")

        // resetCounter();
        correctAnswers++;
        console.log(correctAnswers);
        $("#correct-answers").html(correctAnswers);
        questionArrayIndex++;
        setTimeout(pullQuestion, 1000);

    }

    });