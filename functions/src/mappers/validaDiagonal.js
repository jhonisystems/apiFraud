const validaDiagonal = (datos) => {
  const nuevoArreglo = [];
  nuevoArreglo.push(
      datos
          .map((row) => row.split(""))
          .map((row, i) =>
            row
                .map((col, j) => {
                  if (i === j) {
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
  return nuevoArreglo;
};
module.exports = validaDiagonal;
