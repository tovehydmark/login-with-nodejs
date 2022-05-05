var express = require('express');
var router = express.Router();
// var app = express();
var cors = require('cors');
router.use(cors());

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;



router.get("/json", function (req, res) {
  let users = [{
    userName: "tove",
    password: "test",
    id: 1
  }, {
    userName: "esty",
    password: "esteban",
    id: 2
  }, {
    userName: "hund",
    password: "hunden",
    id: 3
  }]
  res.json(users)
})