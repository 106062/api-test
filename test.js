"use strict";

const request = require('request');

const case1 = {
	"message": "hello"
};

request.post("http://127.0.0.1:9000/test", { json: case1 }, (err, res, body) => {
	if (err) {
		console.log(err);
	}

	console.log((body));
});

// request.get("http://127.0.0.1:9000/", (err, res,body) => {
// 	if (err) {
// 		console.log(err);
// 	}

// 	console.log(body);
// });
