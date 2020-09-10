//Initials Prompt 
var name = prompt("What are your initials? (The quiz will begin once you click okay)")

//Function to populate the question
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
      
       showProgress();
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
    element.innerHTML = "Question " + currentQuestionNumber + "of " + quiz.questions.length; 
}

function showScores() {
    var gameOverHtml = "<h1>Results</h1>";
        gameOverHtml +="<h2 id = 'initial'>" + name + "</h2>"
        gameOverHtml += "<h2 id = 'score'> your score is: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml
    
    
}
//Array of Questions and Answer Choices
var questions = [
    new Question("What does the M in HTML Stand for?", ["Markdown","Markset","Markup","Market"], "Markup"),
    new Question ("Which is not a language used for Web Apps?",["Java", "Javascript", "VS Code", "Python"], "VS Code"),
    new Question ("What kind of javascript data is usually enclosed with quotes?", ["String","Function", "Variable", "Array"], "String"),
    new Question ("How do you write an increment in javascrip?t",[">", "+-", "++", "--"],"++"),
    new Question ("How do you write a decrement in Javascript?",[">", "+-", "++", "--"],"--"),
    new Question ("What is the proper way to write syntax for a function?",["Camel Case","Lowercase", "Uppercase", "Cattle Case"], "Camel Case")

];
var c = 30;


//create quiz
var quiz = new Quiz (questions);

//Timer Function
function timer001() {
    
    c = c - 1;
    if (c < 30){
    timerSet.innerHTML = c;
  
    }
    if (c < 1) {
        window.clearInterval(update);
        showScores() 
        alert("Your time is up!")
    }
    
}
update = setInterval(timer001, 1000); 



//display quiz
populate();
