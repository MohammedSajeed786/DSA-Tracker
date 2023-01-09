const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const Questions = require("../models/Questions");
const req = require("express/lib/request");
const { solved, notes } = require("../helper");

// end point to create a user
router.post(
  "/createuser",
  [
    body("email", "enter a valid email").isEmail(),
    // password must be at least 8 chars long
    body(
      "password",
      "enter a valid password containing atleast 8 characters"
    ).isLength({ min: 8 }),
    body("name", "please enter a name").isLength({ min: 1 }),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // console.log(req.body);
      return res.status(400).json({ success: success, errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
       return  res.status(400).json({
          success: success,
          error:"user already exist with this email",
          code:1
        });
      }
      var salt = bcrypt.genSaltSync(10);
      var password_hash = bcrypt.hashSync(req.body.password, salt);
      user = await User.create({
        email: req.body.email,
        password: password_hash,
        name: req.body.name,
      });
      console.log(user);
      let data = {
        user: {
          id: user.id,
        },
      };
      let secret = "iamgoodboy";
      var auth_token = jwt.sign(data, secret);
      //   console.log(auth_token);
      success = true;
      let questions = await Questions.create({
        user: user.id,
        solved: solved,
        notes: notes,
      });
      console.log(questions);
      return res.json({ success: success, authtoken: auth_token });
    } catch (e) {
     return  res.status(500).json({ success: success, error: "some error occured" });
    }
  }
);

//end point to sign in a user
router.post("/signin", async (req, res) => {
  let success = false;
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({
        success: success,
        error: "user not found",
        code:2
      });
    }

    let password_compare = bcrypt.compareSync(req.body.password, user.password);
    if (!password_compare) {
     return res.status(400).json({
        success: success,
        error: "incorrect password",
        code:3
      });
    }
    let data = {
      user: {
        id: user.id,
      },
    };
    let secret = "iamgoodboy";
    var auth_token = jwt.sign(data, secret);
    console.log(auth_token);
    success = true;
   return  res.json({ success: success, authtoken: auth_token });
  } catch (e) {
    return res.status(500).json({ success: success, error: "some error occured" });
  }
});
module.exports = router;
