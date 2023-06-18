const fs = require("node:fs");
const colors = require('colors/safe')

const createFile = async (value, listar,limit) => {
  let salida = "";
  let consola = "";
  for (let i = 1; i <= limit; i++) {
    salida += `${value} x ${i} = ${value * i}\n`;
    consola += `${value} ${colors.yellow('x')} ${i} ${colors.red('=')} ${value * i}\n`;
  }
  if (listar === true) {
    console.log(`${colors.rainbow("listado\n")}${colors.blue(consola)} `)
  }
  fs.writeFileSync(`./multiplicationFiles/ejemploFile${value}.txt`, salida);
  return `ejemploFile${value}.txt`;
};

module.exports = {
  createFile,
};
