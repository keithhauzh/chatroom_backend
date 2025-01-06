// schema for messages collection
const { Schema, model } = require("mongoose");

// setup the messages
const messageSchema = new Schema({
  content: { type: String, required: true },
  sent_at: { type: Date, default: Date.now },
});

const Message = model("Message", messageSchema);
module.exports = Message;
