var http = require('http'); // http module is imported

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("Welomce to Node.js Server (JavaScript Server Side Programming)");
});

server.listen(1234, function(){
	console.log("NodeJS Server Started...");
});