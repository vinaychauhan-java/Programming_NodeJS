var events = require("events");
var emitter = new events.EventEmitter();

var userId = "VinayChauhan";
var userPassword = "tempPassword";

// Adding Listener
emitter.on("loginUser",function(userId, userPassword){
	console.log("Welcome "+ userId +", Greetings for the Day !!");
});

// Remove the commented secion to see the varitions of emitter.once which 
// will assist listener to get invoked only once.
/*
emitter.once("loginUser",function(userId, userPassword){
	console.log("Welcome "+ userId +", Greetings for the Day !!");
});
*/

// Trigger the event
emitter.emit("loginUser", userId, userPassword);

var userId = "VipinChauhan";
var userPassword = "tempPassword";
// Trigger the event
emitter.emit("loginUser", userId, userPassword);