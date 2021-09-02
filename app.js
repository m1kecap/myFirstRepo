var fs = require('fs');
fs.readFile('textFile.txt', function(err, data){
    if (err) throw err;
    console.log(data);
});
var data = fs.readFileSync('textFile.txt', 'utf8');
console.log(data);