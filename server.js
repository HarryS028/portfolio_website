const express = require('express');
const nodemailer = require('nodemailer')
require('dotenv').config();

const log = console.log;
const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    log('Server is starting on port, ', port);
});

function send_email(name, message_body, email, phone, subject) {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: 'hshuttleworth0@gmail.com',
        subject: 'Portfolio enquiry',
        text: "Name: " + name + ", Email: " + email + ",Subject: " + subject + ", Message Body: " + message_body + ", Phone: " + phone
    };

    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            console.log('Error occurs', err);
        } else {
            console.log('Email sent!');
        }
    });

    return "Email sent"
}



module.exports.send_email = send_email;
//console.log(send_email())