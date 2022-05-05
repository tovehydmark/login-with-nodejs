//Skapa en server med express och lägg på localhost:3000

const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Servern är igång på localhost:3000");
})

//Här skickar vi tillbaks från servern genom res.send
app.get("/", function (req, res) {
    res.send("<h1>Hello world från EXPRESS</h1>")
});

//Installera nodemon npm i nodemon. Den uppdaterar då vi sparar så vi ej behöver starta om servern varje gång. Startas med nodemon server.js istället för node server.js

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