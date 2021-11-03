const fs = require('fs');
const path = require('path');
const stream = require('stream');

let dir = path.join(__dirname, 'text.txt')

let readStream = fs.createReadStream(`${dir}`, 'utf-8')

readStream.on('data', (chunk) => console.log(chunk))