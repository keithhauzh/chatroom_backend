const express = require("express");
const router = express.Router();

const { getRooms, addRoom, deleteRoom } = require("../controllers/room");

// get all rooms
router.get("/", async (req, res) => {
  try {
    const rooms = getRooms();
    res.status(200).send(rooms);
  } catch (error) {
    // console.log(error);
    res.status(400).send({ error: error._message });
  }
});

// create a room
router.post("/", async (req, res) => {
  try {
    const name = req.body.name;

    if (!name) {
      {
        return res.status(400).send({ error: "Required data is missing :(" });
      }
    }

    const newRoom = await addRoom(name);

    res.status(200).send(newRoom);
  } catch (error) {
    res.status(400).send({ error: error._message });
  }
});

// delete a room
router.delete("/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    await deleteRoom(_id);
    res.status(200).send({
      message: `Room with the provided id #${_id} has been deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error._message });
  }
});

module.exports = router;
