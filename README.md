<div align = "center">
<h1>CraftyAPI</h1>
<a href="https://www.npmjs.com/package/craftyapi">
<img src="https://img.shields.io/npm/dw/craftyapi?color=CC3534&logo=npm&style=for-the-badge" alt="Downloads">
</a>

<a href="https://www.npmjs.com/package/craftyapi">
<img src="https://img.shields.io/npm/v/craftyapi?color=red&label=Version&logo=npm&style=for-the-badge" alt="Npm version">
</a>
<br>

<a href="https://github.com/Spiderjockey02/CraftyClientAPI">
<img src="https://img.shields.io/github/stars/Spiderjockey02/CraftyClientAPI?color=333&logo=github&style=for-the-badge" alt="Github stars">
</a>

<a href="https://github.com/Spiderjockey02/CraftyClientAPI/blob/master/LICENSE">
<img src="https://img.shields.io/github/license/Spiderjockey02/CraftyClientAPI?color=6e5494&logo=github&style=for-the-badge" alt="License">
</a>
<hr>
</div>
This is an API wrapper for the Minecraft server controller, CraftyControl.

 - https://craftycontrol.com


## Installation

**NPM** :
```sh
npm install craftyapi
```

**Yarn** :
```sh
yarn add craftyapi
```

## Example Usage

```javascript
const CraftyAPI = require('craftyapi');

const API = new CraftyAPI('https://192.168.0.2:8000', 'YourAdminKey');

(async () => {
	console.log('Fetching hosts');
	console.log(await API.fetchHost());
	API.runCommand(4, 'save-all');
})();
```
