const mongoose = require('mongoose');


const uri = 'mongodb://localhost:27017/fnodejsproject';


async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log('Connected successfully to MongoDB using Mongoose');
    } catch (err) {
        console.error('Error connecting to MongoDB with Mongoose:', err);
    }
}


module.exports = { connectToDatabase };
