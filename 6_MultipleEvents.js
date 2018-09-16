var events = require("events");
var emitter = new events.EventEmitter();

emitter.on("logEvent",function(){
	console.log("Logging Event - 1");
});

emitter.on("logEvent",function(){
	console.log("Logging Event - 2");
});

emitter.emit("logEvent");