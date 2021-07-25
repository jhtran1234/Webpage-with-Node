const http = require('http'), fs = require('fs');


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

    response.writeHead(200, {'Content-Type': 'text/plain'});
    /*let req = new XMLHttpRequest();
    req.open("GET", "https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh");
    req.send();
    req.onload = () => {
      console.log(req);
      console.log(JSON.parse(request.response));
    }*/
    var hdurl = "herewego\n";
    const userAction = async () => {
      const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh');
      const myJson = await res.json(); //extract JSON from the http response
      response.write(myJson);
    }

    response.write(hdurl);
    response.write("Hello Space!");
  }

  response.end();
}).listen(8080);