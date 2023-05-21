const mongoose = require('mongoose');

const dbConnect = () => {

    mongoose.connect('mongodb://localhost:27017/go-travel-app', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }).then(() => console.log('Connected to MongoDB...'))
        .catch(err => console.error('Could not connect to MongoDB...'));
}


module.exports = dbConnect;