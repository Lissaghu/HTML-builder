const fs = require('fs');
const path = require('path');
const fsPromises = require('fs').promises;

let wayOriginalFile = path.join(__dirname, 'files')
let wayCopyFile = path.join(__dirname, 'files-copy')

function copyDir() {

  fs.mkdir(wayCopyFile, { recursive: true }, (err) => {
    if (err) {
      console.log('error in 10 line ' + err)
    }
  })

  fs.readdir(wayCopyFile, (err, data) => {
    if (err) {
      console.log('error in 16 line ' + err)
    }
    data.forEach(item => {
      fs.unlink(path.join(__dirname, `files-copy/${item}`), (err) => {
        if (err) throw err
      })
    })
  })

  fs.readdir(wayOriginalFile, (err, data) => {

    if (err) {
      console.log('error in 27 line ' + err)
    } else {
      data.forEach(item => {

        fs.stat(path.join(__dirname, `files/${item}`), (err, stats) => {
          if (err) {
            console.log('error in 34 line ' + err)
          }

          if (stats.isFile()) {
            fsPromises.copyFile(path.join(__dirname, `files/${item}`), path.join(__dirname, `files-copy/${item}`))
          }
        })

      })
    }

  })

}
copyDir()
