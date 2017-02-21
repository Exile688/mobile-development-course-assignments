var http = require('http');

var server = http.createServer(function (req, res){
    res.write('Hello from my first server!');
    res.end();

});

server.listen(3000);
console.log('server is listening on port 3000 ');