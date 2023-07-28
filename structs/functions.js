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

function verifyFile(file, location) {
  try {
    if (fs.existsSync(path.join(__dirname, `${location}/${file}`))) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}

module.exports = {
  ServerLog,
  ErrorLog,
  verifyFile,
};
