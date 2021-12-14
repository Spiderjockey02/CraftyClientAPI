const CraftyAPI = require('../src/index.js');

const API = new CraftyAPI('https://192.168.0.1:8000', 'AdminKeyYouWontGet');

console.log('Fetching hosts');
API.fetchHost();
API.runCommand(4, 'save-all');
