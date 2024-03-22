const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const requestRouter = require("./routes/api/requests");

require("dotenv").config();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", requestRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;

  res.status(status).json({ message });
});

module.exports = app;
