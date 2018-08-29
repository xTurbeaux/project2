// This part registers new people, deals with routes and validates 
// Vars
var db = require("../models");
var passport = require('passport');

// Routes
module.exports = function(app) {

  app.get('/home', function(req,res){
    res.render('home', {title: "home page"})
  });

  app.get('/register', function(req, res){
    res.render('register', {title: "Register Here"});
  });

  app.get('/profile', authenticationMiddleware() , function(req, res){
    res.render('dashboard');
  });
};


