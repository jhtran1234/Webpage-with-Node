// Returns my HTML file from 2012, 6th grade

const http = require('http'),
    fs = require('fs');

var html;
fs.readFile('./HTML/index.html', function (err, htmlFile) {
    if (err) {
        throw err; 
    }
    html = htmlFile;
});

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  
    response.write(html);  
    response.end();  
}).listen(8080);