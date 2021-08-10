"use strice";

async function routes(fastify, options) {
	fastify.post("/twosums", options, async (req, res) => {
		try {
			
		} catch (err) {
			console.error("twosums err >> ", err);
			res.send(404);
		}
	});

	fastify.post("/numof2", (req, rep) => {
		try {
			const num1 = req.body.num1;
			const num2 = req.body.num2;

			const res = isNaN((parseInt(num1, 10) + parseInt(num2, 10)) % 2) ? 0 :
				((parseInt(num1, 10) + parseInt(num2, 10)) % 2);
			const ans = {
				"Result": `${res}`
			}

			rep.send(JSON.stringify(ans));
		} catch (err) {
			console.log("/numof2: " + err);
			rep.send(404);
		}
	});
}

module.exports = routes;
