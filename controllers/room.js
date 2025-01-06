const Room = require("../models/room");

const getRooms = async () => {
  const rooms = await Room.find();
  return rooms;
};

const addRoom = async (name) => {
  const newRoom = new Room({
    name,
  });
  await newRoom.save();
  return newRoom;
};

const deleteRoom = async (_id) => {
  return await Room.findByIdAndDelete(_id);
};

module.exports = {
  getRooms,
  addRoom,
  deleteRoom,
};
