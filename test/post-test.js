"use strict";

const request = require("request");

const case1 = {
	"message": "hello"
};

request.post("http://localhost:9000/test", { json: case1 }, (err, res, body) => {
	if (err) {
		console.log(err);
	}

	console.log((body));
});
