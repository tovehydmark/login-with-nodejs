var express = require('express');
var router = express.Router();

var cors = require('cors');
router.use(cors());

let colors = require('colors')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hej från users route');
});

let listOfusers = [{
    userName: "johan",
    password: "test",
    id: 1
  },
  {
    userName: "esty",
    password: "esteban",
    id: 2
  }, {
    userName: "hund",
    password: "hunden",
    id: 3
  }, {
    userName: "häst",
    password: "hästen",
    id: 4
  }
]

let answer;

//Checks if the user is in the user array and responds with error if not, else ok
router.post("/newuser", function (req, res) {

  const userNameFromLogin = listOfusers.find(user => user.userName == req.body.fName);
  const passwordFromLogin = listOfusers.find(user => user.password == req.body.password)

  if (userNameFromLogin && passwordFromLogin) {

    if (userNameFromLogin.userName == req.body.fName && passwordFromLogin.password == req.body.password) {

      answer = {
        "result": "ok"
      }
      return res.json(answer)

    }
  } else {

    answer = {
      "result": "error"
    }

    res.json(answer)
  }
})


router.post
module.exports = router;