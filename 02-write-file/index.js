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




