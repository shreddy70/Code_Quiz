// choose variables
var currentQuestion=0
var quizInstructions = document.getElementById("instructions")
var quizTime = 60
var questions = [
    {
        question:"Which Resort has Utah's longest tram?",
        choices:["Park City","Deer Valley","Snowbird","Alta"],
        answer: "Snowbird"
    },
    {
        question:"Which Resort is most acclaimed for it's terrain park?",
        choices:["Snow Basin","Park City","Snowbird","Brighton"],
        answer:"Park City"
    }, 
    {
        question:"Which Resort is located in Ogden Valley?",
        choices:["Snow Basin","Deer Valley","Solitude","Brighton"],
        answer:"Snow Basin"
    },
    {   question:"Which Resort is located in Big Cottonwood Canyon?",
        choices:["Park City","Powder Mountain","Alta","Solitude"],
        answer:"Solitude"
    },
    {   question:"Which Resort is known for its corduroy grooming?",
        choices:["Brighton","Deer Valley","Powder Mountain","Alta"],
        answer:"Deer Valley"
    }]
// html tags declare variables
// click button to start

// timer begins

document.getElementById("begin-button").addEventListener("click", startTest);
function startTest() {
    setInterval(myTimer, 1000);
    quizInstructions.style.visibility = "hidden";
    startQuestions()

    // hide start quiz
}
function myTimer() {
if (quizTime <=0) {
    quizTime =0
    clearInterval (myTimer)
}
    document.getElementById("time-remaining").innerHTML = quizTime
    quizTime --
}


// 1st question appears w 4 possible answers
function questionFunction(){

    var questionsElement = document.getElementById("questionsEl")
    console.log(questionsElement)
    console.log(questions[currentQuestion].question)
    


    questionsElement.innerHTML=questions[currentQuestion].question
    
// create elements to hold choices
// append element to html
// create for loop going through array of questions and choices
    // inject each question and choices

    for (var i = 0; i < questions.length; i++) {
        console.log(questions[currentQuestion].choices[i])
        }

// current question plus one
// create function that tests if answer is correct or not
// check to see if there's more questions to be answered
// repeat if less
// if no more questions, create function that goes to high scores
}

function startQuestions() {
    console.log(JSON.stringify(questions))
    JSON.stringify(questions)


    var mainEl =document.getElementById("questions")

// create elements to hold questions
    var questionsElement =document.createElement("div")
    questionsElement.setAttribute("id","questionsEl");
    mainEl.appendChild(questionsElement)


    var choicesEl=document.createElement("div");
    choicesEl.setAttribute("id","choicesEl");
    mainEl.appendChild(choicesEl)

    questionFunction ()
}


// user clicks on one answer
// if correct, next question appears
// if incorrect, 5 seconds subtracted from timer, next question appears
// continue loop through 5 questions
// game ends after 60 seconds or after 5 questions completed
// score is displayed
// player option to input initials
// if player clicks top scores button, they're listed