const fs = require('fs');
const path = require('path');

let wayProject = path.join(__dirname, 'project-dist')
let wayStyles = path.join(__dirname, 'styles')

function mergeStyles() {

  fs.writeFile(`${wayProject}/bundle.css`, '', (err) => {
    if (err) console.log('error in 10 line ' + err)
  })


  fs.unlink(path.join(wayProject, 'bundle.css'), (err) => {
    if (err) throw err
  })


  fs.readdir(wayStyles, (err, data) => {
    if (err) console.log('error in 12 line ' + err)

    data.forEach(item => {

      if (path.extname(item) == '.css') {

        let bundleFile = path.join(__dirname, 'project-dist', 'bundle.css')
        let dataStyles = path.join(__dirname, 'styles', item)

        fs.readFile(dataStyles, 'utf-8', (err, data) => {
          if (err) console.log('error in 22 line ' + err)

          fs.appendFile(bundleFile, data, (err) => {
            if (err) console.log('error in 25 line ' + err)
          })
        })

      }

    })

  })

}
mergeStyles()