// Create web server
// Create a web server that listens for incoming HTTP requests on port 3000.
// For each request, it should respond with a string containing "Hello, world!".
// The server should respond to all requests with a status code of 200.
// The server should respond to all requests with the Content-Type header set to text/plain.
// The server should use the createServer function from the http module to create the server.
// The server should respond to all GET requests.
// The server should respond to all POST requests.
// The server should respond to all PUT requests.
// The server should respond to all DELETE requests.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});