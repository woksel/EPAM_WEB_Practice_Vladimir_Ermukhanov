const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const users = [];
const voices = [];

app.use(cors());

app.use(
  "/",
  express.static(path.resolve(path.parse(__dirname).dir, "client", "dist")),
);

app.get("/voices", (req, res) => res.send(voices));

io.on("connect", (socket) => {
  users.push(socket);
  console.log("users: ", users.length);
  socket.broadcast.emit("user", users.length);

  socket.on("disconnect", (s) => {
    users.splice(s.indexOf(s), 1);
    console.log("users: ", users.length);
    socket.broadcast.emit("user", users.length);
  });

  socket.on("audioMessage", (message) => {
    const audioObj = {
      timeStamp: new Date().toString(),
      audioBlob: message,
    };
    voices.push(audioObj);
    socket.broadcast.emit("audioMessage", message);
  });
});

http.listen(3000);
