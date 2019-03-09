const recastClient = new recast.Client(config.recast);
const config = require('./config.js');
const restify = require('restify');
const builder = require('botbuilder');
const menu = require('./menu.js');
const recast = require('recastai');

// Connect to MS BOT!!!
const connector = new builder.ChatConnector({
  appId: config.appId,
  appPassword: config.appPassword,
})
const bot = new builder.UniversalBot(connector)

// Server Init
const server = restify.createServer()
server.listen(8080)
server.post('/', connector.listen())

// setting bots dialog

bot.dialog('/', function (session) {
	// console.log(session.message.text);
	recastClient.textRequest(session.message.text)
		.then(res => {
			const intent = res.intent().slug;

			if (intent == "greetings") {
				session.beginDialog('/profile');
			} else if (intent == "food") {
				if (res.get('food')) {
					var food = res.get('food').value;
					session.beginDialog('/food', food);
				} else {
					session.beginDialog('/food');
				}
			} else if (intent == "menu") {
				session.beginDialog('/menu');
			} else if (intent == "help") {
				session.beginDialog('/help');
			} else {
				session.send('Don't really understand');
			}
		})
		.catch(() => session.send('That\'s nice.'));
});


// Dialogs
