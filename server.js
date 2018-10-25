var express = require("express");
var bodyParser = require("body-parser");


var app = express();
var port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//API routes
var apiR = require("./routing/apiRoutes")
apiR(app);

//HTML routes
var htmlR = require("./routing/htmlRoutes")
htmlR(app);


app.listen(port, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });