const express = require("express");
const app = express();
const path = require("path");

const config = require("../config/config.json");

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
