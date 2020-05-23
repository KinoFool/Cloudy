var express = require('express')
var app = express()
const get_files = require('./app.js')
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index', {files: get_files('/mnt/c/Users/nicol/Documents/Code/Web/')})
})

app.listen(8080, function () {
    console.log('Listening on port 8080 !')
})