var http = require('http');

var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.end('HELLLO TWITCH !');
});
server.listen(8080);