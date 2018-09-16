var fileStream = require("fs");
var fileNameWithPath = __dirname + "/data/anotherSampleData.txt";
var fileDataSet = "Good Evening, Vipin & Vinay Chauhan";

fileStream.writeFile(fileNameWithPath, fileDataSet, function(error){
	if (error){
		console.error("Error Occured !!");
	}
	else{
		console.log("File Written : " + fileNameWithPath);
	}
});


fileStream.readFile(fileNameWithPath, function(error, data){
	if (error) {
		console.error("Error Occured !!");
	}
	else{
		console.log("File Content : "+ data.toString());
	}
});


var directoryPath = __dirname + "/data/";
fileStream.readdir(directoryPath, function(error, files){
	console.log("FileNames :- ");
	files.forEach(function(fileName){
		console.log("   " + fileName)
	});
});

