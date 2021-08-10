"use strict";

const cfg = require("./config/config.json");

const fastify = require("fastify")({
	logger: true,
	ignoreTrailingSlash: true
});

fastify
	.register(require("fastify-jwt"), {
		secret: "supersecret"
	})
	.register(require("./route/mathroute.js"));

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
		rep.send(404);
	}
});

fastify.listen(cfg.httpserver, (err, address) => {
	if (err) {
		console.log(address + " >> " + err);
		process.exit(1);
	}
});
