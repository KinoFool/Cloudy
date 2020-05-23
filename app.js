const path = require('path');
const fs = require('fs');

// const mypath = '/mnt/c/Users/nicol/Documents/Code/Web/';

function get_files(mypath) {
    let file_info = [];

    let files = fs.readdirSync(mypath);
        files.forEach(function (file) {
            if (fs.lstatSync(mypath + file).isFile()) {
                file_info.push({type: 'file', name: file, path: mypath});
            } else if (fs.lstatSync(mypath + file).isDirectory()) {
                file_info.push({type: 'dir', name: file, path: mypath});
              }
        });
        console.log(file_info);
    return file_info;
}

module.exports = get_files;
