//jshint esversion:6
require("dotenv").config(); // environment file
const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGOURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = {
  title: String,
  content: String,
  description: String,
  date: String
};

const Post = mongoose.model("Post", postSchema);

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
  Post.find({}, function (err, foundPosts) { // find all blog posts
    if (err) {
      console.log("Error:" + err);
    } else {
      res.render("blog", {
        posts: foundPosts
      });
    }
  });
});

app.get("/blog/:postTitle", function (req, res) {
  const requestedPostTitle = req.params.postTitle;
  Post.findOne({
    title: requestedPostTitle
  }, function (err, post) {
    if (err || post === null) { // No such post exists
      res.redirect("/pageNotFound");
    } else { // post now contains correct post to post

      res.render("blogPost", {
        title: post.title,
        content: post.content,
        date: post.date
      });
    }
  });
});


app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/pageNotFound", function (req, res) {
  res.render("pageNotFound");
});

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("App Listening on port 3000");
});