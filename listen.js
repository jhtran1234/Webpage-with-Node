const http = require('http'), fs = require('fs');
const https = require('https');

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
  else if (method=="GET" && url=="/NASA"){



    /*const fetch = require('node-fetch');
    var hdurl;
    fetch('https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh')
        .then(res => res.json())
        .then(json => console.log(text))

    */



    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<html><img src=\"");
    response.write('https://apod.nasa.gov/apod/image/2107/neptunetriton_voyager_960.jpg'); //populate
    response.write("\"></html>");
  }

  response.end();
}).listen(8080);