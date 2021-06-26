var express = require("express");
var router = express.Router();
var checkSessionAuth = require("../middlewares/checkSessionAuth");

//homepage
router.get("/", checkSessionAuth, async function (req, res, next) {
  res.render("index");
});

//acotar
router.get("/acotar", checkSessionAuth, async function (req, res, next) {
  res.render("1stpage");
});
//acomaf
router.get("/acomaf", checkSessionAuth, async function (req, res, next) {
  res.render("2ndpage");
});
//acowar
router.get("/acowar", checkSessionAuth, async function (req, res, next) {
  res.render("3rdpage");
});
//acofas
router.get("/acofas", checkSessionAuth, async function (req, res, next) {
  res.render("4thpage");
});
//acosf
router.get("/acosf", checkSessionAuth, async function (req, res, next) {
  res.render("5thpage");
});
//rhysand
router.get("/rhysand", checkSessionAuth, async function (req, res, next) {
  res.render("6thpage");
});
//feyre
router.get("/feyre", checkSessionAuth, async function (req, res, next) {
  res.render("7thpage");
});
//cassian
router.get("/cassian", checkSessionAuth, async function (req, res, next) {
  res.render("8thpage");
});
//azriel
router.get("/azriel", checkSessionAuth, async function (req, res, next) {
  res.render("9thpage");
});
//nesta
router.get("/nesta", checkSessionAuth, async function (req, res, next) {
  res.render("10thpage");
});

//prythian
router.get("/prythian", checkSessionAuth, async function (req, res, next) {
  res.render("11thpage");
});
//velaris
router.get("/velaris", checkSessionAuth, async function (req, res, next) {
  res.render("12thpage");
});
//under the mountain
router.get("/mountain", checkSessionAuth, async function (req, res, next) {
  res.render("13thpage");
});
//hybern
router.get("/hybern", checkSessionAuth, async function (req, res, next) {
  res.render("14thpage");
});

// //signup
// router.get("/register", function (req, res, next) {
//   res.render("register");
// });

// //login
// router.get("/login", function (req, res, next) {
//   res.render("login");
// });

// router.get("/logout", function (req, res, next) {
//   req.session.user = null;
//   res.redirect("/login");
// });

// router.post("/login", async function (req, res, next) {
//   let user = await User.findOne({
//     email: req.body.email,
//     password: req.body.password,
//   });
//   if (!user) return res.redirect("/login");
//   req.session.user = user;
//   return res.redirect("/");
// });
// router.post("/register", async function (req, res, next) {
//   let user = new User(req.body);
//   await user.save();
//   res.redirect("/");
// });

module.exports = router;
