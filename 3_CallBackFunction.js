// Synchronous Programming
var fileSystem = require("fs");
var fileName = "E:\\Programming_NodeJS\\data\\sampleData.txt";
console.log("Program Started...");
var data = fileSystem.readFileSync(fileName);
console.log("File Data : "+ data.toString());
console.log("Program Ended...");

// Asynchronous Programming
console.log("Program Started Again...");
fileSystem.readFile(fileName,function(err,data){
	if (err) return console.error(err);
	console.log("File Data : "+ data.toString());
});
console.log("Program Finally Ended...");
