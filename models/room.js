// schema for room collection
const { Schema, model } = require("mongoose");

// setup the rooms
const roomSchema = new Schema({ name: { type: String, required: true } });

const Room = model("Room", roomSchema);
module.exports = Room;
