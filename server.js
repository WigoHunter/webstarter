var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'src')));

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(port, function() {
  console.log('server up and running on port' + port);
})
