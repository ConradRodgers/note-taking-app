var express = require("express");
var apiRoutes = require("./routes/apiRoutes.js");
var htmlRoutes = require("./routes/htmlRoutes.js");

var app = express();
var PORT = 3000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlRoutes);
//app.use("/api", apiRoutes);
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
