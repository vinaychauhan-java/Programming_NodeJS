// Asynchronous Programming using CallBack function to avoid Pyramid Doom problems
var fileSystem = require("fs");
var fileName = "E:\\Programming_NodeJS\\data\\sampleData.txt";

console.log("Program Started...");

function readFileData(err, data){
	if (err) throw err;
	console.log(data);
}

function status(err, stat){
	if (err) throw err;
	if(stat.isFile()){
		fileSystem.readFile(fileName, "utf8", readFileData);
	}
}

function fileExists(exists){
	if (exists) fileSystem.stat(fileName, status);
}

fileSystem.exists(fileName, fileExists);
console.log("Program Ended...");
