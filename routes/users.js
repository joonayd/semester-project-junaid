var express = require("express");
const mongoose = require("mongoose");
var router = express.Router();
var User = require("../models/user");
/* GET users listing. */
router.get("/register", function (req, res, next) {
  res.render("users/register");
});
router.get("/login", function (req, res, next) {
  res.render("users/login");
});
router.get("/logout", function (req, res, next) {
  req.session.user = null;
  res.redirect("/login");
});
router.post("/login", async function (req, res, next) {
  let user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (!user) return res.redirect("/login");
  req.session.user = user;
  return res.redirect("/");
});
router.post("/register", async function (req, res) {
  // const { name, email, password } = req.body;
  // let user = {};
  // user.name = name;
  // user.email = email;
  // user.password = password;
  // let userModel = new User(user);
  // await userModel.save();
  // res.redirect("/");
  let user = new User(req.body);
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.save();
  res.redirect("/");
});

module.exports = router;
