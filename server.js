var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlR = require("./routing/htmlRoutes");
var apiR= require("./routing/apiRoutes");
var friendsO = require("./app/data/friends")

var app = express();
var PORT = 3000;