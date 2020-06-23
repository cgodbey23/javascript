var http = require("https");

var options = {
	"method": "GET",
	"hostname": "dataservice.accuweather.com",
	"port": null,
	"path": "http://dataservice.accuweather.com/locations/v1/postalcodes/us/search?apikey=nK2QKCkGVAgnj4wqPYycDEfkjyACdFK6&q=q&language=en-us&details=true",
	"headers": {
		"x-rapidapi-host": "https://www.accuweather.com",
		"x-rapidapi-key": "nK2QKCkGVAgnj4wqPYycDEfkjyACdFK6",
		"useQueryString": true
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
