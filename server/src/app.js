const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("combined"));

// express.json() is a middleware that parses the incoming request body
app.use(express.json());
// To Serve assets
app.use(express.static(path.join(__dirname, "..", "public")));

// First middleware to get all planets
app.use("/", planetsRouter);
app.use("/launches", launchesRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
