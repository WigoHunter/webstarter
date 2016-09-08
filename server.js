var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.listen(8000, function() {
  console.log('server up and running on port 8000');
})
