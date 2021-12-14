const axios = require('axios'),
	https = require('https');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
	sendPostRequest: async (url, data) => {
		console.log(data);
		try {
			const resp = await axios.post(url, {
				httpsAgent: new https.Agent({
					rejectUnauthorized: false,
				}),
				command: data.command,
			});
			console.log(resp);
		} catch (e) {
			console.log(e);
			return {};
		}
	},
	sendGetRequest: async (url) => {
		try {
			// Send request
			const resp = await axios.get(url, {
				httpsAgent: new https.Agent({
					rejectUnauthorized: false,
				}),
			});

			if (resp.status == '200') {
				return resp.data;
			} else {
				console.log(resp.error);
				return {};
			}
		} catch (e) {
			console.log(e);
			return {};
		}
	},
};
