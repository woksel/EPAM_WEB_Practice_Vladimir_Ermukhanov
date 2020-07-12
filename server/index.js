const app = require("express")();
const cors = require("cors");
const http = require("http").createServer(app);
http.listen(3000);
const io = require("socket.io")(http);
const users = [];

app.use(cors());

app.use("/", (req, res) => {
  res.send("Hello!");
});

io.sockets.on("connection", (s) => {
  users.push(s);
  console.log("users: ", users.length);
  s.broadcast.emit("user", users.length);

  s.on("disconnect", (s) => {
    users.splice(s.indexOf(s), 1);
    console.log("users: ", users.length);
    s.broadcast.emit("user", users.length);
  });
});
