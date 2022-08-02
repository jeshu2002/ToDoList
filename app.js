const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();
app.use(express.static("public"))
let values = ["car", "bike", "audi"];
let worklist = [];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.render('list', {listTitle: date.date,list: values});
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List("+date.day+")",list: worklist})
})

app.get("/about", function(req, res) {
  res.render("about")
})

app.post("/", function(req, res) {
  let value = req.body.input;
  if (req.body.button === "Work") {
    worklist.push(value);
    res.redirect("/work");
  } else {
    values.push(value);
    res.redirect("/");
  }
});

app.listen(process.env.PORT || 3000, function() {
  console.log("server started no port 3000");
});
