const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://joginder:sharma@cluster0.ctxjksu.mongodb.net/Emp_review?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on(
    'error',
    console.error.bind(console.error, 'Error in connecting to MongoDB')
);

db.once('open', function () {
    console.log('Connected to Database :: Mongodb');
});

exports.module = db;
