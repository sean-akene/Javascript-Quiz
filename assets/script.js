var startBtn = $("#btnS")
var answerBtn = $("#buttons")
// var nxtBtn = $("#btnN")
var ogBtn = $(".btnX")
var questionContainer = $("#questions")
let qCount = 0;

answerBtn.hide()
questionContainer.hide()
$(startBtn).click(beginQuiz)

function beginQuiz() {
    console.log("started")
    startBtn.hide()
   // qCount = 0
    answerBtn.show()
    questionContainer.show()
    popQuestion()
}

function popQuestion() {
    // qCount++;
    resetState()
    if(qCount >= questions.length) {
        // show User score
        console.log("End of question set");
        // run function to show User score

    } else {
        // if we still have questions, display them
        showQ(questions[qCount])
    }
    
}

function showQ(question) {
    console.log(question);
    $(questionContainer).text(question.question)
 
   question.answer.forEach(answer => {
        var button = $("<button/>").attr({ type: 'button', class: 'btn' }).text(answer)

        console.log(answer.word)
        if (answer.rightChoice) {
            button.attr(answer.rightChoice)
            console.log("correct");
        }
        $(button).click(ansChoice)
        button.appendTo(answerBtn)
    });
}

function resetState() {
   // questionContainer.empty()
    answerBtn.empty()
    questionContainer.empty()
}

// check for correct answer
function ansChoice(e) {

    var selectedButton = e.target.textContent
    console.log(selectedButton);

    // test if User selection is correct answer
    if(selectedButton == questions[qCount].rightChoice) {
        // if correct answer
        console.log("Correct");
        // increment question count
        qCount++;
        // add to User score

        // call next question set
        popQuestion()
    } else {
        console.log("Incorrect");
        // increment question count
        qCount++;
        // decrement TIMER by x amount

        // call next question set
        popQuestion()
    }
    //var correct = selectedButton.dataset.correct
   // setStatusClass(document.body, correct)
    //Array.from(answerBtn.children).forEach(button => {
    ///    setStatusClass(button, button.dataset.correct)
    //})
}

// test if we have any questions left



    const questions = [
        {
            question: "What does the M in HTML Stand for?",
            answer: ["Markdown", "Markset", "Markup", "Market"],
            rightChoice: "Markup",
            chooseAnswer: "Markup",
            response: false,
            time: 0,

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
