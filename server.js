
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer')

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

app.post('/', function(req, res) {

    console.log('investor req:body; ', req.body);

    // var info = {
    //     firstName: '',
    //     lastName: '',
    //     companyName: '',
    //     emailAddress: '',
    //     phone: '',
    //     merchantStatement: ''
    // };

    // if (req.body.firstName !== undefined && req.body.lastName !== undefined) {
    //     info.firstName = req.body.firstName;
    //     info.lastName = req.body.lastName;
    //     info.companyName = req.body.companyName;
    //     info.emailAddress = req.body.emailAddress;
    //     info.phone = req.body.phone;
    //     info.merchantStatement = req.body.merchantStatement;
    // };

    // var mail = require("nodemailer").mail;

    // mail({
    //     from: "Fred Foo ✔ <foo@blurdybloop.com>", // sender address
    //     to: "s.hong35@gmail.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world ✔", // plaintext body
    //     html: "<b>Hello world ✔</b>" // html body
    // });

    // sendmail({
    //     from: 'chopfees@chopfees.com',
    //     to: 's.hong35@gmail.com',
    //     subject: 'New Inquiry by ' + info.firstName + ' ' + info.lastName,
    //     html: "Hello, " + "<br><br>" + 'A new inquiry was submitted on chopfees.com.' + "<br><br>" +
    //           "First Name: " + info.firstName + "<br>" +
    //           "Last Name: " + info.lastName + "<br>" +
    //           "Company Name: " + info.companyName + "<br>" +
    //           "Email: " + info.emailAddress + "<br>" +
    //           "Number: " + info.phone + "<br><br>" +
    //           info.merchantStatement +
    //           "Please check attachments for a merchant statement."
    // }), function(err, reply) {
    //         console.log(err && err.stack);
    //         console.dir(reply);
    // }

    // setTimeout(function() {
    //     return res.redirect('/');    
    // }, 8000)
})


app.listen(8080, function() {
    console.log('Listening On http://localhost:8080/');
});

// app.listen(8080, '206.189.214.68', function() {
//     console.log('Listening On http://206.189.214.68:8080/');
// });