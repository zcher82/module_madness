var http = require('http');
var nalgene = require('./modules/combinedexports');


http.createServer(function(req, res) {
  res.writeHead(200);
  res.write(nalgene.blue() + nalgene.red());
  res.end();
}).listen(3000);

console.log('listening on port 3000');
