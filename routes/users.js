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

//Testa att förenkla, dela upp find och sen kör 

router.post("/newuser", function (req, res) {

  // console.log(req.body);

  const userFromLogin = listOfusers.find(user => user.userName == req.body.fName);
  // console.log(JSON.stringify(userFromLogin).blue);
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

  // listOfusers.find((userLALA) => {

  //   console.log("userLALA" + JSON.stringify(userLALA).yellow);

  //   if (userLALA.userName == req.body.fName) {
  //     console.log("userLALA.userName " + JSON.stringify(userLALA.userName).red); //När jag har ett "=" så blir userLALA.userName samma som jag skrivit i mitt inputfält. varför??? Och när jag har två hoppar den in i else-satsen??

  //     console.log("req.body.fName: " + JSON.stringify(req.body.fName).green); //This is our user from userinput
  //     answer = {
  //       "result": "ok"
  //     }
  //     return res.json(answer)


  //   } else {
  //     answer = {
  //       "result": "error"
  //     }
  //     res.json(answer)


  //   }
  // })

})




router.post
module.exports = router;


// for (let i = 0; i < users.length; i++) {
//   console.log("Namn från fält: " + req.body.fName);

//   console.log("users innan if".green + JSON.stringify(users[i].userName).green)

//   //Loopar bara två gånger när jag har if-satsen, annars 4..why
//   if (users[i].userName = req.body.fName) {
//     console.log("users " + JSON.stringify(users[i].userName).red);
//     answer = {
//       "result": "ok"
//     }

//   } else if (users[i].userName != req.body.fName) {
//     answer = {
//       "result": "error"
//     }
//   }
// }