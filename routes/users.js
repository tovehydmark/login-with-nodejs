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


//Receives the new user from the front end and updates the users.json file
router.post("/createuser", function (req, res) {

  fs.readFile("users.json", (err, data) => {

    if (err) {
      console.log("Någonting gick fel, error : " + err);
    }

    const users = JSON.parse(data);

    const newUser = {
      "userName": req.body.userName,
      "password": req.body.password,
      "id": rand.generate(),
      "isLoggedin": false
    }

    users.push(newUser);

    fs.writeFile("users.json", JSON.stringify(users, null, 2), function (err) {
      if (err) {
        console.log(err);
      }
    })

    res.send("Success! new user with username:  is created!")
    return;
  })

})


router.post
module.exports = router;