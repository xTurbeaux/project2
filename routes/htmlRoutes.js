var db = require("../models");
var path = require("path");


function LoggedIn(req, res, next) {

	// if user is returning, redirect to home pagge
	if (req.isAuthenticated()){
    console.log("isAuthenticated: Passed");
		return next();
  }
	// if they aren't redirect them to the home page
	res.redirect('/');
}

module.exports = function(app) {
  // Load home
  app.get("/", function(req, res) {
    console.log(req.user);
    res.sendFile(path.join(__dirname, `../public/index.html`), err=>{
      if(err){
        console.log(err);
        throw new Error(`Error sending index.html page: ${err}`);
      }
    });
  });
  // Log in redirect
  app.get("/login", (req, res)=>{
    console.log(req.user);
    res.sendFile(path.join(__dirname, `../public/login.html`), err=>{
      if(err){
        throw new Error(`Error sending login.html page: ${err}`);
      }
    });
  });
// Sign uo
  app.get("/signup", function(req, res) {
    console.log(req.user);
    res.sendFile(path.join(__dirname, `../public/signup.html`), err=>{
      if(err){
        console.log(err);
        throw new Error(`Error sending signup.html page: ${err}`);
      }
    });
  });
};