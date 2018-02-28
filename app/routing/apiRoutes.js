app.get("/api/friends", function (req, res) {
    var friends = req.params.friends;

    if (friends) {
        console.log(friends);

        for (var i = 0; i < friends.length; i++) {
            if (friends === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }
        return res.json(false);
    }
    return res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newFriend = req.body;
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newFriend);

    characters.push(newFriend);

    res.json(newFriend);
});