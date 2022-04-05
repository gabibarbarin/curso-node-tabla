const { argv } = require('yargs')
  .options({
    b: {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base para multiplicar.',
    },
    l: {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la lista en consola.',
    },
    h: {
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Limite hasta que numero multiplicar.',
    },
  })
  .check((argv, opt) => {
    if (isNaN(argv.b) || isNaN(argv.h)) {
      throw 'La base y el limite tienen que ser un numeros.'
    }
    return true
  })

module.exports = argv
