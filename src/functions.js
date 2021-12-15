const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
	sendPostRequest: async (url, data) => {
		try {
			const resp = await axios({
				method: 'POST',
				url: url,
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				data: `command=${data.command}`,
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
			const resp = await axios.get(url);

			// Check request
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
