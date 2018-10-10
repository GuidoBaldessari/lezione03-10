/* //3-10-2018

 var express = require("express");
var path = require("path");
var fs = require("fs");
var app = express();
app.use(function(req, res, next) {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date());
    res.write("Saludo");
    res.end();
});

app.listen(3000, function() {
    console.log("App started on port 3000");
}); 


//10-10-2018

var express = require("express");
//var http = require("http");
var util= require("util");

var app = express();


app.get("/users/:userid", function(req, res,next) {
    var userId = parseInt(req.params.userid, 10);
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(userId);
    res.end("Userid:"+userId);
    
    });
 app.use(function(request, response, next) {
    //console.log("In comes a " + request.method + " to " + request.url);
    //console.log(util.inspect(request, {showHidden: false, depth: null}));
   // console.log(util.inspect(request.query));
      var query = request.query;

      if(query != undefined)
      {

      }
      query.p=query.p+"test";
      console.log(query.p);
      console.log(query.p2);
      
      next();
});

app.use(function(request, response, next) {
    console.log("Secondo mid " + request.method + " to " + request.url);
    next();
});
 
app.use(function(request, response) {
    var query = request.query;
    //response.writeHead(200, { "Content-Type": "text/plain" });
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("Hello, world! <br>"+query.p);
});

http.createServer(app).listen(3000); */


var express = require("express");
var path = require("path");
var apiRouter = require("./routes/api_router");
var app = express();
var staticPath = path.resolve(__dirname, "static");
app.use(express.static(staticPath));
app.use("/api", apiRouter);
app.listen(3000);