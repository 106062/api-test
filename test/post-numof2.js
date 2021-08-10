"use strict";

const request = require("request");

const case1 = {
	"num1": "1",
	"num2": "6",
};

request.post("http://localhost:9000/numof2", { json: case1 }, (err, res, body) => {
	if (err) {
		console.log(err);
	}

	console.log((body));
});
