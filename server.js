const static = require('node-static');
const http = require('http');

const file = new(static.Server)('./public');

const requestListener = function (req, res) {
    file.serve(req, res);
}

const server = http.createServer(requestListener);
server.listen(8080);