// 2. Your `server.js` file should require the basic npm packages we've used in class: `express`, `body-parser` and `path`.


// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var users = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());


// Routes
// =============================================================

require(path.join(__dirname, '/app/routing/apiRoutes'))(app);
require(path.join(__dirname, '/app/routing/htmlRoutes'))(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});