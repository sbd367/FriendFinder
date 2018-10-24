var getHome = app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

var getS = app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

module.exports ={
    Home: getHome,
    Survey: getS
};