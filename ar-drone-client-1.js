var arDrone = require('ar-drone');
var client = arDrone.createClient({ip: '192.168.0.127'});

client.createRepl();
