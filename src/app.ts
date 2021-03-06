import express from "express";
import config from "config";
import mongoose from "mongoose";

import log from "./logger";
import connect from "./db";
import routes from "./routes";
import deserializeUser from "./middleware/deserializeUser";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();
app.use(deserializeUser);

// Parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  log.info(`Server listing at http://${host}:${port}`);

  connect();

  routes(app);
});
