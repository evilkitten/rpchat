var http     = require('http');
var express  = require('express');
var engines  = require('consolidate');
var socketIO = require('socket.io');

var app    = express();
var server = http.Server(app);
var io     = socketIO(server);

app.use(express.static(__dirname + '/public'));

// Setup template engine
app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/", function(req, res) {
  res.locals.message = "Hello, this is a local variable message";
  res.render('index');
});

server.listen(8000, function() {
  console.log('Listening on port %d', server.address().port);
});
