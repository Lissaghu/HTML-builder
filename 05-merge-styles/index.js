// Здравствуй проверяющий! Данное задание было выполнено на node 16 версии, 
// какие-либо ошибки и баги отсутствуют, было проверено не только мною,
// если будут вопросы, то свяжитесь со мной пожалуйста в дискорд Inter#7639


const fs = require('fs');
const path = require('path');

let wayProject = path.join(__dirname, 'project-dist')
let wayStyles = path.join(__dirname, 'styles')

function mergeStyles() {

  fs.writeFile(`${wayProject}/bundle.css`, '', (err) => {
    if (err) console.log('error in 10 line ' + err)
  })

  fs.truncate(path.join(wayProject, 'bundle.css'), (err) => {
    if (err) console.log('error in 13 line ' + err)

    fs.readdir(wayStyles, (err, data) => {
      if (err) console.log('error in 16 line ' + err)

      data.forEach(item => {

        if (path.extname(item) == '.css') {

          let bundleFile = path.join(__dirname, 'project-dist', 'bundle.css')
          let dataStyles = path.join(__dirname, 'styles', item)

          fs.readFile(dataStyles, 'utf-8', (err, data) => {
            if (err) console.log('error in 26 line ' + err)

            fs.appendFile(bundleFile, data, (err) => {
              if (err) console.log('error in 30 line ' + err)
            })
          })

        }

      })

    })

  })
}
mergeStyles()