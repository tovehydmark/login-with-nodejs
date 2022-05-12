var express = require('express');
var router = express.Router();

var cors = require('cors');
router.use(cors());

let colors = require('colors');
const {
  append
} = require('express/lib/response');

const fs = require("fs")

var rand = require("random-key")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hej från users route');
});


let answer;



//Checks if the user is in users.json and responds with error if not, else ok
router.post("/login", function (req, res) {

  fs.readFile("users.json", (err, data) => {
    if (err) {
      console.log("Någonting gick fel, error : " + err);
    }

    let users = JSON.parse(data);

    const userFromLogin = users.find(user => {
      return user.userName == req.body.fName && user.password == req.body.password && user.id
    });

    if (userFromLogin) {

      //Sends user-id to the client so it can be stored in LS to keep the right user loggedin
      userFromLogin.isLoggedin = true

      answer = {
        "result": "ok",
        "id": userFromLogin.id,
        "isLoggedin": userFromLogin.isLoggedin,
        "userName": userFromLogin.userName
      }

      return res.json(answer)

    } else {

      answer = {
        "result": "error"
      }

      res.json(answer)
    }

  })
})



router.post("/createuser", function (req, res) {


  const newUser = {
    "userName": req.userName,
    "password": req.password,
    "id":
  }

  fs.readFile("users.json", (err, data) => {

    if (err) {
      console.log("Någonting gick fel, error : " + err);
    }

    let users = JSON.parse(data);

  })

})


router.post
module.exports = router;