
var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/images/logo.jpg', function(request, response) {
  filec = fs.readFileSync('images/logo.jpg');
  response.send(filec);
});

app.get('/', function(request, response) {
  filec = fs.readFileSync('index.html');
  //buf = new Buffer(256);
  //buf.write(filec);
  //response.send(buf.toString('utf8'));
  response.send(filec.toString('utf8'));
  //response.send('Hello World 2!');
});

// -- just adding a comment in development code to play ...

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
