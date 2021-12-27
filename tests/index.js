const CraftyAPI = require('../src/index.js');

const API = new CraftyAPI('https://192.168.0.1:8000', 'AdminKeyYouWontGet');

(async () => {
	console.log('Fetching hosts');
	console.log(await API.fetchHost());
	API.runCommand(4, 'save-all');
})();
