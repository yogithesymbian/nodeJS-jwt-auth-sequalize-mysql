var response = require("../utils/res");
const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (user) {
      response.err(res, "Failed! Username is already in use!", 400);
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        response.err(res, "Failed! Email is already in use!", 400);
        return;
      }

      next();
    });
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        var msg = "Failed! Role does not exist = " + req.body.roles[i];
        response.err(res, msg, 400);
        return;
      }
    }
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
