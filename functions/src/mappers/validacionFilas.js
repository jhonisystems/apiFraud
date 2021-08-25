const validacionFilas = (datos) => {
  const vArr = datos.reduce( (acc, el) => {
    if (el.toLowerCase().includes("cccc") ||
            el.toLowerCase().includes("aaaa") ||
            el.toLowerCase().includes("tttt") ||
            el.toLowerCase().includes("gggg") ) {
      acc.push(el);
    }
    return acc;
  }, []);

  if (vArr.length > 0) {
    return false;
  }

  return true;
};

module.exports = validacionFilas;
