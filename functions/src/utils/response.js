const responseApi = async (res, code, message) => {
  res.setHeader("content-type", "application/json");
  res.status(code).json({
    status: code,
    message: message
  });
  res.end();
};

module.exports = responseApi;
