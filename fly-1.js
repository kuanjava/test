
var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var seq = 0;

var flying = true;
var emergency = false;

var a = (flying << 9); console.log(a);////if fly = 1, then 512

var b = (emergency << 8); console.log(b);///if emergency = 1, then 256

var c = (flying << 9) | (emergency << 8); console.log(c);


setInterval(function() {
	var commands = '';

	var ref = (flying << 9) | (emergency << 8);
	
	commands += 'AT*REF=' + seq++ + ',' + ref + '\r';
	commands += 'AT*PCMD=' + seq++ + ',0,0,0,0,0\r';
	
	console.log(JSON.stringify(commands));
	
	var buffer = new Buffer(commands);
	
	socket.send(buffer, 0, buffer.length, 5556, '192.168.0.127');
	//socket.send(buffer, 0, buffer.length, 5060, '192.168.0.127');
	
}, 30);