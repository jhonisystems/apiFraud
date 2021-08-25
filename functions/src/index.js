const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const rutas = require("./routes/routes");

const app = express();

app.use(cors()).use(rutas);

exports.api = functions.https.onRequest(app);
