// schema for messages collection
const { Schema, model } = require("mongoose");

// setup the messages
const messageSchema = new Schema({
  content: { type: String, required: true },
  post_at: Date,
});

const Message = model("Message", messageSchema);
module.exports = Message;
