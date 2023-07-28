const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const config = require("../config/config.json");

app.get("/:file", (req, res) => {
  const baseLocation = path.join(
    __dirname,
    config.settings.saveDirs.files,
    req.params.file
  );
  const location = baseLocation.split("routes\\")[1];
  console.log(location);

  if (fs.existsSync(location) && config.settings.allowDownload) {
    res.sendFile(location);
  } else if (!fs.existsSync(location)) {
    res.json(["File not found (Error 404)"]).status(404);
  } else if (!config.settings.allowDownload) {
    res
      .json(["Downloads are currently disabled, please try again later."])
      .status(405);
  } else {
    res.json(["Internal Server Error (Error 500)"]).status(500);
  }
});

module.exports = app;
