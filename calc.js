var functions = require('./functions.js');

if(process.argv.length !== 2){
	functions.readString(process.argv);
}

else{
	console.log('Empty input');
}

