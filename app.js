var express = require('express');
var app = express();
var url = require('url');
var request = require('request');


//app.use(express.static('public'));
//var secret = "AJW-UQAwOLuZhWREVQQCxAeSXNF_oZZpxXpI3jHqR3byi1b3pFHgZblywYZOcCS79nK3EUm3hl0uZ_5APXYiVlE"

var server = app.listen(9080, function () {

    app.use("/_services/smart/Launch/:id",function(req,res){
        console.log(req);
        //var url_parts = url.parse(req.url, true);
        //var query = url_parts.query;
        //var code = req.query.code;
        //console.log("Code:" + code);

        res.send({
            "parameters":{
                "patient": "123"
            }
        })

    });

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at http://%s:%s", host, port)

})