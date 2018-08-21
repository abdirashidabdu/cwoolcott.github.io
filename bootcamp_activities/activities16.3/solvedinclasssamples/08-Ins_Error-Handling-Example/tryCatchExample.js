// Get filename from user
var filename = process.argv[2];
var readFile = require("./helpers").readFile;

// readFile throws due to an unknown error with the filesystem.
try {
    readFile(filename);
}
catch(err){
   console.log("Can't Find the file!");
   // throw new Error("Can't Find the file!");
}

//console.log("The rest of your program didn't work.");
