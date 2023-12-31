const jwtSecret = "your_jwt_secret";
const jwt = require("jsonwebtoken"),
  passport = require("passport");

require("./passport"); //local passport file

/**
 * Creates JWT (expiring in 7 days, using HS256 algorithm to encode)
 * @param {object} user
 * @returns user object, jwt, and additional information on token
 * @function generateJWTToken
 */

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // encodes username in JWT
    expiresIn: "7d", // token expires in 7 days
    algorithm: "HS256", // used to encode the value of JWT
  });
};

/**
 * Handles user login, generates a JWT upon login
 * @name postLogin
 * @kind function
 * @param router
 * @returns user object with JWT
 * @requires passport
 */

module.exports = (router) => {
  router.post("/login", (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: "Something is not right!",
          user: user,
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
