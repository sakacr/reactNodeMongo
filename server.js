const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
const port = process.env.PORT  || 5000;
const mongoUrl = "mongodb://localhost:27017/node1";
app.use(bodyparser.json());
app.use(cors());
app.use(
    bodyparser.urlencoded({
        extended: false
    })
);
mongoose.Promise = global.Promise; //PROMISE BERFUNGSI UNTUK MENCIPTAKAN SEBUAH API BARU
//CONNECT MONGODB ST DEFAULT PORT 27017.
mongoose
  .connect(mongoUrl, {useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected ^_^"))
  .catch(err => console.log(err));
var Users = require("./routes/Users");
app.use("/users", Users);

app.listen(port, () =>{
  console.log("server running on port "+port);
});