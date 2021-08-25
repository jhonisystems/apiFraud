const mapeoArreglo = require("../mappers/mapArreglo");
const mapRequest = require("../mappers/mapRequest");
const validacionFilas = require("../mappers/validacionFilas");
const validaDiagonal = require("../mappers/validaDiagonal");
const validaDiagonalSecundaria = require("../mappers/validaDiagonalSecundaria");
const Data = require("../models/data");
const responseApi = require("../utils/response");

const data = new Data();
const fraudeController = async (req, res) => {
  if (mapRequest(req)) {
    const objTransaccion = req.body;
    const datos = objTransaccion.data;
    const rowLength = datos.length;
    if (datos.every((el) => el.length === rowLength)) {
      if (
        validacionFilas(datos) &&
        validacionFilas(mapeoArreglo(datos)) &&
        validacionFilas(validaDiagonal(datos)) &&
        validacionFilas(validaDiagonalSecundaria(datos))
      ) {
        objTransaccion.idFraud = false;
        data.insertarVerificacion(objTransaccion);
        return responseApi(res, 200, "");
      } else {
        objTransaccion.idFraud = true;
        data.insertarVerificacion(objTransaccion);
        return responseApi(res, 403, "");
      }
    } else {
      return responseApi(
          res,
          400,
          "Los datos del arreglo no cumplen con el formato de una matriz NxN"
      );
    }
  } else {
    return responseApi(res, 400, "Error al enviar los parametros");
  }
};

module.exports = fraudeController;
