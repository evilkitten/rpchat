var express = require('express');
var engines = require('consolidate');
var io = require('socket.io');

var app = express();
app.use(express.static(__dirname + '/public'));

// Setup template engine
app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/", function(req, res) {
  res.locals.message = "Hello, this is a local variable message";
  res.render('index');
});

var server = app.listen(8000, function() {
    io.listen(server);
    console.log('Listening on port %d', server.address().port);
});

