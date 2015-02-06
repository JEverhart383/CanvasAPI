var https = require("https"); 




var options = {
  host: 'canvas.longwood.edu',
  path: '/api/v1/courses/1011421?access_token=<access_token>',
  method: 'GET'
};

callback = function(response) {
  var str = '';

  response.on('data', function (chunk) {
    	str += chunk;

  	});

  response.on('end', function () {
    	console.log(str);
  	});

  response.on("error", function (){
  	console.log("There was an error accessing the Canvas API");

  });
}

var req = https.request(options, callback);
req.end();
