
// 3 Main question attributes 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    
}
//Parameter containing value of a user clicked option
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}
