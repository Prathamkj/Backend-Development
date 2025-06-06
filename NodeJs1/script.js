// package for http
// from Nodejs website
const http = require('http');
// creating a server here
const Server = http.createServer(function(req, res){
    // here we passed the request and responce
    res.end("This is my Server");
})
Server.listen(3000);
// Here we have created a serverrr
