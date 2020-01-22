// POST Route for api/friends will handle incoming survey results
// Also handle compatability logic

var matchableFriends = require("../data/friends");

module.exports = function (app) {
    // GET Route with url /api/friends
    // This will display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(matchableFriends);
    });
};