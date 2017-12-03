const Main = require('./main.js');

const fs = require('fs');

//reads directory
fs.readdir('../commands/', (err, files) => {

    if (err) return console.error(err);

    //puts the file name into file
    files.forEach(file => {
        let command = requires(`../commands/${file}`);

        let 

    })
});