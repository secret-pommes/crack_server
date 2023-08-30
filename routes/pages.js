const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const config = require("../config/config.json");
const logger = require("../structs/logger.js");

// not automatic to prevent errors for client.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  //logger.info("Send main page to client.")
});

app.get("/accounts", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/accounts.html"));
  //logger.info("Send accounts page to client.")
});

app.get("/archive", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/archive.html"));
  //logger.info("Send archive page to client.")
});

app.get("/keys", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/pages/keys.html"));
  //logger.info("Send keys page to client.")
});


// NOTE (secret1337): change this to own "header file" when add this.
app.get("/games", (req, res) => {
  res.json([]);
});
app.get("/software", (req, res) => {
  res.json([]);
});


module.exports = app;