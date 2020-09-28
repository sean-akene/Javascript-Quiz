var startBtn = $("#btnS")
var answerBtn = $("#buttons")
var nxtBtn = $("#btnN")
var ogBtn = $(".btnX")
var questionContainer = $("#questions")
let qCount

answerBtn.hide()
questionContainer.hide()
$(startBtn).click(beginQuiz)
$

function beginQuiz() {
    console.log("started")
    startBtn.hide()
    qCount = 0
    answerBtn.show()
    questionContainer.show()
    popQuestion()
}

function popQuestion() {
    resetState()
    showQ(questions[qCount])
}

function showQ(question) {
    $(questionContainer).text(question.question)
    question.answer.forEach(answer => {
        var button = $("<button/>").attr({ type: 'button', class: 'btn' }).text(answer)

        console.log(answer.word)
        if (answer.correct) {
            button.attr(answer.correct)
        }
        $(button).click(ansChoice)
        button.appendTo(answerBtn)
    })
}
function resetState() {
    // nxtBtn.hide()
}

function ansChoice(e) {

    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBtn.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

    


    const questions = [
        {
            question: "What does the M in HTML Stand for?",
            answer: ["Markdown", "Markset", "Markup", "Market"],
            correct: "Markup",
            chooseAnswer: "Markup",
            response: false,
            time: 0,

        },
        // {

        //     question: "Which is not a language used for Web Apps?",
        //     answer:["Java", "Javascript", "VS Code", "Python"],
        //     rightChoice: "VS Code",
        //     chooseAnswer:"VS Code",
        //     response: false,
        //     time:0 ,

        // },
        // {
        //     question:"What kind of javascript data is usually enclosed with quotes?",
        //     answer:["String","Function", "Variable", "Array"],
        //     rightChoice: "String",
        //     chooseAnswer:"String",
        //     response: false,
        //     time:0 ,
        // },
        // {
        //     question:"How do you write an increment in javascript?",
        //     answer:[">", "+-", "++", "--"],
        //     rightChoice: "++",
        //     chooseAnswer:"++",
        //     response: false,
        //     time:0 ,
        // },
        // {
        //     question:"How do you write a decrement in Javascript?",
        //     answer:[">", "+-", "++", "--"],
        //     rightChoice: "--",
        //     chooseAnswer:"--",
        //     response: false,
        //     time:0 ,
        // },
        // {
        //     question:"What is the proper way to write syntax for a function?",
        //     answer:["Camel Case","Uppercase", "Kangaroocase", "Cattle Case"],
        //     rightChoice: "Camel Case",
        //     chooseAnswer:"Camel Case",
        //     response: false,
        //     time:0 ,
        // },
    ]
