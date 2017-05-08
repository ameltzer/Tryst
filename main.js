var express = require('express');
var app = express();
credentials = {
      access_token: "-CrAvAUl3e-8aRySvQDkRIHv_29VfQH-ZdOximEzkX8GTMAnMDcAy_GZZlBe5RjHoMn7M0xhHfF-0KJN44MJ9fOwDFCa-cV1tIPax22XgTzu2kbhpztrR2JiupkOWXYx"
};
var rest = require('LightYelpWrapper').create(credentials);
app.get('/', function(req,res){
    var options = {
        term:'Four Barrel Coffee',
        location:'san francisco, ca'
    };
    rest.call(options,function(data){
       console.log(data); 
       res.send(data);
    });
});
app.listen(3000);