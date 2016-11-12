var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

var app = express();

require('./server/config/mongoose.js');

var sessionConfig = {
  secret:'CookieMonster', // Secret name for decoding secret and such
  resave:false, // Don't resave session if no changes were made
  saveUninitialized: true, // Don't save session if there was nothing initialized
  name:'myCookie', // Sets a custom cookie name
  cookie: {
    secure: false, // This need to be true, but only on HTTPS
    httpOnly:false, // Forces cookies to only be used over http
    maxAge: 3600000
  }
}

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './client/static')));

// Routes
require('./server/config/routes.js')(app);

var port = 8000;
app.listen(port, function() {
  console.log("You can find this at port: " + port);
});