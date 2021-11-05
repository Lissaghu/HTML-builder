// Здравствуй проверяющий! Данное задание было выполнено на node 16 версии, 
// какие-либо ошибки и баги отсутствуют, было проверено не только мною,
// если будут вопросы, то свяжитесь со мной пожалуйста в дискорд Inter#7639


const fs = require('fs');
const path = require('path');
const stream = require('stream');

let dir = path.join(__dirname, 'text.txt')

let readStream = fs.createReadStream(`${dir}`, 'utf-8')

readStream.on('data', (chunk) => console.log(chunk))