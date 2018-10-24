var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

var friends = [{
    name: "Spencer",
    photo: "url_here",
    scores:[
        5,
        3,
        5,
        1,
        5,
        3,
        5,
        1,
        5,
        5
    ]
}];

app.get("/api/friends", function(req, res){
    return res.json(friends)
})

app.post("/api/friends", function(req, res){
    var newPerson = req.body;

    friends.push(newPerson);

    res.json(newPerson);
})
app.listen(PORT, function() {
    console.log("app listening"+ PORT);
})