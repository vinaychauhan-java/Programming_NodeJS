var fileSystem = require("fs");

var fileName = "E:\\Programming_NodeJS\\data\\tempData.txt";
//var fileName = "E:\\Programming_NodeJS\\data\\sampleData.txt";

fileSystem.readFile(fileName, function(err, data){
	if (err) {
		throw err;
	}
	console.log("File Data : " + data.toString());
});

//Handling of an exception for asynchronous method calling
process.on("uncaughtException", function(error){
	console.log("Exception Caught : "+ error);
});