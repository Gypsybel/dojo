var users = require('../controllers/Users.js');
var events = require('../controllers/Events.js');

module.exports = function(app) {
//   app.get('/', main.index);
  // Users
  app.post('/login', users.login);
  app.get('/logout', users.logout);
  app.get('/getAllUsers', users.getAllUsers);
  app.get('/current_user', users.getCurrentUser);

  // Events
	app.get('/schedule', events.index);
	app.post('/schedule', events.new);
	app.delete('/schedule/:id', events.delete);
	app.get('/schedule/:id', events.show);
	app.put('/schedule/:id', events.update);
}
