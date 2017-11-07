var express = require('express');
var app = express();
const queryString = require('query-string');
app.get('/', function(req, res) {
const parsedHash = queryString.parse(req.location.hash);
 res.sendFile(__dirname + '/profile.html'); 
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
