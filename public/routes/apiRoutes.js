// User log in route
var db = require("../models");
var passport = require('passport');


module.exports = function(app, db) {

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

// API route - still needs the rest of crud
module.exports = function(app) {
  

  app.get('/api/all', function (req,res) {
      db.Item.findAll({}).then(function (result) {
          res.json(result);
      });
    });
  };
  
  app.put('/api/update/:id', function (req,res) {
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
  
  app.post('/api/new', function () {
    db.Item.create({
        name: req.body.name,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        color: req.body.color 
  });
  
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
};

// deal with this, cause idk how
if (errors){

}

// Else
else {
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
