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

  const userFromLogin = listOfusers.find(user => user.userName == req.body.fName);

  if (userFromLogin) {

    if (userFromLogin.userName == req.body.fName) {
      console.log(("Det funkar?").green);
      answer = {

        "result": "ok"
      }
      return res.json(answer)

    }
  } else {
    console.log(("det funkar ej".blue));
    answer = {
      "result": "error"
    }
    res.json(answer)
  }
})


router.post
module.exports = router;