const express = require("express");
const app = express();
const path = require("path");

// not automatic to prevent errors for client.

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/accounts", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/accounts.html"));
});

app.get("/archive", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/archive.html"));
});

app.get("/keys", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/keys.html"));
});

module.exports = app;
