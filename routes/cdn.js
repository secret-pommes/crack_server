const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const config = require("../config/config.json");

app.get("/", (req, res) => {
  const query = req.query.img;
  const baseLocation = path.join(__dirname, config.settings.saveDirs.img);
  if (!query) {
    res
      .json({
        description:
          "Error 400 / 404, you need to include a img_id of the wanted picture (/cdn?img=1337.png)",
      })
      .status(400);
  } else if (query) {
    const location = baseLocation.split("routes\\")[1] + query; // this may not work on every devices.
    if (fs.existsSync(location)) {
      try {
        res.sendFile(location);
      } catch {
        res
          .json({ description: "Error 500, internal server error" })
          .status(500);
      }
    } else {
      res.json({ description: "Error 404, image not found." });
    }
  } else {
    res.json({ description: "Error 500, internal server error" }).status(500);
  }
});

module.exports = app;
