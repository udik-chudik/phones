var http = require("http");
var url = require("url");


var server = http.createServer();

server.on('request',function(req, res){

	parsed_url = url.parse(req.url, true);
	if (parsed_url.query.uid === undefined || parsed_url.query.uid === ""){
		res.statusCode = 403;
		res.write("Access denied");
		res.end();
		return;
	}

	res.write("Your UID=" + parsed_url.query.uid);
	res.end();
	return;

});


server.listen(3000);