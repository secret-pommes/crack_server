const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const config = require("../config/config.json");

app.get("/", (req, res) => {
  const baseLocation = path.join(
    __dirname,
    config.settings.saveDirs.json + "\\keys.json"
  );
  const location = baseLocation.split("routes\\")[1];
  const final = require(location);
  if (fs.existsSync(final)) {
    res.json(final);
  } else {
    res.json({ description: "Error 404, file not found." }).status(404);
  }
});

app.get("/getKeys", (req, res) => {
  const baseLocation = path.join(
    __dirname,
    config.settings.saveDirs.json + "\\keys.json"
  );
  const location = baseLocation.split("routes\\")[1];
  const final = require(location);
  res.json(final);
});

module.exports = app;
