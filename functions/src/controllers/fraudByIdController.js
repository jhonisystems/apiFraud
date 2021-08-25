const Data = require("../models/data");

const data = new Data();
const fraudById = async (req, res) => {
  const idTrans = req.params.id;
  const objFraud = await data.fraudById(idTrans);
  res.json(objFraud);
};

module.exports = fraudById;
