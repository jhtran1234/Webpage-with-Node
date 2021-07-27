function herr(){
  const https = require('https');
  
  
  
  https.get('https://api.nasa.gov/planetary/apod?api_key=eVTqFnElSp1SbdFPsOA3us3IgAxEEYuybqnyMUZh', (resp) => {
    var body = '';
    resp.on('data', (res) => {
      body += res;
    });
    
    return resp.on('end', function(){
      var json = JSON.parse(body);
      return json.hdurl;
    });
  }).on("error", (err) => {
    return "Error: " + err.message;
  });

}





console.log(herr());