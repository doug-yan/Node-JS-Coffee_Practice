function parseString(dataString){
	console.log(eval(dataString));
}

function readString(dataString){
	var size = dataString.length;
	var evalString = '';

	for(var i = 2; i < size; i++){
		if(dataString[i] === 'calc.js' || dataString[i] === 'functions.js'){
			evalString += '*';
			i++;
		}

		else if(dataString[i] != ' '){
			evalString += dataString[i];
		}
	}

	console.log(eval(evalString));
}

module.exports.parseString = parseString;
module.exports.readString = readString;