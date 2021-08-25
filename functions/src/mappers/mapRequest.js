const mapRequest = (req) => {
  const transactionId = req.body.transaction_id;
  const data = req.body.data;

  if (transactionId && data) {
    if (Array.isArray(data)) {
      return true;
    }
  }

  return false;
};

module.exports = mapRequest;
