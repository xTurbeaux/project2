var db = require("../models");
// Defaults to a random truck, comment by JFK
var theURL = ' http://api.marketcheck.com/search?api_key=xxxxx&&year=2014make=ford&model=F-150&body_type=pickup&body_subtype=crew cab&latitude=34.05&longitude=-118.24&radius=100&car_type=used&start=0&rows=10';
  if (category) {
    theURL += '&category=' + categoryMap[category]
  }





module.exports = function(app) {
  app.get("/api/cars", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    db.Car.findAll({
      where: query,
      include: [db.User]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.get("/api/cars/:id", function(req, res) {
    db.Car.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.post("/api/cars", function(req, res) {
    db.Car.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.delete("/api/cars/:id", function(req, res) {
    db.Car.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  app.put("/api/cars", function(req, res) {
    db.Car.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
};
