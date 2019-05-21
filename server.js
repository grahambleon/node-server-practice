const http = require('http');

const server = http.createServer((request, response) => {
  response.end('huh');
});

server.listen(3009);
