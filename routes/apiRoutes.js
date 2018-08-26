var db = require("../models");
var passport = require('passport');
module.exports = function(app) {
  // Get all examples
  //Gets profile info
  app.get('/profile', function(req,res){
    res.render('profile', {title: "PROFILE PAGE"})
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
