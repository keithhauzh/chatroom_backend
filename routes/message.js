const express = require("express");

// create a router for products
const router = express.Router();

// import functions from controller
const { addNewMessage, getMessages } = require("../controllers/message");

router.get("/", async (req, res) => {
  try {
    const message = await getMessages();
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// create new message
router.post("/", async (req, res) => {
  try {
    const content = req.body.content;
    const message = await addNewMessage(content);
    res.status(200).send(message);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      error: error._message,
    });
  }
});

module.exports = router;
