// tcp-client.js
var net = require('net');

var HOST = '192.168.0.202';
var PORT = 6969;

//var I020 = new Array();
var I020 = new Buffer(30);

function setI020() {

//n.toString(16).toUpperCase()

I020[0]=0x1B;

for (var i = 1; i <= 9 ; i++) {
  I020[i] = i + 33;
}

I020[10]=0x0D;
I020[11]=0x0A;

console.log(I020);

/*
  I020[0] = 0x1B;
  I020[1] = 0x01;
  I020[2] = 0x02;
  I020[3] = 0x03;
  I020[4] = 0x04;
  I020[5] = 0x05;
  I020[6] = 0x06;
  I020[7] = 0x0D;
  I020[8] = 0x0A;
*/


}

var client = new net.Socket();

client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, 
    // the server will receive it as message from the client 
    client.write('I am Thomas Lee!');
    
    setI020();
    
    //client.write('>>'+I020+'<<');
    
    client.write(I020);
    

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {
    
    console.log('DATA: ' + data);
    
    // Close the client socket completely
    //client.destroy();
    
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});

