var users = require('../controllers/Main.js');
var events = require('../controllers/Events.js');

module.exports = function(app) {
//   app.get('/', main.index);
	app.get('/schedule', events.index);
	app.post('/schedule', events.new);
	app.delete('/schedule/:id', events.delete);
	app.get('/schedule/:id', events.show);
	app.put('/schedule/:id', events.update);
}
