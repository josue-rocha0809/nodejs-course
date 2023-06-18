const argv = require('./config/yargs')
const { createFile } = require("./helpers/multiplicar");
const colors = require('colors/safe')

console.log('argv',argv)
createFile(argv.b, argv.l,argv.m)
.then(fileName=> console.log(colors.green.underline(fileName, 'has been saved')))
.catch(err=>console.log(err))

