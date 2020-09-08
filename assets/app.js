function populate(){
    if (quiz.isEnded() ){
        showScores();
    }
    else {
        //showing questions
        var element = document.getElementById("question");
       element.innerHTML = quiz.getQuestionIndex().text; 

       //showing choices
       var choices = quiz.getQuestionIndex() .choices;
       for (var i = 0;  i <  choices.length; i++) {
           var element = document.getElementById("choice" + i);
           element.innerHTML = choices[i]
           guess("btn" + i, choices[i] );
       }
      
       showProgress ();
    }


};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length; 
}

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
        gameOverHtml += "<h2 id = 'score'> your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml
    
    
}

var questions = [
    new Question("What does the M in HTML Stand for?", ["Markdown","Markset","Markup","Market"], "Markup"),
    new Question ("Which is not a language used for Web Apps?"["Java", "Javascript", "VS Code", "Python"], "VS Code"),
    new Question ("What kind of javascript data is usually enclosed with quotes?" ["String","Function", "Variable", "Array"], "String"),
    new Question ("How do you write an increment in javascript"[">", "+-", "++", "--"],"++")
];

//create quiz
var quiz = new Quiz (questions);

//display quiz
populate();

