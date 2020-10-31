const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message_body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    subject: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message }