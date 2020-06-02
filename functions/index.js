const express = require("express")
const app = express()
const ejs = require("ejs")
const bodyParser = require("body-parser")

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/vlog", function (req, res) {
  res.render("vlog");
});

app.get("/blog", function (req, res) {
  res.render("blog");
});

app.get("/portfolio", function (req, res) {
  res.render("portfolio");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function (req, res) {
  console.log("App Listening on port 3000");
});
