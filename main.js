const fs = require('fs');
fs.readFile(__dirname + "\\rsc\\rndrKdex.js", 'utf8', function (err, data) {
    eval(data);
});