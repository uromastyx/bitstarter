var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
console.log("about to start FS");
  var fs = require('fs');
console.log("about to start new buffer");
  var mybuffer = new Buffer(16);
console.log("about to read file ");
mybuffer=fs.readFileSync("index.html");
console.log(mybuffer.toString());
  response.send(mybuffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
