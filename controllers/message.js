// require axios
const axios = require("axios");

// import the Message model
const Message = require("../models/message");

// get all the messages
const getMessages = async () => {
  const messages = await Message.find();
  return messages;
};

// get one message
const getMessage = async () => {};

// add new message
const addNewMessage = async (
  // user_id,
  // room_id,
  content
) => {
  const newMessage = new Message({
    // user_id,
    // room_id,
    content,
  });
  await newMessage.save();
  return newMessage;
};

module.exports = {
  getMessages,
  addNewMessage,
};
