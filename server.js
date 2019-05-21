const http = require('http');
const fileSystem = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  const filePath = path.join(__dirname, '/doc.html')

  fileSystem.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    response.writeHeader(200, {'Content-Type': 'text/html'})
    response.end(data);
  })
});

server.listen(3009);
