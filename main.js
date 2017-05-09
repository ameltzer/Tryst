var express = require('express');
var app = express();

const REST = require('RESTFULService');
function buildREST(RESTData){
    var restService = REST.create(RESTData.baseUrl,RESTData.accessToken);
    for(var endpoint in RESTData.endPoints){
        restService.registerEndpoint(endpoint.endpoint, endpoint.funcName);
    }
    return restService;
}

yelp_credentials_access_token= "-CrAvAUl3e-8aRySvQDkRIHv_29VfQH-ZdOximEzkX8GTMAnMDcAy_GZZlBe5RjHoMn7M0xhHfF-0KJN44MJ9fOwDFCa-cV1tIPax22XgTzu2kbhpztrR2JiupkOWXYx"
var yelpREST = require('yelp-fusion').client(yelp_credentials_access_token);
app.get('/', function(req,res){
    var options = {
        term:'Four Barrel Coffee',
        location:'san francisco, ca'
    };
    yelpREST.search(options).then(function(data){
       console.log(data); 
       res.send(data);
    });
});


googleRESTData = {
    baseUrl: '',
    accessToken: '',
    endPoints: [
        { endpoint:'/place/nearbysearch/output', funcName:'placeSearch'},
        { endpoint:'/a/b/c/output', funcName:'abc'}
    ]
};
var googleREST = buildREST(googleRESTData);


app.get('/map', function(req,res){
   var options = {
        term:'Four Barrel Coffee',
        location:'san francisco, ca'
   };
   googleREST.placeSearch(options).then(function(data){
        console.log('yay');
   });
});

app.listen(3000);