import { sendPostRequest, sendGetRequest } from './functions';

export default class CraftyAPI {
	token: string;
	url: string;
	constructor(url: string, token: string) {
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

	async startServer(id: string) {
		return sendPostRequest(`${this.url}/api/v1/server/start?token=${this.token}&id=${id}`);
	}

	async stopServer(id: string) {
		return sendPostRequest(`${this.url}/api/v1/server/stop?token=${this.token}&id=${id}`);
	}

	async restartServer(id: string) {
		return sendPostRequest(`${this.url}/api/v1/server/restart?token=${this.token}&id=${id}`);
	}

	async forceBackup(id: string) {
		return sendPostRequest(`${this.url}/api/v1/server/force_backup?token=${this.token}&id=${id}`);
	}

	async searchLogs(id: string, query: string) {
		return sendPostRequest(`${this.url}/api/v1/server/search_logs?token=${this.token}&id=${id}&query=${query}`);
	}

	async getLogs(id: string) {
		return sendGetRequest(`${this.url}/api/v1/server/get_logs?token=${this.token}&id=${id}`);
	}

	async runCommand(id: string, command: string) {
		return sendPostRequest(`${this.url}/api/v1/server/send_command?token=${this.token}&id=${id}`, { command: command });
	}
}
