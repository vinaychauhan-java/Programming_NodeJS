var net = require("net");
var client = net.connect(
	{port:1234, host:"localhost"},
	function(){
		console.log("Connection Established...");
	});
	
client.on("data",function(data){
	var message = JSON.parse(data);
	if (message.type === "WATCHING"){
		console.log("Watching Event : " + message.file);
	}
	else if (message.type === "CHANGED"){
		console.log("Changed Event  : " + message.file);
	}
	else{
		console.log("Unrecognized Message Type : " + message.type );
	}
});

/*
Commands to Test
- First Command Prompt:-
	E:\Programming_NodeJS>node 13_AdvanceNetworking_Server.js sampleData.txt
- Second Command Prompt:-
	E:\Programming_NodeJS>node 13_AdvanceNetworking_Client.js
- Third Command Prompt:-
	E:\Programming_NodeJS\data>echo "vinay" >> sampleData.txt
*/