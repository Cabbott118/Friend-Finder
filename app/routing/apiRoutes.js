// POST Route for api/friends will handle incoming survey results
// Also handle compatability logic

var matchableFriends = require("../data/friends");

module.exports = function (app) {
    // GET Route with url /api/friends
    // This will display a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(matchableFriends);
    });

    app.post("/api/friends", function (req, res) {
        // console.log(req.body.scores);
        // var user = req.body;

        // for (i = 0; i < user.scores.length; i++) {
        //     user.scores[i] = parseInt(user.scores[i]);
        // }

        // var bestieIndex = 0;
        // var minDiff = 40;

        // for (i = 0; i < matchableFriends.length; i++) {
        //     var totalDiff = 0;
        //     for (j = 0; j < matchableFriends[i].scores.length; j++) {
        //         var scoreDiff = Math.abs(user.scores[j] - matchableFriends[i].scores[j]);
        //         totalDiff += scoreDiff;
        //     }

        //     if (totalDiff < minDiff) {
        //         bestieIndex = i;
        //         minDiff = totalDiff;
        //     }
        // }

        // matchableFriends.push(user);

        // res.json(matchableFriends[bestieIndex]);




        var newFriend = req.body;
        var matchObj = [];
        var currentTally = 0;
        var bestMatch = 9999;

        for (var friend = 0; friend < matchableFriends.length; friend++) {

            for (var index = 0; index < newFriend.scores.length; index++) {
                if (parseInt(matchableFriends[friend].scores[index]) >= parseInt(newFriend.scores[index])) {
                    currentTally = currentTally + (parseInt(matchableFriends[friend].scores[index]) - parseInt(newFriend.scores[index]));
                } else {
                    currentTally = currentTally + (parseInt(newFriend.scores[index]) - parseInt(matchableFriends[friend].scores[index]));
                };
            };

            if (currentTally < bestMatch) {
                matchObj = [];
                bestMatch = currentTally;
                matchObj.push(matchableFriends[friend]);
            } else if (currentTally == bestMatch) {
                matchObj.push(matchableFriends[friend]);
            };

            currentTally = 0;
        };

        matchableFriends.push(newFriend);
        res.json(matchObj);
    });
};