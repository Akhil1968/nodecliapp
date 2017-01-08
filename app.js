#!/usr/bin/env node 
var http = require("http");

console.log("To call Create Server");
var server = http.createServer(function(req, res){
	res.write("<HTML> <Body> <H2>Hello NodeJS </h2> ");
	res.write("<H3>This is a http server created using core module of http </H3></Body></HTML> ");
	res.end();
});

console.log("Create Server is over");
server.listen("3000", function(){
	console.log("My HTTP server is running on port 3000");
});