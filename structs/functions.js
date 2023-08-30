const CLIC = require("cli-color");
const fs = require("fs");
const path = require("path");

function ServerLog(msg) {
  console.log(
    CLIC.green(
      `[${new Date().toLocaleString().replace(",", " -")}][SERVER] ${msg}`
    )
  );
}

function ErrorLog(msg) {
  console.log(
    CLIC.red(
      `[${new Date().toLocaleString().replace(",", " -")}][ERROR] ${msg}`
    )
  );
}

module.exports = {
  ServerLog,
  ErrorLog,
};
