var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var mybuffer = new Buffer(16);
   mybuffer=fs.readFileSync("index.html");

  response.send(mybuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
