var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

require("./bandInfo")(app);
bandNames = require("./bandInfo")

var lastBandHeard = "Vampire Weekend";

console.log("------------------");
console.log(bandNames.bands.greatBands.rap);
console.log("------------------");
console.log(bandNames.bands.randomBand(lastBandHeard));
console.log("------------------");
