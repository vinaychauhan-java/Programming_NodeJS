// Global variables from Node for File and Directory
console.log("File Name : "+ __filename);
console.log("Directory Name : "+ __dirname);

console.log("************************************************************");

console.log("Current Working Directory : "+ process.cwd());
try{
	process.chdir("/");
}
catch(exception){
	console.error("Exception Caught"+exception);
}
console.log("Current Working Directory : "+ process.cwd());

console.log("************************************************************");

var path = require("path");
var directories = ["Programming_NodeJS","data"];
var directory = directories.join(path.sep);
console.log("Directory Path : "+ directory);

console.log("************************************************************");

var fileName = "/Programming_NodeJS/10_FileStreamOperations.js";
console.log("File Extension Name : " +path.extname(fileName));
console.log("File Name : " +path.basename(fileName));

console.log("************************************************************");


