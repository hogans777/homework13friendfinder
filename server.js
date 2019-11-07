var express = require("express");
var bodyParser - require("body-parser");
var path =require("path");

var app = express();
var port = process.envPort || 3000;

app.use(bodyParser.json());
app.use(bodyPaser.urlencoded({extendted: true }));
app.use(bodyParser.text());
app use(bodyParser.json({ type: "application/vnd.apijson"}));

app.use(express.static("app/public"));
 
require(".//app/ruting/api-routes.js")(app);
require("./app/routing/html.routes.js")(app);

app.listen(port, () => console.log("sick of this shit", port));
