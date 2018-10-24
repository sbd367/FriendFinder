var getA = app.get("/api/friends", function(req, res){
    return res.json(friends)
})

var postI = app.post("/api/friends", function(req, res){
    var newPerson = req.body;

    friends.push(newPerson);

    res.json(newPerson);
})
module.exports = {
    getit: getA,
    postIt: postI
}