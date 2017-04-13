"use strict";
var http = require("http");
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('My first Node app hosted in Amazon Web Services\n');
});
var port = 8000;
server.listen(port);
console.log('Listening on http://localhost:' + port);
