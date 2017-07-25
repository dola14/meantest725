var path = require('path')
var Users = require('../controllers/users.js');
var Questions = require('../controllers/questions.js');

module.exports = function(app){
    app.post('/login', function(req, res){
        console.log(req.body, "this is the login path from routes.js");
      // res.json({status: true})
      Users.login(req, res);
    })
        app.get('/users/:id', function(req , res){
        console.log(req.params.id, "This is the users find route");
        Users.show(req, res);
    })
      app.get('/users', function(req , res){
        console.log(req.params.id, "This is the users find route");
       // Questions.show(req, res);
         Questions.questionshow(req, res);
    })

       app.post("/questions", function(req, res){
        console.log(req.body, "this is message create route");
        Questions.create(req,res);
        })
    app.get("/questions", function(req, res){
        console.log("this is message find");
       // Questions.index(req, res);
       Questions.questionshow(req, res);
    })
    app.all("*", (req,res,next) => {
        res.sendfile(path.resolve("./public/dist/index.html"))
    })
}


// // You can use restful or semi restful routes for your application
// // Remember that we're dealing with angular which will take care 
// // of rendering static pages for us so some of these routes might 
// // be unnecessary

// // The edit and new route might not be necessary. You will only need 
// // these routes if the data you are retrieving is different than the 
// // data you retrieve for show, angular will take care of displaying 
// // static pages like new in the front end

// // FUll RESTFUL
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // patch/put "/users/:id" => UsersController update => update a user
// // delete "/users/:id" => UsersController destroy => destroy a user

// // SEMI RESTFUL -- look at destroy and update methods
// // get "/users" => UsersController index => grab all users
// // get "/users/:id" => UsersController show => grab one user
// // get "/users/:id/edit" => UsersController edit => show edit user page
// // get "/users/new" => UsersController new => show new user page
// // post "/users" => UsersController create => create a user
// // post "/users/:id/update" => UsersController update => update a user
// // post "/users/:id/destroy" => UsersController destroy => destroy a user
