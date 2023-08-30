const functions = require("./functions.js");
const config = require("../config/config.json");

let interval;
if (config.settings.checkInterval == "1h") { interval = 60 * 60 * 1000 } 
else if (config.settings.checkInterval == "2h") { interval = 2 * 60 * 60 * 1000 } 
else if (config.settings.checkInterval == "3h") { interval = 3 * 60 * 60 * 1000 } 
else { interval = undefined }

setInterval(() => {
    functions.verifyFile()
}, interval);

module.exports = app;