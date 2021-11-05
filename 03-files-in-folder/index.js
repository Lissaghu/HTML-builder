// Здравствуй проверяющий! Данное задание было выполнено на node 16 версии, 
// какие-либо ошибки и баги отсутствуют, было проверено не только мною,
// если будут вопросы, то свяжитесь со мной пожалуйста в дискорд Inter#7639


const fs = require('fs');
const path = require('path');

let way = path.join(__dirname, 'secret-folder')

fs.readdir(way, (err, data) => {

  data.forEach(item => {
    let way2 = path.join(__dirname, `secret-folder/${item}`)

    fs.stat(way2, (err, stats) => {

      if (stats.isFile()) {
        console.log(path.basename(item, `${path.extname(item)}`)
          + '  -  '
          + path.extname(item)
          + '  -  '
          + (stats.size / 1024).toFixed(3) + 'kb')
      }

    })
  })
})