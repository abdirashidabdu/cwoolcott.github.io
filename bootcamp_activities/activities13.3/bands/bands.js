
var greatBands = {
	rock: "Pink Floyd",
	rap: "BDP",
	polka: "Some Polka Band"
}

var randomBand = function(lastBandHeard){
	var bandArray = ["The Beatles", "PROF", "Lil Yachty", "Waka Flocka Flame", "Frank Sinatra"];
	bandArray.push(lastBandHeard); //Add Last band here
	var key = Math.floor(Math.random() * bandArray.length);
	return bandArray[key];
}

module.exports = function(app) {
  console.log("* Use app for routing *");
}

module.exports.bands = {
	greatBands,
	randomBand
}
