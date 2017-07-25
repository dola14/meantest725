var mongoose = require('mongoose');
// Importing User model, using mongoose getter method -- look at model page for more info
var User = mongoose.model('User');

function UsersController(){
	this.login = function(req, res){
		console.log(req.body, "this is User Controller");
		//res.json({status: true})
		User.findOne({username: req.body.username}, function(err, user){
			if(err){
				res.status(500).json({message: "WHOOPS"});
			} else {
					var user = new User(req.body);
					user.save(function(err){
						if(err){
							console.log("error saving user", err);
							res.status(501).json({message: "Whoops"})
						} else {
							res.json({user: user, message: "created"})
						}
					})
			}
		})
	}
	this.show = function(req, res){
		User.findOne({_id: req.params.id}, function(err, user){
			if(err){
				res.status(500).json({message: "whoops"})
			} else {
				res.json({user: user});
			}
		})
	}

}

module.exports = new UsersController();