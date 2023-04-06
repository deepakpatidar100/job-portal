const bodyparser = require('body-parser')
const express = require("express")
const app = express()
var cors = require("cors");

const route = require("./route/index")
const mongoose = require("./model/dbconnect")


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(cors())

app.use(express.urlencoded({
    extended: true
}));
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use("/", route)

app.listen(2000);
console.log("Server Started: http://127.0.0.1:2000");