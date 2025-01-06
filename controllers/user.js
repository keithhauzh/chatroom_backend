// import models
const User = require("../models/user");

// jwt token import
const jwt = require("jsonwebtoken");

// import bcrypt library for hasisng password
const bcrypt = require("bcrypt");

// function for generating a JWT token
// function for generating a JWT token
function generateJWTtoken(_id, name, email) {
  return jwt.sign(
    {
      _id,
      name,
      email,
    },
    process.env.JWT_SECRET,
    { expiresIn: "30d" } //set expiry date for token
  );
}

const login = async (email, password) => {
  // check if email is exists in our system
  const user = await User.findOne({
    email,
  });

  // if not exists, throw an error
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // if exists, compare the password
  const inPasswordMatch = bcrypt.compareSync(password, user.password);
  if (!inPasswordMatch) {
    throw new Error("Invalid email or password");
  }
  // generate JWT token
  const token = generateJWTtoken(user._id, user.name, user.email);
  // password is correct, return the user data
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    token, // JWT token that was generated will be passed to the frontend along with the user data
  };
};

const signup = async (name, email, password) => {
  const emailExists = await User.findOne({
    email,
  });

  // if email exists in the collectiion
  if (emailExists) {
    throw new Error("Email already exists");
  }

  // create the new user
  const newUser = new User({
    name,
    email,
    password: bcrypt.hashSync(password, 10),
  });

  //   save the user dataa
  await newUser.save();

  //   generate jwt token
  const token = generateJWTtoken(
    newUser._id,
    newUser.name,
    newUser.email,
    newUser.role
  );

  // return the user data
  return {
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token,
  };
};

module.exports = { login, signup };
