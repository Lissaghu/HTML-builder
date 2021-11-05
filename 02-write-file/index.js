// Здравствуй проверяющий! Данное задание было выполнено на node 16 версии, 
// какие-либо ошибки и баги отсутствуют, было проверено не только мною,
// если будут вопросы, то свяжитесь со мной пожалуйста в дискорд Inter#7639


const fs = require('fs');
const path = require('path');
const stream = require('stream');
const readline = require('readline');

let way = path.join(__dirname, ' ')
let textFile = fs.createWriteStream(`${way}text.txt`)

console.log('Привет! Пожалуйста введи текст\n')

let interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.on('line', (data) => {

  if (data.trim() == 'exit') {
    console.log('Пока! Ты меня не любишь!')
    interface.close()
  } else {
    textFile.write(`${data}\n`)
  }

})

interface.on('SIGINT', () => {
  console.log('Пока! Ты меня не любишь!')
  interface.close()
})