function sayHello(name){
    console.log('Hello ' + name);
}

sayHello('Jeff');

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  //res.write(req);
  res.end();
}).listen(8080);