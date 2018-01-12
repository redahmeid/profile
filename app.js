var express = require('express');
var AWS = require('aws-sdk');
var CognitoSDK = require('amazon-cognito-identity-js-node');
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

app.post('/profile',function(req,res){
  const userPool = CognitoSDK.CognitoUserPool({
    UserPoolId: "us-east-1_DHdw9WBmW",
    ClientId: "77s8qvi05mjegegfsbb6n7aid0"
  });
  const user = CognitoSDK.CognitoUser({ 'reda@redahmeid.com', userPool });
  const authenticationData = { 'reda@redahmeid.com', 'Socrat3s' };
  const authenticationDetails = CognitoSDK.AuthenticationDetails(authenticationData);

  user.authenticateUser(authenticationDetails, {
    onSuccess: result => console.log(result),
    onFailure: err => console.log(err)
  })

})



// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
