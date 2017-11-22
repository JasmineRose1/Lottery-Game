let http = require('http');// give us the ability handle requests serve up responses and to build that server
let fs = require('fs'); // allows us to read file
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }).listen(8080);
