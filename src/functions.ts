import axios from 'axios';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

type CommandData = {
	command?: string
}

export async function sendPostRequest(url: string, data?: CommandData) {
	try {
		const resp = await axios({
			method: 'POST',
			url: url,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			data: `command=${data?.command}`,
		});
		console.log(resp);
	} catch (e) {
		console.log(e);
		return {};
	}
}

export async function sendGetRequest(url: string) {
	try {
		// Send request
		const resp = await axios.get(url);

		// Check request
		if (resp.status == 200) {
			return resp.data;
		} else {
			return {};
		}
	} catch (e) {
		console.log(e);
		return {};
	}
}
