var path = require('path')
var express = require('express')
var fs = require('fs');
const os = require('os');
var app = express()

const get_files = require('./app.js')
const host_name = os.hostname()

if (host_name == 'dellserver')
    var mypath = os.homedir()
else
    var mypath = '/home/kinofool/' // Start folder

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
    res.render('pages/index', {files: get_files(mypath)})
})

app.use('/:file', function(req, res) {
    if (fs.lstatSync(req.originalUrl).isDirectory()) {
        console.log('DIR !')
        // mypath = req.originalUrl + '/'
        res.render('pages/index', {files: get_files(path.normalize(req.originalUrl + '/'))})
        return
    }
    console.log(req.originalUrl)
    fs.readFile(req.originalUrl, 'utf8', function (err, data) {
        if (err) throw err;
        res.send(data)
    })
})
app.listen(8080, function () {
    console.log('Platform ==> ' + process.platform)
    console.log('Hostame ==> '+ os.hostname())
    console.log('Home ==> ' + os.homedir())
    console.log('Listening on port 8080 !')
})