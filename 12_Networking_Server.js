var net = require("net");

var server = net.createServer(function(socket){
	socket.end("Hello from Server !!");
});

server.on("error", function(error){
	if (error.code === "EADDRINUSE"){
		consoler.error("Error : Port is already in use")
	}
});

server.listen(1234, function(){
	console.log("NodeJS Server Started...");
});