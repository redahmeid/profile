var express = require('express');
var app = express();
const queryString = require('query-string');
app.get('/profile', function(req, res) {
 res.sendFile(__dirname + '/login.html'); 
});



app.get('/profile/home', function(req, res) {
res.send({
    "Output": req.query.token
  });
});


app.get('/', function(req, res) {
res.sendFile(__dirname + '/index.html');
});



// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
