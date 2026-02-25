const { createServer } = require("node:http");
const { Server } = require("socket.io");
const app = require("./app");
const socketHandler = require("./socket/socket");

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"],
  },
});

socketHandler(io);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
