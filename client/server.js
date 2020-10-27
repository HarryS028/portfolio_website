const express = requirejs('express');

const log = console.log;
const app = express();

const PORT = 8080;

app.listen(PORT, () => {
    log('Server is starting on port, ', 8080);
});

function mailer() {
    //import { nodemailer } from "./node_modules/nodemailer/lib/nodemailer"
    // <script src="https://requirejs.org/docs/release/2.3.6/comments/require.js"></script>
    //const nodemailer = requirejs('nodemailer');
    // import * as nodemailer from 'nodemailer' 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'hs.portolfio@gmail.com',
            pass: 'T84?yrS@5'
        }
    });

    let mailOptions = {
        from: 'hs.portfolio@gmail.com',
        to: 'hshuttleworth0@gmail.com',
        subject: 'Portfolio enquiry',
        text: 'test text'
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


console.log(mailer())