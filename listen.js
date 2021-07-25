const http = require('http'),
    fs = require('fs');


var jeff;
fs.readFile('./HTML/index.html', function (err, html) {
    if (err) {
        throw err; 
    }
    jeff = html;
});

http.createServer((request, response) => {
    const { method, url } = request;

    if (method=="GET" && url=="/hello") {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(jeff);
    }
    else if (method=="GET" && url=="/jeff") {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(jeff);
    }
    else if (method=="GET" && url=="/hello/world"){
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.write("Hello World!");
    }

    response.end();
}).listen(8080);