const express = require("express");
const morgan = require("morgan");
const welcomeRouter = require("./welcome/welcome-router");
const usersRouter = require("./users/users-router");
const logger = require("./data/middleware/logger");
const noInsomnia = require("./data/middleware/no-insomnia");

const server = express();
const port = 4000;

server.use(express.json());
// server.use(morgan("combined"));
// server.use(noInsomnia());
server.use(logger("long"));

server.use(welcomeRouter);
server.use(usersRouter);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
