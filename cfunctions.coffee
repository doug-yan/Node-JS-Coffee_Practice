parse = (data) ->
	evalString = ''
	for item in data[2...] when item isnt ' ' 
		if item is 'calc.js'# and item+1 is 'cfunctions.coffee' and item+2 is 'coffeeCalc.coffee' or item+3 is 'functions.js'
			console.log 'found'
			evalString += '*'
			item
		console.log evalString
		evalString += item

	console.log eval evalString

module.exports.parse = parse