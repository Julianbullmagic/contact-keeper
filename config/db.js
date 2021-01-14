const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Julian_Bull:bIGP1SxlM3RvYHEl@cluster0.k6i5j.mongodb.net/contact-keeper?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            userFindAndModify: false
        });
        console.log('MongoDB Connected ...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
