const express = require("express");
// create a router for products
const router = express.Router();

// import functions from controller
const { login, signup } = require("../controllers/user");

// create the routes
// get all the users. Pointing to /users
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // login user via login function
    const user = await login(email, password);

    // send back the user data
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // trigger function
    const user = await signup(name, email, password);
    // send data

    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: error._message,
    });
  }
});

module.exports = router;
