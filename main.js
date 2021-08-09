"use strict";

const fastify = require("fastify")({
	logger: true,
});

fastify.get("/", (req, rep) => {
	const msg = {
		"hello": "world"
	};

	rep.send(JSON.stringify(msg));
});

fastify.post("/test", (req, rep) => {
	try {
		const message = req.body.message;
		const ans = {
			"Text": `${message}`
		};

		rep.send(JSON.stringify(ans));
	} catch (err) {
		console.log("/test: " + req + " >> err: " + err);
		rep.send(1);
	}
});

fastify.listen(9000, (err, address) => {
	if (err) {
		console.log(address + " >> " + err);
		process.exit(1);
	}
});
