var size = process.argv.length;
var functions = require('./functions.js');

if(size === 3){
	functions.parseString(process.argv[2]);
}

else if(size > 3){
	functions.readString(process.argv);
}