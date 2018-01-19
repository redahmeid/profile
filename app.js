var express = require('express');
var cognito = require('amazon-cognito-identity-js');

var app = express();


app.get('/profile', function(req, res) {
 res.sendFile(__dirname + '/login.html');
});



app.get('/profile/home', function(req, res) {
res.send({
    "Output": req.query.token
  });
});


app.get('/', function(req, res) {
    cognito.AWSCognito.config.region = 'us-east-1'; //This is required to derive the endpoint

    var poolData = { UserPoolId : 'us-east-1_TcoKGbf7n',
        ClientId : '4pe2usejqcdmhi0a25jp4b5sh3'
    };
    var userPool = new cognito.AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    const cognitoUser = userPool.getCurrentUser();
    console.log(cognitoUser);
});




// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
