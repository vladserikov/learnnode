const fs = require('fs');

const file = fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        return;
    }
    console.log(data.split('\n').length - 1);
});
