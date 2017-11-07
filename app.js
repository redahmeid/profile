var express = require('express');
var app = express();
const queryString = require('query-string');
app.get('/', function(req, res) {
 res.sendFile(__dirname + '/profile.html'); 
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
