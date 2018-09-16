var fs = require("fs");
var net = require("net");

var fileName =  __dirname + "/data/" + process.argv[2];

if (!fileName){
	throw Error("No target filename specified");
}

var server = net.createServer(function(connection){
	console.log("Connected...");
	connection.write(JSON.stringify({type:"WATCHING",file:fileName}) + "\n");
	
	var watcher = fs.watch(fileName, function(){
		connection.write(JSON.stringify({type:"CHANGED",file:fileName}) + "\n");		
	});
	
	connection.on("close",function(){
		console.log("Disconnected...");
		watcher.close();
	});
});

server.on("error", function(error){
	if (error.code === "EADDRINUSE"){
		consoler.error("Error : Port is already in use")
	}
	if (error.code === "ECONNRESET"){
		consoler.error("Error : Connection Reset")
	}
});

server.listen(1234, function(){
	console.log("NodeJS Server Started & Listerning for Subscribers...");
});