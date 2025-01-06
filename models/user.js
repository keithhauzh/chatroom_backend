// schema for messages collection
const { Schema, model } = require("mongoose");

// setup the messages
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  //   chat_id: { type: String, required: true },
  //   user_id: { type: String, required: true },
});

const User = model("User", userSchema);
module.exports = User;
