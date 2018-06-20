
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var sendmail = require('sendmail')();

var app = express();

// app.use(favicon(path.join(__dirname, './public/images/favicon.png')))

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/faq', function(req, res) {
    res.sendFile(path.join(__dirname, './public/faq.html'));
})

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, './public/about.html'));
})


app.listen(8080, function() {
    console.log('Listening On http://localhost:8080/');
});

// app.listen(8080, '192.241.231.251', function() {
//     console.log('Listening On http://192.241.231.251:8080/');
// });