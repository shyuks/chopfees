
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

app.post('/', function(req, res) {

    console.log('investor req:body; ', req.body);
    // var email = {
    //     emailAddress: '',
    //     emailLength: 0 
    // };

    // var info = {
    //     firstName: '',
    //     lastName: '',
    //     inviteCode: '',
    // };

    // if (req.body.firstName !== undefined && req.body.lastName !== undefined) {
    //     info.firstName = req.body.firstName;
    //     info.lastName = req.body.lastName;
    //     info.inviteCode = req.body.invite;
    // }

    // if (req.body.email !== undefined) {
    //     email.emailAddress = req.body.email;
    //     email.emailLength = req.body.email.length;
    // };

    // sendmail({
    //     from: 'chopfees@chopfees.com',
    //     to: 's.hong35@gmail.com',
    //     subject: 'New Potential INVESTOR ' + info.firstName + ' ' + info.lastName,
    //     html: "Hello, " + "<br><br>" + 'A new INVESTOR has submitted his information via joindoctorpedia.com.' + "<br><br>" +
    //           "First Name: " + info.firstName + "<br>" +
    //           "Last Name: " + info.lastName + "<br>" +
    //           "Email: " + email.emailAddress + "<br>" +
    //           "Invite Code: " + info.inviteCode + "<br><br>" +
    //           "Automated message from joindoctorpedia.com."
    // }), function(err, reply) {
    //         console.log(err && err.stack);
    //         console.dir(reply);
    // }

    setTimeout(function() {
        return res.redirect('/');    
    }, 8000)
})


app.listen(8080, function() {
    console.log('Listening On http://localhost:8080/');
});

// app.listen(8080, '206.189.214.68', function() {
//     console.log('Listening On http://206.189.214.68:8080/');
// });