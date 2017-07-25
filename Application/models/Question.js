var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    question: String,
    questionId: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}   
})

mongoose.model("Question", QuestionSchema);