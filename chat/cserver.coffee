mongo = require('mongodb').MongoClient
client = require('socket.io').listen(8080).sockets

mongo.connect 'mongodb://127.0.0.1', (err, db) ->
	if err 
		throw err

	client.on 'connection', (socket) ->

		col = db.collection 'messages'
		sendStatus = (s) ->
			socket.emit 'status', s

		col.find().limit(100).sort({_id: 1}).toArray((err, res) ->
			if err 
				throw err
			socket.emit 'output', res)

		socket.on 'input', (data) ->
			name = data.name
			message = data.message
			whiteSpacePattern = ///^\s*$///

			if whiteSpacePattern.test name || whiteSpacePattern.test message 
				sendStatus 'Name and message is required.'

			else
				col.insert {name: name, message: message}, () ->
					client.emit 'output', [data]

					sendStatus {message: "Message Sent", clear: true}