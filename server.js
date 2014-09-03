var http = require('http');

http.createServer(function(request, response) {
	request.on('data', function(data) {
		console.log(data.toString());
		response.end();
	});
}).listen(12121);