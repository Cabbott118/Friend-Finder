var express = require("express");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 8080;

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
    console.log("---HOME---");
    console.log("http://localhost:" + PORT);

    console.log("---SURVEY---");
    console.log("http://localhost:" + PORT + "/survey");

    console.log("---FRIENDS API---");
    console.log("http://localhost:" + PORT + "/api/friends");
});