const express = require('express');
const app = express(); // creates an instance of the express application


app.get('/', function(req, res, next){
  res.send("Hello world 2");
});

app.listen(3000,function(){
  console.log("Example app listening on port 3000!")
})
