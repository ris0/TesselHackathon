
var http = require('http');
var port = normalizePort(process.env.PORT || '3000');
var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
