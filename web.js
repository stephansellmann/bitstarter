var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	//var out = fs.readFileSync(./index.html,'utf-8')
	//response.end(out.toString());
	/*
	fs.readFile('./index.html', function (err, data) {
		if (err) throw err;
		console.log(data);
		response.end(data);
	});
	*/
	var html = fs.readFileSync('index.html').toString();
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end(html);
	//response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
