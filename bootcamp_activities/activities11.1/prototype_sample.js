// Animal Constructor
function Animal(raining, noise){
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function (){
    	if (this.raining===true){
        	console.log(this.noise);
    	}
    }
}

//New Objects
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meeeoww!");

// Assigning Unique properties
dogs.affection = true;

console.log("Cat's are affectionate: " + cats.affection); //Undef
console.log("Dog's are affectionate: " + dogs.affection); // true


// Prototype assigns new properties to Constructor!
Animal.prototype.tail = true;

console.log("Cat's have a tail: " + cats.tail); // true
console.log("Dog's have a tail: " + dogs.tail); // true
