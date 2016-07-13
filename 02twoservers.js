var http = require('http');

var PORT=7000;

function handleRequest(request, response) {
	var niceArray = ["You're beautiful", "You rock", "I like you", "You're reall cool!"]
	var random = Math.floor(Math.random() * niceArray.length);
	response.end(niceArray[random]);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});


var PORT2=7500;

function handleRequest2(request, response) {
	var meanArray = ["You suck", "You smell bad", "You're a poohead"]
	var random = Math.floor(Math.random() * meanArray.length);
	response.end(meanArray[random]);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("Server listening on: http://localhost:%s", PORT);
});