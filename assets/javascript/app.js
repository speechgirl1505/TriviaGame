$(document).ready(function () {

    $(document).on("click", "#start", function () {
        renderQuiz();
        timer();
    })

    var dundies = 0;
    var demerits = 0;

    // var countDown = 30;
    // var timerOn = false;

    // variables 
    // functions
    // logic

    var officeQuestions = [{
        question: "Who started the fire?",
        choices: ["Ryan", "Michael", "Dwight", "Kevin"],
        // images:  ["../images/.gif"],
        correctAnswer: 0
    }, {
        question: "Who makes a mean chili?",
        choices: ["Phylis", "Kevin", "Creed", "Dwight"],
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
        question: "After Stanley has a heart attack, who was causing everyone to be stressed?",
        choices: ["Dwight", "Michael", "Kelly", "Creed"],
        correctAnswer: 1

    }

    ];
    var counter = 30;
    var index = 0;

    // function init(){
    //     $("#id *").hide();
    //     $("#start").show();
    // };

    // init();

    function renderQuiz() {
        $("#question").text(officeQuestions[index].question)
        $('#button1').text(officeQuestions[index].choices[0])
        $('#button2').text(officeQuestions[index].choices[1])
        $('#button3').text(officeQuestions[index].choices[2])
        $('#button4').text(officeQuestions[index].choices[3])




    };

    function timer() {

        (function () {
            var counter = 200;

            setInterval(function () {
                counter--;
                if (counter >= 0) {
                    var span = document.getElementById("count");
                    span.innerText = counter;

                }
                // Display 'counter' wherever you want to display it.
                if (counter === 0) {
                    //    alert('this is where it happens');
                    clearInterval(counter);
                }

            }, 1000);

        })();

    }

    $(document).on("click", ".answers", function (event) {
        // event.preventDefault()
        // console.log("we got clicked");
        // console.log(event.target)

        //this is what looks at the data-choice on each question!
        console.log($(event.target).attr("data-choice"))

        console.log("this should be 0: " + officeQuestions[index].correctAnswer)

        if ($(event.target).attr("data-choice") == officeQuestions[index].correctAnswer) {
            console.log("correct!");
            index++;
            alert("You earned a Dundie");
            dundies++;
            $("#wins").html(dundies);
            renderQuiz();
        } else {
            console.log("incorrect");
            index++;
            demerits++;
            $("#losses").html(demerits);
            alert("Alert you have received one demerit, you dont want three of those. Three demerits and you'll receive a citation. Five citations and youre looking at a violation. Four of those and youll receive a verbal warning. Keep it up and you're looking at a written warning. Two of those, that will land you in a world of hurt, in the form of a disciplinary review. YOU HAVE RECEIVED A FULL DISADULATION")
            renderQuiz();
        }
        // grab the value of whatever you're clicking data-choice="0"
        // this
        // check if the value of what was click equals officeQuestion[i].correctAnswer
        // ++dundies


    })
    // first create countdown timer as var give it function 
    // then put into renderquiz and then 

});
//stretch goals!!!! icebox
// function nextQuestion() {
//     index++;
//     renderQuiz()
// }
// $('#button1').click(next)
