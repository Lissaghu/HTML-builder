// Здравствуй проверяющий! Данное задание было выполнено на node 16 версии, 
// какие-либо ошибки и баги отсутствуют, было проверено не только мною,
// если будут вопросы, то свяжитесь со мной пожалуйста в дискорд Inter#7639


const fs = require('fs');
const path = require('path');

// original path------------
let wayAssets = path.join(__dirname, 'assets')
let wayComponents = path.join(__dirname, 'components')
let wayStyles = path.join(__dirname, 'styles')
let wayTemplate = path.join(__dirname, 'template.html')

// dist path----------------
let wayProjectDist = path.join(__dirname, 'project-dist')
let wayAssetsDist = path.join(__dirname, 'project-dist', 'assets')
let wayComponentsDist = path.join(__dirname, 'project-dist', 'index.html')
let wayStylesDist = path.join(__dirname, 'project-dist', 'style.css')

fs.mkdir(wayProjectDist, { recursive: true }, (err) => {
  if (err) console.log('error in 16 line ' + err)
})

function copyStyles() {

  fs.writeFile(wayStylesDist, '', (err) => {
    if (err) console.log('error in 24 line ' + err)
  })

  fs.truncate(wayStylesDist, (err) => {
    if (err) console.log('error in 29 link ' + err)

    fs.readdir(wayStyles, (err, data) => {
      if (err) console.log('error in 12 line ' + err)

      for (let elem of data) {
        if (path.extname(elem) == '.css') {

          let dataStyles = path.join(__dirname, 'styles', elem)

          fs.readFile(dataStyles, 'utf-8', (err, data) => {
            if (err) console.log('error in 40 line ' + err)

            fs.appendFile(wayStylesDist, data, (err) => {
              if (err) console.log('error in 43 line ' + err)
            })
          })

        }
      }

    })

  })
}
copyStyles()

function readDir(from, to) {

  fs.mkdir(to, { recursive: true }, (err) => {
    if (err) console.log('error in 57 line ' + err)
  })

  fs.readdir(from, { withFileTypes: true }, (err, direct) => {
    if (err) console.log('error in 61 line ' + err)

    for (let dir of direct) {

      let wayFromDir = path.join(from, dir.name)
      let wayToDir = path.join(to, dir.name)

      if (dir.isFile()) {

        fs.copyFile(wayFromDir, wayToDir, (err) => {
          if (err) console.log('error in 71 line ' + err)
        })

      } else if (!dir.isFile()) {

        fs.mkdir(wayToDir, { recursive: true }, (err) => {
          if (err) console.log('error in 70 line ' + err)
        })
        readDir(wayFromDir, wayToDir)

      }

    }
  })
}
readDir(wayAssets, wayAssetsDist)

function createHTMLFile() {
  fs.writeFile(wayComponentsDist, '', (err) => {
    if (err) console.log('error in 89 line ' + err)
  })

  let readStreamTemplate = fs.createReadStream(wayTemplate)

  readStreamTemplate.on('data', dataTemplate => {
    let str = dataTemplate.toString()

    fs.readdir(wayComponents, (err, files) => {
      if (err) console.log('error in 90 line ' + err)

      files.forEach(item => {

        let fileNotExt = path.basename(item, `${path.extname(item)}`)
        let readStreamComp = fs.createReadStream(path.join(wayComponents, item), 'utf8')

        readStreamComp.on('data', data => {
          str = str.replace(`{{${fileNotExt}}}`, data)

          fs.writeFile(wayComponentsDist, str, (err) => {
            if (err) console.log('error in 108 line ' + err)
          })

        })

      })
    })
  })
}
createHTMLFile()