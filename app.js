var express = require('express');
var app = express();
const queryString = require('query-string');
app.get('/login', function(req, res) {
 res.sendFile(__dirname + '/login.html'); 
});



app.get('/profile', function(req, res) {
res.send({
    "Output": req.query.token
  });
});


app.post('/', function(req, res) {
  res.send({
    "Output": req.query.token 
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
