var express = require('express');
var router = express.Router();
var counterObject={};
var allNums=[];
var myfs= require('fs');

/* GET home page. */



router.post('/savedata', function (req, res, next) {
  console.log("before");
  myfs.appendFile("C:\\Users\\Public\\savedata.txt",
      req.body.name + "\n" + req.body.tel + "\n" + req.body.budget + "\n\n",
      function (err, data) {
          if(err || req.body.name == "" || req.body.tel == "" || req.body.budget == "")
          {
            res.redirect("http://localhost:3000/mysite/buy%20car.html")

          }
          else{
              res.send(`<h3>we got your details : ${req.body.name}</h3>`);
          }
          console.log("finished write " + data);
      });
  console.log("after"); 
});

router.post('/getData', function(req, res, next) {
  if(req.body.name == "julian" && req.body.pass == "julian"){
    myfs.readFile("C:\\Users\\Public\\savedata.txt",(err,data)=>
    { 
        res.send(""+data);
    }) ;
  }
  else{
    // location.reload();
   res.redirect("http://localhost:3000/mysite/admin.html")
  }
});

module.exports = router;
