// dotend
require("dotenv").config();

// import express
const express = require("express");

// import cors
const cors = require("cors");

// import mongoose
const mongoose = require("mongoose");

// create the express app
const app = express();

// middleware to handle JSON request (body)
app.use(express.json());

// setup cors policy
app.use(cors());

// connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/chatroom")
  .then(() => {
    // if mongodbb is successfully connected
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

// root route
app.get("/", (req, res) => {
  res.send("Happy Coding!");
});

// import all the routes
const userRouter = require("./routes/user");
const messageRouter = require("./routes/message");
const roomRouter = require("./routes/room");

// define urls for routers
app.use("/auth", userRouter);
app.use("/message", messageRouter);
app.use("/room", roomRouter);

// start the server
app.listen(5554, () => {
  console.log("Server is running at http://localhost:5554");
});
