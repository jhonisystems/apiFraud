const Data = require("../models/data");

const allFraudController = async (req, res) => {
  const data = new Data();

  if (Object.entries(req.query).length > 0) {
    const {page, size} = req.query;
    const respuesta = await data.fraudPagination(
        Number.parseInt(page),
        Number.parseInt(size)
    );
    res.json(respuesta);
  } else {
    const respuesta = await data.allFraud();
    res.json(respuesta);
  }
};

module.exports = allFraudController;
