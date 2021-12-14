const	{ sendPostRequest, sendGetRequest } = require('./functions');

module.exports = class CraftyAPI {
	constructor(url, token) {
		this.token = token;
		this.url = url;
	}

	/*
    CRAFTY endpoints
  */
	async fetchHost() {
		return sendGetRequest(`${this.url}/api/v1/host_stats?token=${this.token}`);
	}

	async fetchServers() {
		return sendGetRequest(`${this.url}/api/v1/server_stats?token=${this.token}`);
	}

	async addUser() {
		return sendPostRequest(`${this.url}/api/v1/crafty/add_user?token=${this.token}`);
	}

	async deleteUser() {
		return sendPostRequest(`${this.url}/api/v1/crafty/del_user?token=${this.token}`);
	}

	/*
    Minecraft server endpoints
  */
	async listServers() {
		return sendGetRequest(`${this.url}/api/v1/list_servers?token=${this.token}`);
	}

	async startServer(id) {
		return sendPostRequest(`${this.url}/api/v1/server/start?token=${this.token}&id=${id}`);
	}

	async stopServer(id) {
		return sendPostRequest(`${this.url}/api/v1/server/stop?token=${this.token}&id=${id}`);
	}

	async restartServer(id) {
		return sendPostRequest(`${this.url}/api/v1/server/restart?token=${this.token}&id=${id}`);
	}

	async forceBackup(id) {
		return sendPostRequest(`${this.url}/api/v1/server/force_backup?token=${this.token}&id=${id}`);
	}

	async searchLogs(id, query) {
		return sendPostRequest(`${this.url}/api/v1/server/search_logs?token=${this.token}&id=${id}&query=${query}`);
	}

	async getLogs(id) {
		return sendGetRequest(`${this.url}/api/v1/server/get_logs?token=${this.token}&id=${id}`);
	}

	async runCommand(id, command) {
		return sendPostRequest(`${this.url}/api/v1/server/send_command?token=${this.token}&id=${id}`, { command: command });
	}
};
