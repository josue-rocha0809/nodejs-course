const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv))
  .options("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'is the base of the mutiply table'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "the base should be a number";
    }else if(isNaN(argv.m)) {
        throw "the limit should be a number";
      }
    return true;
  })
  .options("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe:'shows the table in the console'
  })
  .options("m",{
    alias:'limit',
    type:'number',
    default:10,
    describe:'limit up to  what number to multiply'
  })
  .argv;

module.exports = argv;
