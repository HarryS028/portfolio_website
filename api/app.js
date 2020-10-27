const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const bodyParser = require('body-parser');

// Load in the mongoose models
const { Message } = require('./db/models/message.model');

// Load middleware
app.use(bodyParser.json());

// cors headers middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
 
/* ROUTE HANDLERS  */


/* LIST ROUTES */

app.get('/messages', (req, res) => {
    Message.find({}).then((messages) => {
        res.send(messages);
    })
})

app.post('/messages', (req, res) => {
    let message_body = req.body.message_body;

    let newMessage = new Message({
        message_body
    });
    newMessage.save().then((messageDoc) => {
        // the full list document is returned including ID
        res.send(messageDoc);
    })

})

app.delete('/messages/:id', (req, res) => {
    Message.findOneAndRemove({
        _id: req.params.id
    }).then((removedMessageDoc) => { 
        res.send(removedMessageDoc);
    })
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})