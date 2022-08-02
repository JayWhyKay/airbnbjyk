const express = require("express");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User } = require("../../db/models");

const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const validateUserEmailExist = async (req, res, next) => {
  const { email } = req.body;
  const exists = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!exists) return next();

  const err = new Error("User already exists");
  err.errors = { "email": "User with that email already exists" };
  err.status = 403;
  return next(err);
};

const validateUsernameExist = async (req, res, next) => {
  const { username } = req.body;
  const exists = await User.findOne({
    where: {
      username: username,
    },
  });
  if (!exists) return next();

  const err = new Error("User already exists");
  err.errors = { "username": "User with that username already exists" };
  err.status = 403;
  return next(err);
};

const validateSignup = [
  check("firstName")
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage("First Name is required"),
  check("firstName")
    .not()
    .isEmail()
    .withMessage("First name cannot be an email"),
  check("lastName")
    .exists({ checkFalsy: true })
    .isLength({ min: 1 })
    .withMessage("Last Name is required"),
  check("lastName").not().isEmail().withMessage("Last name cannot be an email"),
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: false })
    .isLength({ min: 0 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post(
  "/",
  validateSignup,
  validateUserEmailExist,
  validateUsernameExist,
  async (req, res) => {
    const { firstName, lastName, email, password, username } = req.body;
    const user = await User.signup({
      firstName,
      lastName,
      email,
      username,
      password,
    });

    const token = await setTokenCookie(res, user);

    currentUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token,
    };

    return res.json(currentUser);
  }
);

module.exports = router;
