// tcp-server.js

var net = require('net');

var HOST = '192.168.0.202';
var PORT = 6969;

//var I020 = new Array();
var I020 = new Buffer(30);

function initI020() {

    for (var i = 0; i < 30 ; i++) {
        I020[i] = 0x00;
    }

}

function setI020(data) {

    for (var i = 0; i < 30 ; i++) {
        I020[i] = data[i];
    }
    
    console.log('I020---->>' + I020 + '<<');

}


// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler 
// for the 'connection' event
// The sock object the callback function receives UNIQUE for each connection
net.createServer(function(sock) {
    
    // We have a connection - a socket object is assigned to the connection 
    // automatically
    console.log('CONNECTED: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // Add a 'data' event handler to this instance of socket
    sock.on('data', function(data) {
        
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to the socket, the client will receive it 
        // as data from the server
       
        //initI020();
        
        //setI020(data);
        
        //sock.write('You said "' + data + '"');
        
        //setI020();
        
        //sock.write('I020 >>>' + I020 + '<<<');
        
    });
    
    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        console.log('CLOSED: ' + sock.remoteAddress +' '+ sock.remotePort);
    });
    
    
    
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);
