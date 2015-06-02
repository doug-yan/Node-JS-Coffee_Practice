var size = process.argv.length;
var functions = require('./functions.js');

//All one string
if(size > 3){
	functions.readString(process.argv);
}

else if(size === 3){
	functions.parseString(process.argv[2]);
}