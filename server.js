const express = require("express");
const app = express();
const https = require("https");
const path = require("path");
const fs = require("fs");

const config = require("./config/config.json");
const functions = require("./structs/functions.js");

const SSLServer = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, "cert/key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "cert/cert.pem")),
  },
  app
);

if (config.server.UseSSL) {
  SSLServer.listen(config.server.port, () => {
    functions.ServerLog(
      `Server started listening on port: ${config.server.port}`
    );
  }).on("error", (err) => {
    functions.ErrorLog(`Error during SSL setup: ${err}`);
  });
} else if (!config.server.UseSSL) {
  app
    .listen(config.server.port, () => {
      functions.ServerLog(
        `Server started listening on port: ${config.server.port}`
      );
    })
    .on("error", (err) => {
      functions.ErrorLog(`Error during listening setup: ${err}`);
    });
}

app.use(require("./routes/pages.js"));
app.use("/api", require("./routes/api.js"));
app.use("/assets", require("./routes/assets.js"));
app.use("/dl", require("./routes/download.js"));
app.use("/jsondata", require("./routes/jsondata.js"));

app.use((req, res, next) => {
  setTimeout(() => {
    res.status(410);
  }, 5000);
});
