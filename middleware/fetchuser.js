var jwt = require("jsonwebtoken");

const fetchuser = (req, res, next) => {
  try {
    let token = req.header("auth-token");
    if (!token) {

      res.status(400).json({ error: "token not found" });
    }
    let secret = "iamgoodboy";
    let data = jwt.verify(token, secret);
    req.user = data.user;

    next();
  } catch (e) {
    res.status(500).json({ error: "internal server error" });
  }
};
module.exports=fetchuser;
