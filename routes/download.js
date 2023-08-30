const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const config = require("../config/config.json");
const logger = require("../structs/logger.js");

app.get("/:file", (req, res) => {
  const baseLocation = path.join(
    __dirname,
    config.settings.saveDirs.files,
    req.params.file
  );
  const location = baseLocation.split("routes\\")[1]; // NOTE: this may not work on every devices.

  if (fs.existsSync(location) && config.settings.allowDownload) {
    res.sendFile(location);
    //logger.info(`Sending ${req.params.file} to Client..`)
  } else if (!fs.existsSync(location)) {
    res.json({ description: "Error 404, file not found." }).status(404);
    //logger.info(`Client tried to download ${req.params.file} but it wasnt found on the server.`);
  } else if (!config.settings.allowDownload) {
    res
      .json({ description: "Error 405, downloads are currently disabled." })
      .status(405);
      //logger.info(`Client requested ${req.params.file} but downloads were disabled.`);
  } else {
    res.json({ description: "Error 500, Internal server error." }).status(500);
    //logger.info(`Internal Server Error when Client tried to download ${req.params.file}`);
  }
});

module.exports = app;
