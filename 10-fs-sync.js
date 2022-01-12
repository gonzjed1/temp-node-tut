//interacting with file system (fs)
//two flavors for file module asynchronously non-blocking ro we can do it synchronously blocking
//differences will be coverd later. 
//we will cover both setup

//structure it right out of the fs module
const {readFileSync,writeFileSync} = require('fs')

console.log('start');

//how to read from the file system
//provide two parameters path, and what is encoded typicaly utf-8
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first,second);

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second} \n`,
{ flag: 'a' }

)//search why interpolation doesnt work

console.log('done with the task');
console.log('starting the next one');

//NOTE: *******************************
//Java Scripts reads this line synchronously (procedural), therefore when there are multiple users the other users wont be able to use it
//if another user is running it, and reading files
//this line will run it line by line


//this is the same as abovve
// const fs = require('fs')
// fs.readFileSync



// const { readFileSync, writeFileSync } = require('fs')
// console.log('start')
// const first = readFileSync('./content/first.txt', 'utf8')
// const second = readFileSync('./content/second.txt', 'utf8')

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first}, ${second}`,
//   { flag: 'a' }
// )