// API routes

// User log in route
var db = require("../models");
var passport = require('passport');
var app = app;

//<<<<<<< blake-new

module.exports = function(app) {
//>>>>>>> master
    app.get("/api/user", authenticationMiddleware() ,function(req,res){
        res.send(req.session.passport);
    });

    function authenticationMiddleware () {
        return (req, res, next) => {
            console.log(`req.session.passport.user: ${JSON.stringify(req.session.passport)}`);
  
            if (req.isAuthenticated()) return next();
            res.send("Not Logged In");
      };
  }
};

// API route
module.exports = function(app) {
  
  // get all cars
  app.get('/api/all', function (req,res) {
      db.Item.findAll({}).then(function (result) {
          res.json(result);
      });
    });
//<<<<<<< blake-new
  // get one car by id 
  app.put('/api/update/:id', function (req,res) {
//=======
  });
  // get one car by id 
  app.post('/api/update/:id', function (req,res) {
//>>>>>>> master
        db.Item.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(result) {
            res.json(result);
        });
  });
    // add user car to db 
  app.post('/api/new', function () {
    db.Item.create({
        name: req.body.name,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        color: req.body.color 
  });
   // delete user-added car to db 
  app.delete('/api/delete/id:', function (req,res) {
      db.Item.destory({
        where: {
            id: req.params.id
        }
      }).then(function(result) {
          res.json(result);
      });
  });

        //specific applications of crud 

  
  app.get('index.js/api/examples', function(req,res){
    res.render('home', {title: "index"});
  });

  app.get('/sign', function(req, res){
    res.render('sign', {title: "sign Here"});
  });

  app.get('/profile', authenticationMiddleware() , function(req, res){
    res.render('dashboard');
  });

  app.post('/register', function(req, res){
      // Validation check with Middleware, goes Here
    
      // Middleware Validation
      var errors = req.validationErrors();
      
      // Console log that stuff
  });
  
    
});
//<<<<<<< blake-new
};
//=======
//>>>>>>> master

// deal with this, cause idk how
// if (error){
//     throw error;
// }

// Else
// else {
{
      var name     = req.body.name;
      var email    = req.body.email;
      var password = req.body.password;

      console.log(name);

  }
 passport.serializeUser(function(user_id, done) {
    done(null, user_id);
  });

  passport.deserializeUser(function(user_id, done) {
      done(null,user_id);
  });


// Passport stuff did by JK
module.exports = function(app, passport) {
  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();
  
    // if they aren't redirect them to the home page
    res.redirect('/');
  };

   // Creating a new User and Logging them in
  app.post('/signup', (req, res, next) => {
    console.log('Inside POST /signin callback')
    passport.authenticate('local-signup', (err, user, info) => {
      console.log('Inside passport.authenticate() callback');
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
      console.log(`req.user: ${JSON.stringify(req.user)}`)
      req.login(user, err=> {
        console.log('Inside req.login() callback')
        console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
        console.log(`req.user: ${JSON.stringify(req.user)}`)
        res.status(200).json(req.user.username);
      });
    })(req, res, next);
  })
app.post('/login', (req, res, next)=>{
    console.log('Inside POST /signin callback')
    passport.authenticate('local-signup', (err, user, info) => {
        console.log('Inside passport.authenticate() callback');
        console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
        console.log(`req.user: ${JSON.stringify(req.user)}`)
        req.login(user, (err) => {
            console.log('Inside req.login() callback')
            console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`)
            console.log(`req.user: ${JSON.stringify(req.user)}`)
            res.status(200).json(req.user);
        });
    })(req, res, next);
  });
};
