const fs = require('fs')

const createFile = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = ''
    for (let i = 0; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    if (listar) {
      console.log(salida)
    }
    return `tabla-${base}.txt`
  } catch (err) {
    throw err
  }
}

module.exports = { createFile }
