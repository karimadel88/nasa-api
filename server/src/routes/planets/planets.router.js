const express = require("express");
const plantesRouter = express.Router();
const { httpGetAllPlantes } = require("./planets.controller");

plantesRouter.get("/planets", httpGetAllPlantes);

module.exports = plantesRouter;
