const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  const { method, url } = request;

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(method);
  response.write("\n");

  if (method=="GET" && url=="/hello") {
    response.write("Hello!");
  }
  else if (method=="GET" && url=="/hello/world"){
    response.write("Hello World!");

  }

  response.end();
}).listen(8080);