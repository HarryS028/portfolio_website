const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message_body: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})

const Message = mongoose.model('Message', MessageSchema);

module.exports = { Message }