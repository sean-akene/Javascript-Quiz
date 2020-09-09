// Constructor Function
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
    
}

//Function to check if quiz is done
Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

//Function cross-checking quiz answers
Quiz.prototype.guess = function(answer) {

    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++
    }
    this.questionIndex++;
}