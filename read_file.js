const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

cosnt = textOut = 'This is what we know about the avocado: ${textIn}.\n Created on ${Date.now()}';

fs.writeFileSync('./txt/Output.txt', textOut);
console.log('File written');