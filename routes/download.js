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
  const location = baseLocation.split("routes\\")[1]; // NOTE: this may not work on every devices.

  if (fs.existsSync(location) && config.settings.allowDownload) {
    res.sendFile(location);
  } else if (!fs.existsSync(location)) {
    res.json({ description: "Error 404, file not found." }).status(404);
  } else if (!config.settings.allowDownload) {
    res
      .json({ description: "Error 405, downloads are currently disabled." })
      .status(405);
  } else {
    res.json({ description: "Error 500, Internal server error." }).status(500);
  }
});

module.exports = app;
