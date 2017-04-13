import * as http from 'http';

const server = http.createServer((request, response)=> {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('My first Node app hosted in Amazon Web Services\n');

});

const port = 8000;

server.listen(port);
console.log('Listening on http://localhost:' + port);
