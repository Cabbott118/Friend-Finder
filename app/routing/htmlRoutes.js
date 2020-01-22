var path = require("path");

module.exports = function(app) {

    //Default Route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // GET Route to /survey
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
    
    // Catch-All Route that directs to home.html
    // Actual Routes to be used need to be declared before Catch-All
    app.get('/*', function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};