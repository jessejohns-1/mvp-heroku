require("dotenv").config();

const express = require("express");
const cors = require("cors");

const DaddyPORT = process.env.PORT || 5000;
const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(`<h1>HEROKU  APP</h1>`);
});

server.get("/api", (req, res) => {
  res.json({ message: "HEROKU  APP" });
});

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${DaddyPORT}`);
});
