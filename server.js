const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3009;

const server = http.createServer((request, response) => {
  const filePath = path.join(__dirname, '/doc.html')

  //.readFile(path, encoding, callback) if encoding is left out a raw buffer is returned
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    response.writeHeader(200, {'Content-Type': 'text/html'})
    response.end(data);
  })
});

console.log(`Server running on ${port}`);
server.listen(port);
