const http = require('http'), fs = require('fs');
const https = require('https');

var jeff;
fs.readFile('./HTML/index.html', function (err, html) {
  if (err) {
      throw err; 
  }
  jeff = html;
});

var wishlist;
fs.readFile('./HTML/Wish List.html', function (err, html) {
  if (err) {
      throw err; 
  }
  wishlist = html;
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
  else if (method=="GET" && url=="/wishlist"){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(wishlist);
  }
  else if (method=="GET" && url=="/NASA"){
    var imgurl = "";
    // TODO
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<html><img src=\"");
    response.write(imgurl); //populate
    response.write("\"></html>");
  }

  response.end();
}).listen(8080);