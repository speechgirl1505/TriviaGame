$(document).ready(function () {

    $(document).on("click", "#start", function () {
        renderQuiz();
        timer();
    });


    $('#start').click(function () {
        $(this).hide();
    });

    $('.questions-container').click(function () {
        $(this).hide();
    });


    var dundies = 0;
    var demerits = 0;

    var officeQuestions = [{
        question: "Who started the fire?",
        choices: ["Ryan", "Michael", "Jim", "Kevin"],
        correctAnswer: 0
    }, {
        question: "Who makes a mean chili?",
        choices: ["Phyllis", "Kevin", "Creed", "Dwight"],
        correctAnswer: 1

    }, {
        question: "Who has been bitten by a bat, raccoon, and a rat, on seperate occasions?",
        choices: ["Michael", "Toby", "Dwight", "Meredith"],
        correctAnswer: 3

    }, {
        question: "What type of farm does Dwight own?",
        choices: ["Bear", "Beet", "BattleStar", "Beattle"],
        correctAnswer: 1

    }, {
        question: "What high profile trial was Toby on the jury?",
        choices: ["Scranton Strangler", "Son of Sam", "Zodiac Killer aka Ted Cruz", "Manson"],
        correctAnswer: 0

    }, {
        question: "What does Michael describe as having an 'oaky afterbirth'?",
        choices: ["beet juice", "pom juice", "wine", "grape juice"],
        correctAnswer: 2

    }, {
        question: "Where did Andy go to college?",
        choices: ["Syracuse", "Dartmouth", "Cornell", "Princeton"],
        correctAnswer: 2

    }, {
        question: "Where did Pam and Jim get married?",
        choices: ["Hawaii", "Mexico", "Scranton", "Niagra Falls"],
        correctAnswer: 3

    }, {
        question: "What country did Oscar and Michael debate about?",
        choices: ["China", "Mexico", "US", "EU"],
        correctAnswer: 0

    }, {
        question: "Which historical figure made a suprise apperance at Phyllis' wedding shower?",
        choices: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
        correctAnswer: 2

    }];

    var index = 0;
    function renderQuiz() {

        $("#question").text(officeQuestions[index].question)
        $('#button1').text(officeQuestions[index].choices[0])
        $('#button2').text(officeQuestions[index].choices[1])
        $('#button3').text(officeQuestions[index].choices[2])
        $('#button4').text(officeQuestions[index].choices[3])

    };

    function timer() {

        (function () {
            var counter = 90;

            setInterval(function () {
                counter--;
                if (counter >= 0) {
                    var span = document.getElementById("count");
                    span.innerText = counter;
                }

                if (counter === 0) {
                    $("#gifs").html('<img class="picture" src="assets/images/noo.gif">');
                    $(".question-container, .answer-container").toggle();
                    clearInterval(counter);
                }

            }, 1000);

        })();
    };

    var imgIndex = 0;
    var imgIndex2 = 0;
    var hasAlertedDundies = false;
    var hasAlertedDemerits = false;
    
    
    $(document).on("click", ".answers", function (event) {
        //  event.preventDefault()
        // console.log($(event.target).attr("data-choice"))

        // console.log("this should be 0: " + officeQuestions[index].correctAnswer)

        var dundieGif = ["yeah.gif", "fingers.gif", "roof.gif", "champagne.gif", "dance.webp", "wink.webp", "pew.gif", "true.webp", "jump.webp"];
        var demeritGif = ["nope.webp", "cut.webp", "dontlikethat.gif", "rubeyes.gif", "slightno.gif", "false.webp", "ryan.gif", "stare.gif", "comeon.gif", "teeth.gif"];
        function alertDundies() {
            if (!hasAlertedDundies) {
                swal("You earned a Dundie");
            }
            hasAlertedDundies = true;
        }
        function alertDemerits() {
            if (!hasAlertedDemerits) {
                swal("Alert you have received one demerit, you dont want three of those... Three demerits and you'll receive a citation. Five citations and youre looking at a violation... Four of those and youll receive a verbal warning... Keep it up and you're looking at a written warning... Two of those, that will land you in a world of hurt, in the form of a disciplinary review.... YOU HAVE RECEIVED A FULL DISADULATION")
            }
            hasAlertedDemerits = true;
        }
        if ($(event.target).attr("data-choice") == officeQuestions[index].correctAnswer) {
            index++;
            // swal("You earned a Dundie");
            alertDundies();
            dundies++;
            $("#gifs").html('<img class="picture" src="assets/images/' + dundieGif[imgIndex] + '">');
            imgIndex++;
            (console.log(imgIndex));
            $("#wins").html(dundies);

        } else {
            index++;
            alertDemerits();
            demerits++;
            $("#gifs").html('<img class="picture" src="assets/images/' + demeritGif[imgIndex2] + '">');
            imgIndex2++;
            $("#losses").html(demerits);
            
        }
        if ((demerits + dundies) == officeQuestions.length) {
            $(".question-container, .answer-container, #timeElm").toggle();
            $("#gifs").html('<img class="picture" src="assets/images/nailedit.gif">');
            swal("ALL DONE! HOPE YOU WEREN'T AN IGNORANT SLUT! XOXO-Gossip girl--Michael Scott");
        } else {
            renderQuiz();
        };

        //need to stop timer when last question has been answered 
        //make alert stop after alerting once for each. 

    })




});
