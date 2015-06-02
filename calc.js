var size = process.argv.length;
var functions = require('./functions.js');

//Check to make sure that the first item is a number
if(size === 3){
	functions.parseString(process.argv[2]);
}

else{
	functions.readString(process.argv);
}