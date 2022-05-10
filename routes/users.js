var express = require('express');
var router = express.Router();

var cors = require('cors');
router.use(cors());

let colors = require('colors');
const {
  append
} = require('express/lib/response');

const fs = require("fs")

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('hej från users route');
});

let listOfUsers = [{
    userName: "johan",
    password: "test",
    id: 1,
    isLoggedin: false
  },
  {
    userName: "esty",
    password: "esteban",
    id: 2,
    isLoggedin: false
  }, {
    userName: "hund",
    password: "hunden",
    id: 3,
    isLoggedin: false
  }, {
    userName: "häst",
    password: "hästen",
    id: 4,
    isLoggedin: false
  }
]

let answer;

router.get("/allusers", (req, res) => {

  fs.readFile("users.json", (err, data) => {

    if (err) {
      console.log("Någonting gick fel, error : " + err);
    }

    let users = JSON.parse(data);
    res.json(users)
  })
})



//Checks if the user is in the user array and responds with error if not, else ok
router.post("/newuser", function (req, res) {

  const userFromLogin = listOfUsers.find(user => {
    return user.userName == req.body.fName && user.password == req.body.password && user.id
  });


  if (userFromLogin) {

    //Sends user-id to the client so it can be stored in LS to keep the right user loggedin
    answer = {
      "result": "ok",
      "id": userFromLogin.id
    }

    //Changes the value of users loggedin status
    userFromLogin.isLoggedin = true

    return res.json(answer)

  } else {

    answer = {
      "result": "error"
    }

    res.json(answer)
  }
})


router.post
module.exports = router;