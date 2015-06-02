function parseString(dataString){
	var numbers = dataString.split(/\D/);
	var operators = dataString.split(/\d/);
	var total = Number(numbers[0]);

	for(var i = 0; i < numbers.length-1; i++){
		switch(operators[i+1]){
			case '+':
				total += Number(numbers[i+1]);
				break;

			case '-':
				total -= Number(numbers[i+1]);
				break;

			case '*':
				total *= Number(numbers[i+1]);
				break;

			case '/':
				total /= Number(numbers[i+1]);
				break;
		}
	}

	console.log(total);
}

function readString(dataString){
	var size = dataString.length;
	var operation = '+';
	var total = 0;
	//go through each element and calculate individually
	for(var i = 2; i < size; i++){
		//found an operation
		if(dataString[i] % 1 !== 0){
			operation = dataString[i];
		}
		//found a number
		else{
			switch(operation){
				case '+':
					total += Number(dataString[i]);
					break;
				case '-':
					total -= Number(dataString[i]);
					break;
				case '*':
					total *= Number(dataString[i]);
					break;
				case '/':
					total /= Number(dataString[i]);
					break;
			}
		}
	}
	console.log(total);
}

module.exports.parseString = parseString;
module.exports.readString = readString;