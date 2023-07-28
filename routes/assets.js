const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

app.get("/css/:file", (req, res) => {
  const location = path.join(
    __dirname,
    `../public/assets/css/${req.params.file}`
  );
  if (fs.existsSync(location)) {
    res.sendFile(location);
  } else {
    res.json(["File not found."]).status(404);
  }
});

app.get("/js/:file", (req, res) => {
  const location = path.join(
    __dirname,
    `../public/assets/js/${req.params.file}`
  );
  if (fs.existsSync(location)) {
    res.sendFile(location);
  } else {
    res.json(["File not found."]).status(404);
  }
});

app.get("/img/:file", (req, res) => {
  const location = path.join(
    __dirname,
    `../public/assets/img/${req.params.file}`
  );
  if (fs.existsSync(location)) {
    res.sendFile(location);
  } else {
    res.json(["File not found."]).status(404);
  }
});

module.exports = app;
