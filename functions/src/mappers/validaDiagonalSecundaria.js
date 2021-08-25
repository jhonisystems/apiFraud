const validaDiagonalSecundaria = (datos) => {
  const contFilas = datos.length;
  const diagonalSecundaria = [];
  diagonalSecundaria.push(
      datos
          .map((row) => row.split(""))
          .map((row, i) =>
            row
                .map((col, j) => {
                  if (i + j == contFilas - 1) {
                    return col;
                  }
                })
                .reduce((acc, el) => {
                  if (el) {
                    acc.push(el);
                  }
                  return acc;
                }, [])
          )
          .reduce((acc, el) => acc.concat(el), [])
          .join("")
  );
  return diagonalSecundaria;
};

module.exports = validaDiagonalSecundaria;
