var fs = require('fs');

var text = fs.readFileSync(process.argv[2], 'utf8').split('\n');
console.log(text.length - 1);
