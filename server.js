//Skapa en server med express och lägg på localhost:3000

const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Servern är igång på localhost:3000");
})

//Här skickar vi tillbaks från servern genom res.send
app.get("/", function (req, res) {
    res.send("<h1>Hello world från Express</h1>")
});

//Installera nodemon npm i nodemon. Den uppdaterar då vi sparar så vi ej behöver starta om servern varje gång. Startas med nodemon server.js istället för node server.js