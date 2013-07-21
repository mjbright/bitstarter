
var express = require('express');
var fs = require('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  filec = fs.readFileSync('index.html');
  //buf = new Buffer(256);
  //buf.write(filec);
  //response.send(buf.toString('utf8'));
  response.send(filec.toString('utf8'));
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
