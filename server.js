require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var apiRoutes = require('./app/routes/apiRoutes.js');
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//routes based off db and apiRoutes function 

app.use(express.static('app/public'));



// Routes
require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

//static db route/app 'app' route 

apiRoutes(app);
db.sequelize.sync().then(function() {
    app.listen(PORT, function () {
      console.log("Listening on port: " + PORT);
    });
});


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});  
// Hosting stuff
var options = {
  host: 'localhost',
  user: 'root',
  password:'root',
  database: ''
};

module.exports = app;
