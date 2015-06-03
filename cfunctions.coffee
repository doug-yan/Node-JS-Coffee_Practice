parse = (data) ->
	evalString = ''
	evalString += item for item in data[2...] when item isnt ' ' 
	console.log eval evalString

module.exports.parse = parse