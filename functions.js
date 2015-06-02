function readString(dataString){
	var size = dataString.length;
	var evalString = '';

	for(var i = 2; i < size; i++){
		//'*' character in bash has a special meaning, so need to check for that
		if(dataString[i] === 'calc.js' || dataString[i] === 'functions.js'){
			evalString += '*';
			i++;
		}

		//move everything into one string
		else if(dataString[i] != ' '){
			evalString += dataString[i];
		}
	}

	console.log(eval(evalString));
}

module.exports.readString = readString;