$(document).ready(function(){

$(document).on("click", "#start", function(){
    renderQuiz()
})

var dundies = 0;
var demerits = 0;
var unanswered = 0;
// var timeLeft = 20;
// var timerOn = false;

// variables 
// functions
// logic

var officeQuestions = [{
    question: "Who started the fire?",
    choices: ["Ryan", "Michael", "Dwight", "Kevin" ],
    // images:  ["../images/.gif"],
    correctAnswer: 0
    }, {
    question:"Who makes a mean chili?",
    choices: ["Phylis", "Kevin", "Creed", "Dwight"],
    correctAnswer: 1
    
    }, {
    question:"Who has been bitten by a bat, raccoon, and a rat, on seperate occasions?",
    choices: ["Michael", "Toby", "Dwight", "Meredith"],
    correctAnswer: 3
    
    }, {
    question:"What type of farm does Dwight own?",
    choices: ["Bear", "Beet", "BattleStar", "Beattle"],
    correctAnswer: 1
    
    }, {
    question:"What high profile trial was Toby on the jury?",
    choices: ["Scranton Strangler", "Son of Sam", "Zodia Killer aka Ted Cruz", "Manson"],
    correctAnswer: 0
    
    }, {
    question:"What does Michael discribe as having an 'oaky afterbirth'?",
    choices: ["beet juice", "pom juice", "wine", "grape juice"],
    correctAnswer: 2
    
    }, {
    question:"Where did Andy go to college?",
    choices: ["Syracuse", "Dartmouth", "Cornell", "Princeton"],
    correctAnswer: 2
    
    }, {
    question:"Where did Pam and Jim get married?",
    choices: ["Hawaii", "Mexico", "Scranton", "Niagra Falls"],
    correctAnswer: 3
    
    }, {
    question:"What country did Oscar and Michael debate about?",
    choices: ["China", "Mexico", "US", "EU"],
    correctAnswer: 0
    
    }, {
    question:"Who, after Stanleys heart attack was causing everyone to be stressed?",
    choices: ["Dwight", "Michael", "Kelly", "Creed"],
    correctAnswer: 1
    
    }
    
    ];

var index = 0;

function renderQuiz() {
    $("#question").text(officeQuestions[index].question)
    $('#button1').text(officeQuestions[index].choices[0])
    $('#button2').text(officeQuestions[index].choices[1])
    $('#button3').text(officeQuestions[index].choices[2])
    $('#button4').text(officeQuestions[index].choices[3])

};

$(document).on("click", ".answers", function(event){
    // event.preventDefault()
    // console.log("we got clicked");
    // console.log(event.target)

    //this is what looks at the data-choice on each question!
    console.log($(event.target).attr("data-choice"))

    console.log("this should be 0: " + officeQuestions[index].correctAnswer)

    if ($(event.target).attr("data-choice") == officeQuestions[index].correctAnswer){
        console.log("correct!")
        index++
        renderQuiz()
    } else {
    console.log("incorrect")
    index++
    renderQuiz()
    }

    




    // grab the value of whatever you're clicking data-choice="0"
    // this
    // check if the value of what was click equals officeQuestion[i].correctAnswer
    // ++dundies

    
})



});


//stretch goals!!!! icebox
// function nextQuestion() {
//     index++;
//     renderQuiz()
// }

// $('#button1').click(next)