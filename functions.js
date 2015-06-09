function readString(dataString){
	var size = dataString.length;
	var evalString = '';

	for(var i = 2; i < size; i++){
		//'*' character in bash has a special meaning, so need to check for that
		if(dataString[i] === 'calc.js' && dataString[i+1] === 'cfunctions.coffee' && dataString[i+2] === 'coffeeCalc.coffee' && dataString[i+3] === 'functions.js'){
			evalString += '*';
			i+=3;
		}

		//take care of parentheses
		else if(dataString[i] === '(') {
			var tempString = '';
			i++;
			while(dataString[i] !== ')'){
				tempString += dataString[i];
			}
			evalString += eval(tempString);
		}

		//move everything into one string
		else if(dataString[i] != ' '){
			evalString += dataString[i];
		}
	}

	console.log(eval(evalString));
}

module.exports.readString = readString;