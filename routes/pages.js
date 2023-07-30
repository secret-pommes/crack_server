const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const config = require("../config/config.json");

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


// NOTE (secret1337): change this to own "header file" when add this.
app.get("/games", (req, res) => {
  res.json([]);
});
app.get("/software", (req, res) => {
  res.json([]);
});


module.exports = app;