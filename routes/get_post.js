var express = require("express");
var path = require("path"); 
var db = require("../models");

// Home page
router.get("/index", function(req, res) {
res.render("index");
 });

// Shows posts
 router.get("/post", function(req, res) {
     db.cars.findAll({}).then(function(dbcars) {

// Change idk to callback function name
 var IDK = 
  id: dbcars,
  username: dbcars,
  password: dbcars,
  userid: dbcars,
  email: dbcars
  });

   res.render("post", IDK);
    });



// Stores stuff
router.post("/", function(req, res) {

  var username = 'jkolze'; 
  db.cars.findOne({where: {username: username}}).then(function(dbcars) {
    
   var object = { 
    id: dbcars,
    username: dbcars,
    password: dbcars,
    userid: dbcars,
    email: dbcars
    };
    res.render("userview", object); 
   
  });
});

// Login
router.get("/login", function(req, res) {
  // 
    res.render("login");
   
  });

// Export routes for server.js to use.
module.exports = router;