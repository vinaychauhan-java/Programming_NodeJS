var events = require("events");
var emitter = new events.EventEmitter();

function myHandler(){
	console.log("Logging Event - 1");
};

emitter.on("logEvent", myHandler);
emitter.removeListener("logEvent", myHandler);
emitter.emit("logEvent");