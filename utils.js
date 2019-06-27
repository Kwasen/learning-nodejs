const EventEmitter = require('events');

export class Logger extends EventEmitter {	
	log(message) {
        console.log(message);
		this.emit('logged', {
			id: '001',
			message: 'I am the log to the logger'    
		});

	};
}

/*
* @params: [message: string]
* @return : none
* description: Takes in data, prints it to the global.console
* */
export const clg = (message) => console.log(message);

/*
 * @params: [inBytes: number, convertTo: string]
 * @return: number
 * description: Converts data in bytes to specified format (kb, mb, gb and tb)
 * */
export const convertSize = (inBytes, convertTo) => {
	const decimalPlaces = 2;
	const fixedDp = (num) => num.toFixed(decimalPlaces);

	switch(convertTo) {
		case 'kb':
			return fixedDp(inBytes/1024);
		case 'mb':
			return fixedDp(inBytes/1024/1024);
		case 'gb':
			return fixedDp(inBytes/1024/1024/1024);
		default: 
			console.log(`Error converting ${inBytes} to ${convertTo}`);
			return inBytes;
	}
}
