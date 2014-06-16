var express = require('express');
var engines = require('consolidate');

var app = express();

// Setup template engine
app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get("/", function(req, res) {
  res.render('index');
});

var server = app.listen(8000, function() {
    console.log('Listening on port %d', server.address().port);
});
