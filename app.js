const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

createFile(argv.b, argv.l, argv.h)
  .then((namefile) => console.log(`archivo ${namefile} creado.`))
  .catch((err) => console.log(err))
