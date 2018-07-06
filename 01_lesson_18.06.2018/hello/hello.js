const fs = require('fs');

// fs.readFile('hello.txt', 'utf8', (error, content) =>
//     content
//         .split('\n')
//         .filter(line => line.includes('dog'))
//         .forEach(line => console.log(line))
// )

let content;
content = fs.readFileSync('Hello.txt', 'utf-8'){
    console.log('file is reading');
}
console.log(content);