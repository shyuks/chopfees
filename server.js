
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var nodemailer = require('nodemailer')
var multer = require('multer');
var upload = multer({ dest: 'upload/' });
var fs = require('fs');

var app = express();

app.use(favicon(path.join(__dirname, './public/images/favicon.png')))

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

app.post('/', upload.single('merchantStatement'), function(req, res, next) {

    let info = {
        firstName: '',
        lastName: '',
        companyName: '',
        emailAddress: '',
        phone: ''
    };

    if (req.body.firstName !== undefined && req.body.lastName !== undefined) {
        info.firstName = req.body.firstName;
        info.lastName = req.body.lastName;
        info.companyName = req.body.companyName;
        info.emailAddress = req.body.emailAddress;
        info.phone = req.body.phone;
    };

    let transporter = nodemailer.createTransport({
        sendmail: true
    });

    if (req.file !== undefined) {
        let mailOptions = {
            from: 'webinquiry@chopfees.com',
            to: 's.hong35@gmail.com',
            subject: `New Inquiry by ${info.firstName} ${info.lastName} via Chopfees.com`,
            html: "Hello, <br><br> A new inquiry was submitted on chopfees.com <br><br>" +
                    `First Name: ${info.firstName} <br>` +
                    `Last Name: ${info.lastName} <br>` +
                    `Company Name: ${info.companyName} <br>` +
                    `Email: ${info.emailAddress} <br>` +
                    `Number: ${info.phone} <br><br>` +
                    "Please check attachment for the client's merchant statement.",
            attachments: [{
                filename: req.file.originalname,
                contentType: 'application/pdf',
                path: req.file.path
            }]
        };

        transporter.sendMail(mailOptions, (err, info) => {
            let filename = req.file.filename;
    
            if (err) {
                console.log(err);
            } else {
                fs.unlink(path.join(__dirname, './upload/', filename), function(error) {
                    if (error) {
                        console.log(error);
                    }
                })
                console.log(info);
            }
        });
    } else {
        let mailOptions = {
            from: 'webinquiry@chopfees.com',
            to: 's.hong35@gmail.com',
            subject: `New Inquiry by ${info.firstName} ${info.lastName} via Chopfees.com`,
            html: "Hello, <br><br> A new inquiry was submitted on chopfees.com <br><br>" +
                    `First Name: ${info.firstName} <br>` +
                    `Last Name: ${info.lastName} <br>` +
                    `Company Name: ${info.companyName} <br>` +
                    `Email: ${info.emailAddress} <br>` +
                    `Number: ${info.phone} <br><br>` +
                    `No merchant statement was attached by the client.`
        };

        transporter.sendMail(mailOptions, (err, info) => {    
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }

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