const mapeoArreglo = (arreglo) => {
  return arreglo
      .map((row) => row.split(""))
      .map((row, i) => row.map((val, j) => arreglo[arreglo.length - 1 - j][i]))
      .map((row) => row.reverse())
      .map((row) => row.join(""));
};

module.exports = mapeoArreglo;
