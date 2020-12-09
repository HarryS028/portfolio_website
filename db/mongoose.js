// This file will handle connection logic to MongoDB

const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb+srv://HarryS028:6c3tyBS5@portfolio.rdfwi.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI || 'mongodb://localhost:27017/ContactManager', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprecation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};