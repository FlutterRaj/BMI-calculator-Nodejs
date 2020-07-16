
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function (req, res) {
    var userData = req.body;

    var userWeight = userData.weight;
    var userHeight = userData.height;
    var userBMI = userWeight / (userHeight * userHeight);
    var message;

    if (userBMI < 18.5) {
        message = "Your BMI is low. you are under Weight"
    } else if (userBMI > 18.5 && userBMI < 23) {
        message = "Your BMI is normal. you are in Normal Range"
    } else if (userBMI > 23 && userBMI < 25) {
        message = "Your BMI is High. you are OverWeight - At risk"
    } else if (userBMI > 25 && userBMI < 30) {
        message = "Your BMI is high. you are in Overweight—Moderately Obese"
    } else {
        message = "Your BMI is too much High. you are Overweight—Severely Obese ."
    }

    res.send("Your BMI is " + userBMI.toFixed(2) + " . " + "<br>" + message);
})

app.listen(3000, function () {
    console.log("Started server 3000");
})