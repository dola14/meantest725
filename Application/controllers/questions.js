var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var Question = mongoose.model('Question');

function QuestionController(){
    this.create = function(req, res){
        console.log("Create method:Question Controller", req.body);
       // res.json(true);
       var question = new Question(req.body);
       question.save((err)=> {
           if(err){
               res.status(401).json({error:"whoops"});
           } else {
                Question.findOne({_id: question._id}) 
                .populate("userId")
                .exec(function(err, question){                 
                    res.json({question: question});
                })              
           }
       })
    } 
    
    this.questionshow = function(req, res){
		       
        Question.find({}, function(err, questions) {
      if(err){
          res.status(500).json({message: "whoops"})
          }
          res.json({question: questions});
    })
    }
    
    
}

module.exports = new QuestionController();