const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync');
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js")

const userController = require("../controllers/user.js")

//Render Sign up Form & Sign up linked with ("../controllers/user.js")
router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//Render Login Form & Login linked with ("../controllers/user.js")
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login",failureFlash: true,}), userController.login);

//Logout linked with ("../controllers/user.js")
router.get("/logout", userController.logout);

module.exports = router;