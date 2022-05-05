const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Servern är igång på localhost:3000");
})

app.get("/json", function (req, res) {
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