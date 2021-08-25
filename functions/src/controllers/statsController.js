const Data = require("../models/data");

const data = new Data();
const statsController = async (req, res) => {
  const objAllFraud = await data.allFraud();
  const fraudsTrue = objAllFraud.reduce((acc, el) => {
    if (el.idFraud) {
      acc.push(el.idFraud);
    }
    return acc;
  }, []);
  const fraudsFalse = objAllFraud.reduce((acc, el) => {
    if (!el.idFraud) {
      acc.push();
    }
  }, []);
  console.log(objAllFraud);
  console.log(fraudsTrue);
  console.log(fraudsFalse);
  res.json({
    count_fraud: fraudsTrue.length,
    count_not_fraud: fraudsFalse.length,
    ratio: fraudsTrue.length / fraudsFalse.length
  });
};

module.exports = statsController;
