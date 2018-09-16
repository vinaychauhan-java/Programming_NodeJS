var fileSystem = require("fs");
var domain = require("domain").create();

var fileName = "E:\\Programming_NodeJS\\data\\tempData.txt";
//var fileName = "E:\\Programming_NodeJS\\data\\sampleData.txt";

domain.run(function(){
	fileSystem.readFile(fileName, function(err, data){
		if (err) {
			throw err;
		}
		console.log("File Data : " + data.toString());
	});
});


//Handling of an exception for asynchronous method calling
domain.on("error", function(error){
	console.log("Exception Caught : "+ error);
});