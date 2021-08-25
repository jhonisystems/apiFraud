/* eslint-disable new-cap */
const fraudeController = require("../controllers/fraudController");
const allFraudController = require("../controllers/allFraudController");
const fraudById = require("../controllers/fraudByIdController");
const statsController = require("../controllers/statsController");
const express = require("express");
const rutas = express.Router();

rutas.post("/frauds", fraudeController);
rutas.get("/frauds/:id", fraudById);
rutas.get("/frauds", allFraudController);
rutas.get("/stats", statsController);
module.exports = rutas;
