import Crafty from '../index';


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NzA1MDQwOTQsInRva2VuX2lkIjoxfQ.QMFroOZUJCFtUSeRR7Ej0SClf92jpflUmMcK6uqw-3s';

(async () => {
	const API = new Crafty({ url: 'https://192.168.0.19:8443', token });
	console.dir(await API.fetchHost(), { depth: null });
	console.log(await API.addUser('test', 'test'));
})();
