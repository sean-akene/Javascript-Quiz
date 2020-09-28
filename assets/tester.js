var intro = $("#btnS");
var qGrid = $("#quiz");
var time = 0;
var score = 0;
var cQuest = 0; 
var questions = [
    {
        question: "What does the M in HTML Stand for?",
        answer:["Markdown", "Markset","Markup","Market"],
        rightChoice: "Markup",
        chooseAnswer:"Markup",
        response: false,
        time:0,
    },
    {

        question: "Which is not a language used for Web Apps?",
        answer:["Java", "Javascript", "VS Code", "Python"],
        rightChoice: "VS Code",
        chooseAnswer:"VS Code",
        response: false,
        time:0 ,

    },
    {
        question:"What kind of javascript data is usually enclosed with quotes?",
        answer:["String","Function", "Variable", "Array"],
        rightChoice: "String",
        chooseAnswer:"String",
        response: false,
        time:0 ,
    },
    {
        question:"How do you write an increment in javascript?",
        answer:[">", "+-", "++", "--"],
        rightChoice: "++",
        chooseAnswer:"++",
        response: false,
        time:0 ,
    },
    {
        question:"How do you write a decrement in Javascript?",
        answer:[">", "+-", "++", "--"],
        rightChoice: "--",
        chooseAnswer:"--",
        response: false,
        time:0 ,
    },
    {
        question:"What is the proper way to write syntax for a function?",
        answer:["Camel Case","Uppercase", "Kangaroocase", "Cattle Case"],
        rightChoice: "Camel Case",
        chooseAnswer:"Camel Case",
        response: false,
        time:0 ,
    },
]

function popQuestion(){
    $(qGrid).html("");
    var questionEL = $("#questions")
    $(questionEL).html(question[cQuest]).question;
    
}


// {word: "Markup",correct: true},
//         {word:"Market",correct: false},
//         {word:"Markset",correct: false},
//         {word:"Markdown",correct: false}


function ansChoice(selectedButton) {
    if (questions[currentQuestion].correct === selectedButton) {
        console.log("working1");
        questions[currentQuestion].response = true;
        $("#alertSet").text("Correct")
    } else {
        console.log("working2");
        penaltyTime();
        questions[currentQuestion].response = false;
        $("#alertSet").text("False");
        setTimeout(function () {
            $("#alertSet").innerHTML = "";
        }, 1000);
    }
}


function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;

    }
}
button.click(nextQuestion)