const express = require("express");
const app = express();
const axios = require("axios");

const lastpatch = require("../package.json").lastpatch;
const version = require("../package.json").version;

app.get("/version", (req, res) => {
  res.json(["v" + version]);
});

app.get("/checkSync", (req, res) => {
  axios
    .get(
      "https://raw.githubusercontent.com/secret-pommes/EraBackendFake/main/package.json"
    )
    .then((response) => {
      const versionOnGit = response.data.version;
      if (version == versionOnGit) {
        res.json(["Sync with github."]);
      } else if (version != versionOnGit) {
        res.json(["Server is out of sync!"]);
      }
    })
    .catch(() => {});
});

app.get("/lastpatch", (req, res) => {
  res.json(["Last Patch: " + lastpatch]);
});

app.get("/getmotd", (req, res) => {
  const motds = [
    "since 2023",
    `last update: ${lastpatch} <- yeah really cool`,
    "взломанный сервер", // en / de: crack_server
    "who tf is json",
    "backend 🤝 -> json 🤝 -> client",
    "i see you 👀",
    "Code Chicken Core",
  ];
  res.json([`${motds[Math.floor(Math.random() * motds.length)]}`]);
});

module.exports = app;
