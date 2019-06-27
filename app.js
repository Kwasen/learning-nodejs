const http = require('http');
const os = require('os');
const fs = require('fs');
const EventEmitter = require('events');
import { clg, convertSize, Logger } from './utils.js';

const logger = new Logger();

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();
// console.log('Total Memory: ', convertSize(totalMemory, 'gb'), 'Free Memory: ', convertSize(freeMemory, 'gb'));

// clg('---------------------');
// const files = fs.readdirSync('./');
// clg(files);

// clg('---------------------');
// fs.readdir('./sda', (err, files) => {
//	if (err) clg(err);
//	else clg(files);
//})
// clg('------------------------');
// // Register a listener
// logger.on('logged', (eventArg) => {
//	// clg.(eventArg);
//	console.log(eventArg);
// });

//logger.log('Sample message here');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Foh Challah');
		res.end();
	} 
	
	if (req.url === '/about') {
		res.write('Greetings to you. Here, I greet you. Now you have been met with a greeting.');
		res.end();
	}

	if (req.url === '/api/names') {
		res.write(JSON.stringify(['Todoraki', 'Ichigo', 'Sasuke']));
		res.end();
	}
});

server.listen(3000);
clg('Listening on port 3000...');
