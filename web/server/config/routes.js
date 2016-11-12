var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');

module.exports = function(app) {
//   app.get('/', main.index);
  app.post('/login', users.login);
  app.get('/current_user', users.getCurrentUser);
	app.get('/schedule', events.index);
	app.post('/schedule', events.new);
	app.delete('/schedule/:id', events.delete);
	app.get('/schedule/:id', events.show);
	app.put('/schedule/:id', events.update);
}
